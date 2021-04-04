import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManualComponent } from './manual/manual.component';
import { AutoComponent } from './auto/auto.component';

@NgModule({
  declarations: [AppComponent, ManualComponent, AutoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
