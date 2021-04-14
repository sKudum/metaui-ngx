import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SomeService} from '../services/some-service';
import {ComplexComponentComponent} from './complex-component.component';

@NgModule({
  declarations: [
    ComplexComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SomeService
  ],

  exports: [
    ComplexComponentComponent,
    HttpClientModule
  ]
})
export class ComplexComponentModule {
}
