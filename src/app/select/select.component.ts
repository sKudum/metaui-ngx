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
        ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


import { PlatformSelectModule,
          SelectComponent,
          FdpSelectionChangeEvent,
          OptionItem  } from '@fundamental-ngx/platform';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class MySelectComponent implements OnInit {
  fromData: OptionItem[] = [
    { label: 'Apple', value: 'A' },
    { label: 'Banana', value: 'B' },
    { label: 'Pineapple', value: 'C' },
    { label: 'Strawberry', value: 'D' },
    { label: 'Broccoli', value: 'E' },
    { label: 'Carrot', value: 'F' },
    { label: 'Jalapeño', value: 'G' },
    { label: 'Spinach', value: 'H' }
];

customForm = new FormGroup({
    field: new FormControl()
});

selectedItem = null;

@ViewChild(SelectComponent, { static: true })
select: SelectComponent;

  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformSelectModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<SelectComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

    component.instance.width = "7rem";
    component.instance.name = "field";
    component.instance.placeholder="Select an option";
    component.instance.value="selectedItem";
  }
}
