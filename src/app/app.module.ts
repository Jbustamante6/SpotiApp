import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NabvarComponent } from './components/shared/nabvar/nabvar.component';
import { ArtistComponent } from './components/artist/artist.component';

//services
import { SpotifyService } from './services/spotify.service';

//http 
 import { HttpClientModule } from '@angular/common/http';
 import { FormsModule } from '@angular/forms';
 

import { app_routing } from './app.routes';
import { SinfotoPipe } from './pipes/sinfoto.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NabvarComponent,
    SinfotoPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
