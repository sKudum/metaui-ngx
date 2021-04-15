import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyButtonComponent} from './button/my-button.component';
import {MyInputComponent} from './input/my-input.component';
import {MyCheckboxComponent} from './checkbox/checkbox.component';
import {MyComboboxComponent} from './combobox/combobox.component';
import {MyTextAreaComponent} from './text-area/my-text-area.component';
import {MyTimePickerComponent} from './time-picker/my-time-picker.component';
import {PlatformButtonModule,
  ButtonComponent,
  PlatformCheckboxModule,
  CheckboxComponent,
  PlatformComboboxModule,
  ComboboxComponent,
  PlatformTextAreaModule,
  TextAreaComponent,
  FdpFormGroupModule,
  PlatformTimePickerModule,
  PlatformTimePickerComponent
} from '@fundamental-ngx/platform';
import { InputGroupComponent, FormModule,InputGroupModule, RtlService, ButtonModule,TimePickerModule  } from '@fundamental-ngx/core';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyInputComponent,
    MyCheckboxComponent,
    MyComboboxComponent,
    MyTextAreaComponent,
    MyTimePickerComponent
  ],
  exports:[
    PlatformButtonModule,
    ButtonComponent,
    MyButtonComponent,
    InputGroupComponent,
    CheckboxComponent,
    ComboboxComponent,
    TextAreaComponent,
    PlatformTimePickerComponent
  ],
  imports: [
    BrowserModule,
    PlatformButtonModule,
    FormModule,
    InputGroupModule,
    PlatformCheckboxModule,
    PlatformComboboxModule,
    PlatformTextAreaModule,
    FdpFormGroupModule,
    PlatformTimePickerModule,
    ButtonModule,
    TimePickerModule
  ],
  providers: [RtlService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
