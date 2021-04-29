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
  PlatformDatetimePickerComponent,
  PlatformCheckboxGroupModule,
  CheckboxGroupComponent,
  PlatformMultiInputModule,
  PlatformMultiInputComponent,
  PlatformSearchFieldModule,
  SearchFieldComponent,
  PlatformObjectMarkerModule,
  PlatformObjectMarkerComponent,
  PlatformFeedInputModule,
  FeedInputComponent
} from '@fundamental-ngx/platform';
import { InputGroupComponent,
         FormModule,
         InputGroupModule,
         RtlService,
         ButtonModule,
         IconModule,
         ObjectNumberModule, ObjectNumberComponent} from '@fundamental-ngx/core';

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
import {MyCheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import {MyInputGroupComponent} from './input-group/my-input-group.component';
import {MyMultiInputComponent} from './multi-input/my-multi-input.component';
import {MySearchFieldComponent} from './search-field/search-field.component';
import {MyObjectMarkerComponent} from './object-marker/my-object-marker.component';
import {MyObjectNumberComponent} from './object-number/my-object-number.component';
import {MyFeedInputComponent} from './feed-input/feed-input.component';
import {AbstractedInputGroupComponentModule } from './abstracted-input-group/abstracted-input-group.component.module';
import {BindingValueFactory } from './services/binding-factory.service';
import {RouterModule } from '@angular/router';

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
    MyDateTimePickerComponent,
    MyCheckboxGroupComponent,
    MyInputGroupComponent,
    MyMultiInputComponent,
    MySearchFieldComponent,
    MyObjectMarkerComponent,
    MyObjectNumberComponent,
    MyFeedInputComponent
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
    PlatformDatetimePickerComponent,
    CheckboxGroupComponent,
    PlatformMultiInputComponent,
  SearchFieldComponent,
   PlatformObjectMarkerComponent,
   ObjectNumberComponent,
  FeedInputComponent
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
    PlatformDatetimePickerModule,
    PlatformCheckboxGroupModule,
    IconModule,
    AbstractedInputGroupComponentModule,
    PlatformMultiInputModule,
    PlatformSearchFieldModule,
    PlatformObjectMarkerModule,
    ObjectNumberModule,
    RouterModule.forRoot([]),
   PlatformFeedInputModule
  ],
  providers: [RtlService,BindingValueFactory],
  bootstrap: [AppComponent]
})
export class AppModule {
}
