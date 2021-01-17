import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';

@Component({
  selector: 'app-segment-slide',
  templateUrl: './segment-slide.component.html',
  styleUrls: ['./segment-slide.component.scss'],
})
export class SegmentSlideComponent implements OnInit {

  @Input() productos: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async detailModal(id: string) {

    const modal = await this.modalCtrl.create({
      component: ProductDetailModalComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }
}
