import { Component, OnInit } from '@angular/core';
import { UtubeService } from '../../services/utube.service';
import { video } from '../../models/youtube.models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  videos : video[]=[];

  constructor( private tutubeService : UtubeService ) { }

  ngOnInit(){
    this.tutubeService.getVideos()
        .subscribe( resp=>{
          this.videos.push( ...resp );

          console.log(this.videos)
        })
  }

}
