import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrickComponent } from './trick/trick.component';
import { CompactComponent } from './compact/compact.component';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    TrickComponent,
    CompactComponent,
    DesktopComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
