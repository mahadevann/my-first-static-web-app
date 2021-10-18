import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Homepage2Component } from './homepage2/homepage2.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, Homepage2Component],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
