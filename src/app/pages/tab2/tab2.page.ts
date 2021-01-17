import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ListaCompraService } from '../../services/lista-compra.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  speechRecognitionValue: any;

  productosSearch: any;
  starts: any = false;
  constructor(private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef, private productData: ListaCompraService) {

  }


  ngOnInit() { }

  cancelSpeech() {
    this.speechRecognition.stopListening();
    this.starts = false

  }
  start() {
    this.starts = true
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }

      });
    let options = {
      language: "en-US",
      showPopup: false,
      // showPartial: true
    }
    this.speechRecognition.startListening(options)
      .subscribe(matches => {
        this.speechRecognitionValue = matches[0]
        this.cd.detectChanges();
        this.productosSearch = this.productData.getAllProducts().filter(el => el.nombre.toUpperCase() === this.speechRecognitionValue.toUpperCase())
        this.cd.detectChanges();
        // console.log(this.productosSearch)
      },
        (onerror) => console.log('error:', onerror)
      )
  }

  changeSpeechValue(event){
    // console.log(event.target.innerHTML)
    this.speechRecognitionValue = event.target.innerHTML;
    this.productosSearch = this.productData.getAllProducts().filter(el => el.nombre.toUpperCase() === this.speechRecognitionValue.toUpperCase())
  }
}
