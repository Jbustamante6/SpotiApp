import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  artistas: any[];
  artista: any[];
  tracks: any[];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQDwaZZtqJinv8m7uy-WmiD442WgQRqskSb2EmggeGXIfaJYIQgUYQkaJkPZ5MkbBfXv2SXD1ihcbnd5sKI'
  constructor(public http: HttpClient) { 
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ this.token
    });
    return headers;
  }

  
  getArtista(id:string){
    let url = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeaders();
    return this.http.get(url, {headers});
  }

  getArtistas(termino:string){
    let url = `${ this.urlSpotify }search?q=${ termino }&type=artist&market=US&limit=10`;
    let headers = this.getHeaders();
    return this.http.get(url, {headers}).map((resp:any)=>{
      this.artistas=resp.artists.items;
      return this.artistas;
    });
  }

  getTop(id:string){
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
    let headers = this.getHeaders();
    return this.http.get(url, {headers});
  }
}
