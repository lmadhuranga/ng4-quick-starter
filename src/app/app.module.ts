import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';

import {UserComponent} from './components/user/user.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';

import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdListModule,
  MdToolbarModule,
} from '@angular/material';


const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'about', component: AboutusComponent},

]

import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Material Design Imports--------------------|
    BrowserAnimationsModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    RouterModule.forRoot(appRoutes),
    // Material Design Imports--------------------|
  ],
  exports: [
    MdButtonModule,
    MdListModule,
    MdToolbarModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
