import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bot-detail',
  templateUrl: 'bot-detail.html',
})
export class BotDetailPage {
  queries = ['user_name', 'メールアドレス', '日付', 'ゲーム', '趣味', '商品'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotDetailPage');
  }

}
