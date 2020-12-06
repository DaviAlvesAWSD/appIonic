import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage implements OnInit {

  public products = new Array<Product>();
  private productsSubscription: Subscription;
  private loading: any;

  constructor(
    private productService: ProductService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
      this.productsSubscription = this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
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
