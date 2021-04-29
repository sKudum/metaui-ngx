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
import { PlatformFeedInputModule,
  FeedInputComponent } from '@fundamental-ngx/platform';

@Component({
  selector: 'app-feed-input',
  templateUrl: './feed-input.component.html'
})
export class MyFeedInputComponent implements OnInit {

  @ViewChild(FeedInputComponent, { static: true })
  feedInput: FeedInputComponent;

  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
    private render: Renderer2, private compiler: Compiler, private injector: Injector, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformFeedInputModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<FeedInputComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);

    component.instance.avatarSrc="https://avatars.dicebear.com/api/human/fe.svg?m=6&b=%23f5f0f0&mood[]=surprised";
    component.instance.placeholder="Add a comment";
    component.instance.userTitle="John Doe";
  }
}
