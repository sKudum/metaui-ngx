import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
  PlatformTimePickerComponent,
  NumberStepInputComponent,
  PlatformStepInputModule,
  PlatformSwitchModule,
  SwitchComponent,
  PlatformSelectModule,
  SelectComponent,
  PlatformDatePickerModule,
  PlatformDatePickerComponent,
  PlatformDatetimePickerModule,
  PlatformDatetimePickerComponent
} from '@fundamental-ngx/platform';
import { InputGroupComponent,
         FormModule,
         InputGroupModule,
         RtlService,
         ButtonModule } from '@fundamental-ngx/core';

import {AppComponent} from './app.component';
import {MyButtonComponent} from './button/my-button.component';
import {MyInputComponent} from './input/my-input.component';
import {MyCheckboxComponent} from './checkbox/checkbox.component';
import {MyComboboxComponent} from './combobox/combobox.component';
import {MyTextAreaComponent} from './text-area/my-text-area.component';
import {MyTimePickerComponent} from './time-picker/my-time-picker.component';
import {MyStepInputComponent} from './stepInput/stepInput.component';
import {MySwitchComponent} from './switch/switch.component';
import {MySelectComponent} from './select/select.component';
import {MyDatePickerComponent } from './date-picker/my-date-picker.component';
import {MyDateTimePickerComponent } from './date-time-picker/my-date-time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyInputComponent,
    MyCheckboxComponent,
    MyComboboxComponent,
    MyTextAreaComponent,
    MyTimePickerComponent,
    MyStepInputComponent,
    MySwitchComponent,
    MySelectComponent,
    MyDatePickerComponent,
    MyDateTimePickerComponent
  ],
  exports:[
    PlatformButtonModule,
    ButtonComponent,
    MyButtonComponent,
    InputGroupComponent,
    CheckboxComponent,
    ComboboxComponent,
    TextAreaComponent,
    PlatformTimePickerComponent,
    NumberStepInputComponent,
    SwitchComponent,
    SelectComponent,
    PlatformDatePickerComponent,
    PlatformDatetimePickerComponent
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
    PlatformStepInputModule,
    PlatformSwitchModule,
    PlatformSelectModule,
    PlatformDatePickerModule,
    PlatformDatetimePickerModule

  ],
  providers: [RtlService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
