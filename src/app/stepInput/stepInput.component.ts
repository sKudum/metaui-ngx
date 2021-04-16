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
import { PlatformStepInputModule,
  NumberStepInputComponent } from '@fundamental-ngx/platform';


@Component({
  selector: 'app-stepInput',
  templateUrl: './stepInput.component.html'
})
export class MyStepInputComponent implements OnInit {

  @ViewChild(NumberStepInputComponent, { static: true })
  stepInput: NumberStepInputComponent;

  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformStepInputModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<NumberStepInputComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

    component.instance.name = "number";
    component.instance.contentDensity = "compact";
    component.instance.value = 0;
  }
}
