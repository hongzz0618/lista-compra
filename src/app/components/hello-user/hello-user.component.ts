import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.scss'],
})
export class HelloUserComponent implements OnInit {

  @Input() usuario: any;

  constructor() { }

  ngOnInit() {
  }

}
