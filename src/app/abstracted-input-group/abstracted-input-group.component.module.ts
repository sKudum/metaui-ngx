import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SomeService} from '../services/some-service';
import {AbstractedInputGroupComponent} from './abstracted-input-group.component';
import { InputGroupComponent,InputGroupAddonComponent,InputGroupInputComponent,PlatformInputGroupModule  } from '@fundamental-ngx/platform';


@NgModule({
  declarations: [
    AbstractedInputGroupComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PlatformInputGroupModule
  ],
  providers: [
    SomeService
  ],

  exports: [
    AbstractedInputGroupComponent,
    HttpClientModule,
    PlatformInputGroupModule
  ]
})
export class AbstractedInputGroupComponentModule {
}
