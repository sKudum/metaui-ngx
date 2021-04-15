import {ChangeDetectorRef, Component, OnInit, ViewContainerRef, Injector, ComponentFactoryResolver, Renderer2, Compiler, ComponentRef, ViewChild} from '@angular/core';
import { InputComponent, PlatformInputModule  } from '@fundamental-ngx/platform';

@Component({
  selector: 'app-input',
  templateUrl: './my-input.component.html'
})
export class MyInputComponent implements OnInit {

  @ViewChild(InputComponent, {static: true}) myinput: InputComponent;


  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector,private cd: ChangeDetectorRef) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformInputModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    console.log(module.componentFactories);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<InputComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

      component.instance.name="input4";
      component.instance.type="text";
      component.instance.contentDensity="compact";
  }
}
