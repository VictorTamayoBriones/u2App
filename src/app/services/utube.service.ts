import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeData } from '../models/youtube.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3'
  private apikey = 'AIzaSyDsdcOFMrwhobxsK8Y4BnxQwJWyUWkDS_U';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nexyPageToken = '';

  constructor( private http: HttpClient ){}

  getVideos(){

    const url = `${ this.youtubeUrl }/playlistItems`;

    const params = new HttpParams()
          .set('part', 'snippet')
          .set('maxResults', '10')
          .set('playlistId', this.playlist)
          .set('key', this.apikey)
    
    return this.http.get<YoutubeData>( url, { params })
                .pipe(
                  map(resp =>{
                    this.nexyPageToken = resp.nextPageToken;
                    return resp.items;
                  }),
                  map( items => items.map( video => video.snippet ) )
                )
  }
}
