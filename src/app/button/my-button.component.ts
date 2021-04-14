import {ChangeDetectorRef, Component, Input, OnInit, ViewContainerRef, Injector, ComponentFactoryResolver, Renderer2, Compiler, ComponentRef, ViewChild} from '@angular/core';
import { PlatformButtonModule, ButtonComponent } from '@fundamental-ngx/platform';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html'
})
export class MyButtonComponent implements OnInit {

  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector,private cd: ChangeDetectorRef) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformButtonModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    console.log(module.componentFactories);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<ButtonComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

      component.instance.label = "My Button";
      component.instance.buttonType = "emphasized";
    console.log(component);
  }
}
