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
import { PlatformComboboxModule,
         ComboboxComponent } from '@fundamental-ngx/platform';
import { RtlService } from '@fundamental-ngx/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html'
})
export class MyComboboxComponent implements OnInit {

  @ViewChild(ComboboxComponent, {static: true})
  combobox: ComboboxComponent;

  constructor(private viewContainer: ViewContainerRef,
              private crf: ComponentFactoryResolver,
              private render: Renderer2,
              private compiler: Compiler,
              private injector: Injector,
              private cd: ChangeDetectorRef,
              private _rtlService: RtlService) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformComboboxModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);

    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<ComboboxComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);
      component.instance.name = "Combobox";
      component.instance.value = "selectedItem4";
      component.instance.readonly = true;
  }
}
