// Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

// Components
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';

// Services
import {GameService} from './services/game.service';
import {FunctionsService} from './services/firebase/functions.service';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {FirebaseModule} from "./firebase.module";

@NgModule({
  declarations: [AppComponent, BoardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MaterialModule,
    FirebaseModule,
  ],
  providers: [GameService, FunctionsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}


