import { ChangeDetectorRef,
         Component,
        OnInit,
        ViewContainerRef,
        Injector,
        ComponentFactoryResolver,
        Renderer2,
        Compiler,
        ComponentRef,
        ViewChild } from '@angular/core';
import { PlatformCheckboxModule,
         CheckboxComponent } from '@fundamental-ngx/platform';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class MyCheckboxComponent implements OnInit {

  @ViewChild(CheckboxComponent, { static: true })
  checkbox: CheckboxComponent;

  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformCheckboxModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<CheckboxComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

    component.instance.label = "Checkbox";
    component.instance.tristate = true;
  }
}
