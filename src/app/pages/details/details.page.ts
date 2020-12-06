import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    private product: Product = {};
    private productId: string;
    private productSubscription: Subscription;
    private loading: any;


  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private acitiveRoute: ActivatedRoute,
    private productService: ProductService,
    private navCtrl: NavController
  ) {

    this.productId = this.acitiveRoute.snapshot.params['id'];

    if (this.productId) this.loadProduct();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.productSubscription) this.productSubscription.unsubscribe();
    
  }

  loadProduct(){
    this.productSubscription = this.productService.getProduct(this.productId).subscribe(data => {
      this.product = data;
    });

  }

  async saveProduct(){
    await this.presentLoading();

    this.product.userId = (await this.authService.getAuth().currentUser).uid;
    
    if (this.productId) {

      try{
        await this.productService.updateProduct(this.productId, this.product );
        await this.loading.dismiss();

        this.presentToast('Produto Editado com sucesso');

        this.navCtrl.navigateBack('/lista-compra');
      } catch(error){
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }

    }else{

      this.product.createAt = new Date().getTime();

      try{
        await this.productService.addProduct(this.product);
        await this.loading.dismiss();

        this.presentToast('Produto criado com sucesso');

        this.navCtrl.navigateBack('/lista-compra');
      } catch(error){
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
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
