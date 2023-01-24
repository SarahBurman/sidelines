import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SidelinesLoginComponent } from './sidelines-login/sidelines-login.component';

@NgModule({
  declarations: [AppComponent, SidelinesLoginComponent],
  imports: [BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
