import {ChangeDetectorRef, Component, Input, OnInit, ViewContainerRef,
   Injector, ComponentFactoryResolver, Renderer2, Compiler, ComponentRef,
    ViewChild} from '@angular/core';
import { ObjectNumberModule, ObjectNumberComponent } from '@fundamental-ngx/core';
import { BindingValueFactory } from '../services/binding-factory.service';

@Component({
  selector: 'app-object-number',
  templateUrl: './my-object-number.component.html'
})
export class MyObjectNumberComponent implements OnInit {

  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler,
    private injector: Injector,private cd: ChangeDetectorRef,
    public bindingValueFactory: BindingValueFactory) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(ObjectNumberModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    console.log(module.componentFactories);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<ObjectNumberComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

      component.instance.number = -2000;
      component.instance.unit = "EUR";
      component.instance.status = "negative";
      component.instance.decimal = 2;
    console.log(component);
  }
}
