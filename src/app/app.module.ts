import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './MyComponents/property/property.component';
import { PropertyItemComponent } from './MyComponents/property-item/property-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { NgxAirtableModule } from 'ngx-airtable';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxAirtableModule.forRoot({ apiKey: 'keyLx1P0ufhI8Xmt1' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
