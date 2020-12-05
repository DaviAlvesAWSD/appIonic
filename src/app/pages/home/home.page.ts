import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private authService: AuthService
  ) { }

  ngOnInit() {
  }

  async logout(){

    try{
      await this.authService.logout();
    }catch(error){
        console.log(error)
    }
  }

}
