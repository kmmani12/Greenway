import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.page.html',
  styleUrls: ['./table-selection.page.scss'],
})
export class TableSelectionPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router,  @Inject(APP_CONFIG) public config: AppConfig,) { }
  ngOnInit() {
  }
	
	home() {
    this.navCtrl.navigateRoot(['./home']);
  } 
  select_language() {
    this.route.navigate(['./select-language']);
  }
  buyAppAction() {
    window.open("https://bit.ly/cc2_Suzlon", '_system', 'location=no');
  }
}
