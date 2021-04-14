import {ChangeDetectorRef, Component, OnInit, ViewContainerRef, Injector, ComponentFactoryResolver, Renderer2, Compiler, ComponentRef, ViewChild} from '@angular/core';
import { InputGroupComponent, InputGroupModule  } from '@fundamental-ngx/core';

@Component({
  selector: 'app-input',
  templateUrl: './my-input.component.html'
})
export class MyInputComponent implements OnInit {

  @ViewChild(InputGroupComponent, {static: true}) myinput: InputGroupComponent;


  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector,private cd: ChangeDetectorRef) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(InputGroupModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    console.log(module.componentFactories);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<InputGroupComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

      component.instance.addOnText = "'$'" ;
      component.instance.placeholder = "'Amount'";
  }
}
