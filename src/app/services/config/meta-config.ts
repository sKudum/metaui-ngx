/**
 *
 * @license
 * Copyright 2017 SAP Ariba
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *
 */
import {BooleanWrapper, NumberWrapper} from '../utils/lang';
import {Environment} from './environment';
import {Injectable} from '@angular/core';
import {AppConfigUserRulesParam} from '../constants';

export interface MetaConfigVars {
  loadApplicationRule: boolean;
  inTest: boolean;
}

/**
 * Simple Configuration implementation  which let us configure MetaUI during a bootstrap
 * phase.
 *
 */
@Injectable({providedIn: 'root'})
export class MetaConfig {
  private values: Map<string, any>;
  private config: MetaConfigVars;

  constructor(public environment: Environment) {
    this.values = new Map<string, any>();
  }

  /**
   *
   * Called by factory method to initialize this config class
   *
   */
  init(config: MetaConfigVars) {
    this.config = config;
    if (this.config.loadApplicationRule === undefined) {
      this.config.loadApplicationRule = false;
    }
    this.environment.inTest = this.config.inTest;
    this.set(AppConfigUserRulesParam, []);
  }

  /**
   * This method is mostly used on the app layer to register whoel imports
   *
   * import * as rules ./rules/user-rules.ts
   *
   *
   * todo: translate this to key value pair
   */
  registerRules(rules: any): void {
    const existingRules: Array<any> = this.get(AppConfigUserRulesParam) || [];
    existingRules.push(rules);
  }

  /**
   * have to support above format from impots
   *
   */
  registerRule(forType: string, content: string): void {
    const existingRules: Array<any> = this.get(AppConfigUserRulesParam) || [];
    const rule: any = {
      [`${forType}Rule`]: content
    };
    existingRules.push(rule);
  }

  preloadApplicationRule(): boolean {
    return this.config.loadApplicationRule;
  }

  /**
   * Sets values to configuration. to make sure we will not run into case-sensitive problems we
   * are converting all keys into lowercase
   *
   */
  set(key: string, value: any): void {
    this.values.set(key.toLowerCase(), value);
  }

  /**
   * Sets values to configuration
   * todo: dont do all this with this hacky way. just if you need to check case sensitivity, then
   * simply map keys from this.values into lowercase and then check if it has a key
   */
  get(key: string): any {
    if (this.values.has(key.toLowerCase())) {
      return this.values.get(key.toLowerCase());
    }
    return null;
  }


  getNumber(key: string): number {
    const val = this.get(key);
    return NumberWrapper.parseIntAutoRadix(val);
  }


  getBoolean(key: string): boolean {
    const val = this.get(key);
    return BooleanWrapper.boleanValue(val);
  }
}


/**
 * Factory instantiate MetaConfig provider
 *
 */
export function makeConfig(config: MetaConfigVars, env: Environment): MetaConfig {
  const conf: MetaConfig = new MetaConfig(env);
  conf.init(config);
  return conf;
}



