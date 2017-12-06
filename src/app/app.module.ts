
/* =========================================================================================
 * Import Packages
 * ========================================================================================= */

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/* =========================================================================================
 * Ionic Native
 * ========================================================================================= */

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* =========================================================================================
 * Setting
 * ========================================================================================= */

import { MyApp } from './app.component';
import { AppSetting } from '../common/app.setting';

/* =========================================================================================
 * Injectable (Library & Helper)
 * ========================================================================================= */

import { ApiLibrary } from '../librarys/api.library';
import { CustomLibrary } from '../librarys/custom.library';
import { SecurityLibrary } from '../librarys/security.library';
import { CookieLibrary } from '../librarys/cookie.library';

/* =========================================================================================
 * Component (Pages)
 * ========================================================================================= */

import { MainNav } from '../pages/main/nav';

/* =========================================================================================
 * NgModule
 * ========================================================================================= */

@NgModule({
    // Component File.
    declarations: [
        MyApp, MainNav
    ],
    // Component File.
    entryComponents: [
        MyApp, MainNav
    ],
    // Injectable File.
    providers: [
        StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler },
        AppSetting, ApiLibrary, CustomLibrary, SecurityLibrary, CookieLibrary
    ],
    // Ionic & Angular Module
    imports: [
        BrowserModule, IonicModule.forRoot(MyApp),  HttpModule, JsonpModule, FormsModule, ReactiveFormsModule
    ],
    bootstrap: [ IonicApp ]
})

export class AppModule {}