import {ChangeDetectorRef,
        Component,
        OnInit,
        ViewContainerRef,
        Injector,
        ComponentFactoryResolver,
        Renderer2,
        Compiler,
        ComponentRef,
        ViewChild } from '@angular/core';
import { PlatformSwitchModule, SwitchComponent } from '@fundamental-ngx/platform';
import { RtlService } from '@fundamental-ngx/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html'
})
export class MySwitchComponent implements OnInit {

  @ViewChild(SwitchComponent, {static: true})
  switch: SwitchComponent;

  customForm = new FormGroup({
    switch1: new FormControl(false)
});

  constructor(private viewContainer: ViewContainerRef,
              private crf: ComponentFactoryResolver,
              private render: Renderer2,
              private compiler: Compiler,
              private injector: Injector,
              private cd: ChangeDetectorRef,
              private _rtlService: RtlService) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformSwitchModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<SwitchComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);
      component.instance.name = "default-compact-switch";
      component.instance.contentDensity = "compact";
      component.instance.semantic = true;

  }
}
