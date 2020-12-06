import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';



@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage implements OnInit {

  public products = new Array<Product>();
  private productsSubscription: Subscription;
  private loading: any;
  public userLogin: User = {};
  private userId: string;
  private user: string;

  constructor(
    private productService: ProductService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private authService: AuthService
  ) {

    if(this.userId == this.userLogin['id']) {

      this.productsSubscription = this.productService.getProducts().subscribe(data => {
        this.products = data;
      });

    } 
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }

  async deleteProduct(id: string){
    try{

      await this.productService.deleteProduct(id);

      this.presentToast('Produto Excluido com sucesso');
    }catch(error){
      this.presentToast('Erro ao tentar Excluir!');

      console.log(error);
      

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
