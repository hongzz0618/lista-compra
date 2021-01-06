import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  speechRecognitionValue: any;

  constructor(private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef) {

  }


  ngOnInit() { }

  start() {
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
        this.speechRecognitionValue = matches
        this.cd.detectChanges();
        console.log(this.speechRecognitionValue)
      },
        (onerror) => console.log('error:', onerror)
      )
  }

}
