/* =======================================================
 *
 * Created by anele on 2020/10/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({

    declarations: [
        AppComponent
    ],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],

    providers: [ Title ],

    bootstrap: [AppComponent]
})
export class AppModule { }
