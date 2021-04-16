import {ChangeDetectorRef,
        Component,
        OnInit,
        ViewContainerRef,
        Injector,
        ComponentFactoryResolver,
        Renderer2,
        Compiler,
        ComponentRef,
        ViewChild } from '@angular/core';

import { PlatformDatePickerModule,
  PlatformDatePickerComponent} from '@fundamental-ngx/platform';
import { RtlService, DatetimeAdapter, DATE_TIME_FORMATS, FdDate, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './my-date-picker.component.html',
  providers: [
    {
        provide: DatetimeAdapter,
        useClass: FdDatetimeAdapter
    },
    {
        provide: DATE_TIME_FORMATS,
        useValue: FD_DATETIME_FORMATS
    }
]
})
export class MyDatePickerComponent implements OnInit {
  allowNullTimeObject: FdDate = new FdDate().setTime(12, 0, 0);

  @ViewChild(PlatformDatePickerComponent, {static: true})
  datePicker: PlatformDatePickerComponent<Date>;

  constructor(private viewContainer: ViewContainerRef,
              private crf: ComponentFactoryResolver,
              private render: Renderer2,
              private compiler: Compiler,
              private injector: Injector,
              private cd: ChangeDetectorRef,
              private _rtlService: RtlService) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformDatePickerModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);

    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<PlatformDatePickerComponent<Date>> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);
      component.instance.name = "birthday";
      component.instance.allowNull = false;
  }
}
