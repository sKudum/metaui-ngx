import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyButtonComponent} from './button/my-button.component';
import {MyInputComponent} from './input/my-input.component';
import {ComplexComponentModule} from './complex-component/complex-component.module';
import {PlatformButtonModule,ButtonComponent} from '@fundamental-ngx/platform';
import { InputGroupComponent, FormModule,InputGroupModule  } from '@fundamental-ngx/core';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyInputComponent
  ],
  exports:[
    PlatformButtonModule,
    ButtonComponent,
    MyButtonComponent,
    InputGroupComponent
  ],
  imports: [
    BrowserModule,
    PlatformButtonModule,
    FormModule,
    InputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
