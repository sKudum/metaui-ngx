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
import { PlatformTextAreaModule,
  TextAreaComponent} from '@fundamental-ngx/platform';
import { RtlService } from '@fundamental-ngx/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './my-text-area.component.html'
})
export class MyTextAreaComponent implements OnInit {

  @ViewChild(TextAreaComponent, {static: true})
  textarea: TextAreaComponent;

  form: FormGroup;
  data: ReadonlyDescriptionObject;

  constructor(private viewContainer: ViewContainerRef,
              private crf: ComponentFactoryResolver,
              private render: Renderer2,
              private compiler: Compiler,
              private injector: Injector,
              private cd: ChangeDetectorRef,
              private _rtlService: RtlService) {

                this.form = new FormGroup({});

                this.data = new ReadonlyDescriptionObject(
                    'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                        'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                        'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                        'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                        'This is a readonly description where you can scroll down to read but cannot edit anything. ' +
                        'This is a readonly description where you can scroll down to read but cannot edit anything.'
                );
}

  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformTextAreaModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);

    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<TextAreaComponent> = this.viewContainer.createComponent(cmdFactory, null,
      this.injector, [[]], moduleNgModuleRef);
      component.instance.name = "compactTextarea";
      component.instance.value = "this is a disabled textarea";
      component.instance.contentDensity = "compact";
      component.instance.disabled = true;
      component.instance.cols = 10;
      component.instance.height ="80px";
      //component.instance.value = "ff1.formControl";
  }
}

class ReadonlyDescriptionObject {
  constructor(public readonlyDescription: string) {}
}
