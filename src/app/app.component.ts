import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listtitulos=[{
    trailer:"assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover:"assets/images/guardios-da-galaxia.jpg",
    nome:"teste",
    relevancia:98,
    age:12,
    parte:2,
    categoria:['Epico','filme de fantasia','teste']},
    { trailer:"assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover:"assets/images/guardios-da-galaxia.jpg",
    nome:"teste da Galaxia",
    relevancia:98,
    age:12,
    parte:2,
    categoria:['Epico','filme de fantasia']
    },
    { trailer:"assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover:"assets/images/guardios-da-galaxia.jpg",
    nome:"teste da Galaxia",
    relevancia:98,
    age:12,
    parte:2,
    categoria:['Epico','filme de fantasia']
    },
    { trailer:"assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover:"assets/images/guardios-da-galaxia.jpg",
    nome:"teste da Galaxia",
    relevancia:98,
    age:12,
    parte:2,
    categoria:['Epico','filme de fantasia']
    }


  ];

}
