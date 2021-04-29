import {ChangeDetectorRef, Component, Input, OnInit, ViewContainerRef,
   Injector, ComponentFactoryResolver, Renderer2, Compiler, ComponentRef,
    ViewChild} from '@angular/core';
import { PlatformObjectMarkerModule, PlatformObjectMarkerComponent } from '@fundamental-ngx/platform';

@Component({
  selector: 'app-object-marker',
  templateUrl: './my-object-marker.component.html'
})
export class MyObjectMarkerComponent implements OnInit {

  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler,
    private injector: Injector,private cd: ChangeDetectorRef) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformObjectMarkerModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    console.log(module.componentFactories);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<PlatformObjectMarkerComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

      component.instance.glyph = "add-favorite";
      component.instance.ariaLabel = "favorite only icon";
      component.instance.title = "Favorite";
    console.log(component);
  }
}
