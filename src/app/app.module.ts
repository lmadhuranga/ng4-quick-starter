import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes =[
  {path:'', component:UserComponent},
  {path:'about', component:AboutusComponent},

]

import { DataService } from './services/data.service';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
