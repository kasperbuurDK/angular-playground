import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {CdkListbox, CdkOption} from '@angular/cdk/listbox';
import { ListBoxComponent } from './list-box/list-box.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DatepickerComponent,
    ListBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
     MatInputModule,
      MatNativeDateModule,
       MatDatepickerModule,
       CdkListbox, 
       CdkOption
      ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'da'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
