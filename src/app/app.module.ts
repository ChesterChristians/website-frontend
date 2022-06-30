import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { JesusWhoComponent } from './pages/jesus-who/jesus-who.component';
import { UnityPleaseComponent } from './pages/unity-please/unity-please.component';
import { ThinkComponent } from './pages/think/think.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MinistryComponent } from './pages/ministry/ministry.component';
import { TheBodyComponent } from './pages/the-body/the-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ContactUsComponent,
    JesusWhoComponent,
    UnityPleaseComponent,
    ThinkComponent,
    AboutUsComponent,
    MinistryComponent,
    TheBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
