import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankBackgroundComponent } from './blank-background/blank-background.component';
import { NavBackgroundComponent } from './nav-background/nav-background.component';
import { ExampleContent1Component } from './example-content1/example-content1.component';
import { ExampleContent2Component } from './example-content2/example-content2.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankBackgroundComponent,
    NavBackgroundComponent,
    ExampleContent1Component,
    ExampleContent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
