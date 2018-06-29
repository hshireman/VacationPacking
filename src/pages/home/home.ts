import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DatePicker } from '@ionic-native/date-picker';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private datePicker: DatePicker) {
    
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      }).then(
        date => console.log('Got date: ', date),
        err => console.log('Error occurred while getting date: ', err)
      );
}
}
