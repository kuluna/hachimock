import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-bot',
  templateUrl: 'bot.html',
})
export class BotPage {
  messages: Message[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.http.get('assets/data/conversation.json').subscribe(messages => {
      this.messages = messages.json() as Message[];
    });
  }

  sendMessage(text: string) {
    const newMessage = new Message();
    newMessage.username = 'あなた';
    newMessage.text = text;
    newMessage.time = '12:01';

    this.messages.push(newMessage);
    Observable.from([1]).delay(2500).subscribe(() => {
      const reply = new Message();
      reply.username = 'あかり';
      reply.text = 'でもやっぱりだめでした。\nどうすればいいですか？';
      reply.time = '12:01';
      this.messages.push(reply);
    });
  }

  none() {}
}

class Message {
  username: string;
  text: string;
  time: string;
}