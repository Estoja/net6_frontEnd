import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderNavBarComponent } from './header-nav-bar/header-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FacebookComponent } from './footer/facebook/facebook.component';
import { InstagramComponent } from './footer/instagram/instagram.component';
import { LinkedInComponent } from './footer/linked-in/linked-in.component';
import { PhoneMailComponent } from './footer/phone-mail/phone-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderNavBarComponent,
    FooterComponent,
    SideNavComponent,
    FacebookComponent,
    InstagramComponent,
    LinkedInComponent,
    PhoneMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
