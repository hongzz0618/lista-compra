import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  bgcolor: string = "blue"

  constructor(private speechRecognition: SpeechRecognition) {

  }


  ngOnInit() {

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

  }

  start() {

    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.bgcolor = matches[0];
        },
        (onerror) => console.log('error:', onerror)
      )

  }
}
