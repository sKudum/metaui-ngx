import {ChangeDetectorRef, Component, OnInit, ViewContainerRef, Injector, ComponentFactoryResolver, Renderer2, Compiler, ComponentRef, ViewChild} from '@angular/core';
import {AbstractedInputGroupComponent } from '../abstracted-input-group/abstracted-input-group.component';
import {AbstractedInputGroupComponentModule } from '../abstracted-input-group/abstracted-input-group.component.module';

@Component({
  selector: 'app-input-group',
  templateUrl: './my-input-group.component.html'
})
export class MyInputGroupComponent implements OnInit {

  @ViewChild(AbstractedInputGroupComponent, {static: true}) myinput: AbstractedInputGroupComponent;


  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector,private cd: ChangeDetectorRef) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(AbstractedInputGroupComponentModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    console.log(module.componentFactories);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<AbstractedInputGroupComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);
      component.instance.name="'$'";
      component.instance.placeholder="'Amount'";
      component.instance.amount="'$'";
      component.instance.value="'$'";
  }
}
