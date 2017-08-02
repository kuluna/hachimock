import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { BotPage } from '../bot/bot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bots: Bot[] = [];


  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('assets/data/bots.json').subscribe(bots => {
      this.bots = bots.json() as Bot[];
    });
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
