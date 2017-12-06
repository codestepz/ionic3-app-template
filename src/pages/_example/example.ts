
/* =========================================================================================
 * Import Packages
 * ========================================================================================= */

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/* =========================================================================================
 * Setting
 * ========================================================================================= */

import { AppSetting } from '../../common/app.setting';

/* =========================================================================================
 * Component
 * ========================================================================================= */

@Component({
  selector: 'page-example',
  templateUrl: 'views/example.html'
})

/* =========================================================================================
 * Class
 * ========================================================================================= */

export class ExamplePage {

    /* =========================================================================================
     * Constructor
     * ========================================================================================= */

    // ทำงานอัตโนมัติ
    public constructor (public navCtrl: NavController, public app: AppSetting) {

        /* ..... */

    }

}