import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponentsModule } from './dynamic-component-module/dynamic-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DynamicComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
