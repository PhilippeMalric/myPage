import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './pages/first/first.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './Ngrx/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './Ngrx/app.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObjectifComponent } from './pages/myPages/objectif/objectif.component';
import {MatTableModule} from '@angular/material/table';
import { NavComponent } from './pages/components/nav/nav.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PageNotFoundComponent,
    ObjectifComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ main: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
