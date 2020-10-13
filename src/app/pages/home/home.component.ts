import { Component, OnInit } from '@angular/core';
import { UtubeService } from '../../services/utube.service';
import { video } from '../../models/youtube.models';
import Swal from 'sweetalert2'
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

  mostrarVideo(video: video){
    console.log(video);

    Swal.fire({
      html:`
        <h4> ${ video.title } </h4>
        <iframe width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/${ video.resourceId.videoId }" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
        </iframe>
      `
    })
  }

}
