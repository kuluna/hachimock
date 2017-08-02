import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BotDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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
