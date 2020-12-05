import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};
  private loading: any;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  
  ) { }

  ngOnInit() {
  }

  async login(){
      await this.presentLoading();

      try{
        await this.authService.login(this.userLogin);
        await this.router.navigate(['home']);
      }catch(error) {
        console.log(error);
        this.presentToast(error.message);
      }finally
      {
        this.loading.dismiss();




      }

        


  }

  // esse metodo é a caixinha de carregamento
// enquanto o sistema confere os dados
async presentLoading() {
  this.loading = await this.loadingCtrl.create({ message: 'por favor, aguarde...'});
  return this.loading.present();

}

// essa é a memsagem de erro.
async presentToast(message: string) {
  const toast = await this.toastCtrl.create({ message, duration: 2000 });
  toast.present();
}
 
}
