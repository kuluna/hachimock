import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  displayName = 'demodemo';
  mailAddress = 'demodemo@test.com';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  ionViewDidLoad() {
  }

  showDisplayNameDialog() {
    this.alert.create({
      title: 'Change name',
      inputs: [
        { name: 'displayName', value: this.displayName }
      ],
      buttons: [
        { text: 'OK', handler: (name) => {
          this.displayName = name.displayName;
        }}
      ]
    }).present();
  }

  showMailAddressDialog() {
    this.alert.create({
      title: 'Change mail',
      inputs: [
        { name: 'mailAddress', value: this.mailAddress, type: 'email' }
      ],
      buttons: [
        { text: 'OK', handler: (name) => {
          this.mailAddress = name.mailAddress;
        }}
      ]
    }).present();
  }
}
