import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestaComponent } from './testa/testa.component';
import { TestbComponent } from './testb/testb.component';

@NgModule({
  declarations: [AppComponent, TestaComponent, TestbComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
