import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { BotPage } from '../bot/bot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bots: Bot[] = [];
  assignments = ['Ryota Sakaguchi', 'Taro Tanaka', 'Hanako Tanaka'];
  assign = this.assignments[0];


  constructor(public navCtrl: NavController, public http: Http, public alert: AlertController) {
    this.http.get('assets/data/bots.json').subscribe(bots => {
      this.bots = bots.json() as Bot[];
    });
  }

  showAssignDialog() {
    var dialog = this.alert.create();
    dialog.setTitle('Assign');

    this.assignments.forEach(name => {
      dialog.addInput({ type: 'radio', label: name, value: name });
    });
    

    dialog.addButton('Cancel');
    dialog.addButton({ text: 'Assign', handler: (value) => {
      this.assign = value;
    }});

    // show
    dialog.present();
  }

  pushBotDetail() {
    this.navCtrl.push(BotPage);
  }
}

class Bot {
  id: number;
  username: string;
  text: string;
}
