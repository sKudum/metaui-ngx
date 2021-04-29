import {ChangeDetectorRef,
        Component,
        OnInit,
        ViewContainerRef,
        Injector,
        ComponentFactoryResolver,
        Renderer2,
        Compiler,
        ComponentRef,
        ChangeDetectionStrategy} from '@angular/core';

import { PlatformMultiInputModule,
  PlatformMultiInputComponent,DATA_PROVIDERS} from '@fundamental-ngx/platform';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-input',
  templateUrl: './my-multi-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DATA_PROVIDERS, useValue: new Map() }]
})
export class MyMultiInputComponent implements OnInit {
  customForm = new FormGroup({
    field: new FormControl()
});

  _datasource = [
    { firstName: 'Alabama', lastName: 'Montgomery' },
    { firstName: 'Alaska', lastName: 'Juneau' },
    { firstName: 'Arizona', lastName: 'Phoenix' },
    { firstName: 'Arkansas', lastName: 'Little Rock' },
    { firstName: 'California', lastName: 'Sacramento' },
    { firstName: 'Colorado', lastName: 'Denver' },
    { firstName: 'Connecticut', lastName: 'Hartford' },
    { firstName: 'Kentucky', lastName: 'Frankfort' },
    { firstName: 'Delaware', lastName: 'Dover' },
    { firstName: 'Florida', lastName: 'Tallahassee' },
    { firstName: 'Georgia', lastName: 'Atlanta' },
    { firstName: 'Hawaii', lastName: 'Honolulu' },
    { firstName: 'Idaho', lastName: 'Boise' },
    { firstName: 'Illinois', lastName: 'Springfield' },
    { firstName: 'Indiana', lastName: 'Indianapolis' },
    { firstName: 'Iowa', lastName: 'Des Moines' },
    { firstName: 'Kansas', lastName: 'Topeka' },
    { firstName: 'Kentucky', lastName: 'Frankfort' },
    { firstName: 'Louisiana', lastName: 'Baton Rouge' },
    { firstName: 'Maine', lastName: 'Augusta' },
    { firstName: 'Maryland', lastName: 'Annapolis' },
    { firstName: 'Massachusetts', lastName: 'Boston' },
    { firstName: 'Michigan', lastName: 'Lansing' },
    { firstName: 'Minnesota', lastName: 'St. Paul' },
    { firstName: 'Mississippi', lastName: 'Jackson' },
    { firstName: 'Missouri', lastName: 'Jefferson City' },
    { firstName: 'Montana', lastName: 'Helena' },
    { firstName: 'Nebraska', lastName: 'Lincoln' },
    { firstName: 'Nevada', lastName: 'Carson City' },
    { firstName: 'New Hampshire', lastName: 'Concord' },
    { firstName: 'New Jersey', lastName: 'Trenton' },
    { firstName: 'New Mexico', lastName: 'Santa Fe' },
    { firstName: 'New York', lastName: 'Albany' },
    { firstName: 'North Carolina', lastName: 'Raleigh' },
    { firstName: 'North Dakota', lastName: 'Bismarck' },
    { firstName: 'Ohio', lastName: 'Columbus' },
    { firstName: 'Oklahoma', lastName: 'Oklahoma City' },
    { firstName: 'Oregon', lastName: 'Salem' },
    { firstName: 'Pennsylvania', lastName: 'Harrisburg' },
    { firstName: 'Rhode Island', lastName: 'Providence' },
    { firstName: 'South Carolina', lastName: 'Columbia' },
    { firstName: 'South Dakota', lastName: 'Pierre' },
    { firstName: 'Tennessee', lastName: 'Nashville' },
    { firstName: 'Texas', lastName: 'Austin' },
    { firstName: 'Utah', lastName: 'Salt Lake City' },
    { firstName: 'Vermont', lastName: 'Montpelier' },
    { firstName: 'Virginia', lastName: 'Richmond' },
    { firstName: 'Washington', lastName: 'Olympia' },
    { firstName: 'West Virginia', lastName: 'Charleston' },
    { firstName: 'Wisconsin', lastName: 'Madison' },
    { firstName: 'Wyoming', lastName: 'Cheyenne' }
];

  constructor(private viewContainer: ViewContainerRef,
              private crf: ComponentFactoryResolver,
              private render: Renderer2,
              private compiler: Compiler,
              private injector: Injector,
              private cd: ChangeDetectorRef) {
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformMultiInputModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);

    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<PlatformMultiInputComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);
      component.instance.dataSource = this._datasource;
      component.instance.type="text";
      component.instance.placeholder="Field placeholder text";
      component.instance.id="fdp-id-complex";
      component.instance.name="fdp-name";
      component.instance.displayKey="firstName";
      component.instance.description="lastName";
      component.instance.showSecondaryText=true;
      component.instance.hasByLine=true;
  }
}
