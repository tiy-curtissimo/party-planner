import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonListComponent } from './person-list/person-list.component';
import { people } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ people: people })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
