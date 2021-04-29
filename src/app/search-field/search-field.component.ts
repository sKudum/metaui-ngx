import { ChangeDetectorRef,
         Component,
        OnInit,
        ViewContainerRef,
        Injector,
        ComponentFactoryResolver,
        Renderer2,
        Compiler,
        ComponentRef,
        ViewChild } from '@angular/core';
import { PlatformSearchFieldModule,
  SearchFieldComponent,SuggestionItem, SearchInput } from '@fundamental-ngx/platform';


@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html'
})
export class MySearchFieldComponent implements OnInit {

  public suggestions: SuggestionItem[];

  @ViewChild(SearchFieldComponent, { static: true })
  searchField: SearchFieldComponent;

  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    this.suggestions = [
      {
          value: 'Apple'
      },
      {
          value: 'Banana'
      },
      {
          value: 'Blueberry'
      },
      {
          value: 'Cherry'
      },
      {
          value: 'Grape'
      },
      {
          value: 'Lemon'
      },
      {
          value: 'Lime'
      },
      {
          value: 'Orange'
      },
      {
          value: 'Peach'
      },
      {
          value: 'Pineapple'
      },
      {
          value: 'Plum'
      },
      {
          value: 'Raspberry'
      }
  ];

    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformSearchFieldModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<SearchFieldComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

    component.instance.placeholder = "'Search'";
    //component.instance.suggestions = "suggestions" ;
  }
}
