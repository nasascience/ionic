import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async login(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();

    setTimeout(() => {
      this.router.navigate(['/folder/Inbox']);
      loading.dismiss();
    }, 2000);

  }
}
