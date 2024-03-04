import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Rola {
name: string;
artist: string;
album: string;
url: string;
image: string;
description: string;
}

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {

    public showContent: boolean = false;
    public showMusicModal: boolean = false;
    public grade:number=8;
    public rolaEspecifica!: Rola;

    public misRolas: Rola [] = [
      {
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
        image: "https://www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg",
        description: "Blinding Lights is a song by Canadian singer-songwriter the Weeknd. It was released on November 29, 2019, through XO and Republic Records, as the second single from his fourth studio album, After Hours (2020). The universally acclaimed song was written alongside Swedish musicians Max Martin and Oscar Holter, who produced it with the Weeknd, and fellow Canadian musicians Belly and DaHeala."
      },
      {
        name: "When i was your man",
        artist: "Bruno Mars",
        album: "Unorthodox Jukebox",
        url: "https://www.youtube.com/watch?v=ekzHIouo8Q4",
        image: "https://www.cromosomax.com/pics/2013/02/bruno-mars-when-i-was-your-man-video.jpg",
        description: "When I Was Your Man is a song by American singer and songwriter Bruno Mars from his second studio album, Unorthodox Jukebox (2012). Atlantic Records released the song as the third promotional single and as the second official single, taken from the album, to mainstream radio in the United States on January 15, 2013. When I Was Your Man was written by Mars, Philip Lawrence, Ari Levine and Andrew Wyatt. The former three produced the track under the name the Smeezingtons. The track was inspired by the time Mars was worried about losing his girlfriend, Jessica Caban."
      }
  ];

  antojitos:any [] = [
    'Tlayudas','Garnachas', 'Memelitas', 'Molotes', 'Tortas', 'Tacos', 'Flautas'
  ];

  antojitos2:any [] = [

  ];

constructor(){
};
    public changecontent(){
    this.showContent= !this.showContent
    }

    public toggleMusicModal(rola?: Rola){
      this.showMusicModal =!this.showMusicModal;
      if ( this.showMusicModal ) {
        this.rolaEspecifica = rola || {
          name: '',
          artist: '',
          album: '',
          url: '',
          image: '',
          description: ''
        };
      }
    }
  }
