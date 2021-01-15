import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss']
})
export class AvatarSelectorComponent implements OnInit {

  @Output() avatarSel = new EventEmitter<string>();
  @Input() avatarActual = 'av-1.png';
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
    {
      img: 'av-9.png',
      seleccionado: false
    },
    {
      img: 'av-10.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };

  constructor() { }

  ngOnInit() {

    this.avatars.forEach(avatar => avatar.seleccionado = false);

    for (const avatar of this.avatars) {

      if (avatar.img === this.avatarActual) {
        avatar.seleccionado = true;
        break;
      }
    }

  }

  async slideDidLoad(event) {
    this.slides.update();
  }

  seleccionarAvatar(avatar) {

    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.avatarSel.emit(avatar.img);

  }

}
