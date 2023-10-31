import { Component } from '@angular/core';
import { NavigationService } from '../controller/services/navigation.service';
import { AuthService } from '../controller/auth/auth.service';

@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.css']
})
export class ForumsListComponent {

  constructor(
    public navCtrl: NavigationService,
    public auth: AuthService
  ) {

  }

  formDetail(){
    this.navCtrl.goTo('/forum-detail')
  }

  askQuestion(){
    if(this.auth.isAuthenticated()){
      this.navCtrl.goTo('/forum')
    }else{
      this.navCtrl.goTo('/login')
    }
  }
}
