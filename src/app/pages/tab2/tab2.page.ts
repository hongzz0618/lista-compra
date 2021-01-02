import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  speechRecognitionValue: any;

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

  async start() {
    await this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          // console.log(...matches)
        },
        (onerror) => console.log('error:', onerror)
      )
    await this.speechRecognition.getSupportedLanguages()
      .then(
        (languages: string[]) => {
          console.log(languages)
          this.speechRecognitionValue = languages
        },
        (error) => console.log(error)
      )

  }

}
