import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiselectComponent } from './multiselect.component';
import { MultiselectListComponent } from './multiselect-list.component';
import { ScrollTrackerDirective } from './scroll-tracker.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MultiselectComponent,
    MultiselectListComponent,
    ScrollTrackerDirective
  ],
  bootstrap:  [AppComponent]
})
export class AppModule { }
