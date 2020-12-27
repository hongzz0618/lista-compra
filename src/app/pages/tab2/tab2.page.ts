import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };


  constructor( public datalocalService: DataLocalService ) {

  }


  ngOnInit() {
  }



}
