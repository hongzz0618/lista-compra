import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  speechRecognitionValue: any;

  starts: any = false;
  constructor(private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef) {

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
        this.speechRecognitionValue = matches
        this.cd.detectChanges();
      },
        (onerror) => console.log('error:', onerror)
      )
  }

}
