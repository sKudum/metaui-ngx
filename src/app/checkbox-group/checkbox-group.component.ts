import { ChangeDetectorRef,
         Component,
        OnInit,
        ViewContainerRef,
        Injector,
        ComponentFactoryResolver,
        Renderer2,
        Compiler,
        ComponentRef,
        ViewChild,
        Input} from '@angular/core';

import { FormGroup, FormControl, NgModel } from '@angular/forms'
import { PlatformCheckboxGroupModule, SelectItem,CheckboxGroupComponent } from '@fundamental-ngx/platform';


@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html'
})
export class MyCheckboxGroupComponent implements OnInit {

  @ViewChild(CheckboxGroupComponent, { static: true })
  checkboxGroup: CheckboxGroupComponent;

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  form1 = new FormGroup({});
  @Input()
control:FormControl;

  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformCheckboxGroupModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<CheckboxGroupComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

    component.instance.name = "Seasons";
    component.instance.list = this.seasons;
    component.instance.isInline = true;
   // component.instance.= this.form1;

      }
}
