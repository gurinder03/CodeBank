import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from '../utility/handler/request.service';
import { BehaviorSubject } from 'rxjs';

const HAS_LOGGED_IN: any = 'hasLoggedIn';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = new BehaviorSubject(false);
  constructor(
    public toast: ToastrService,
    public request: RequestService
  ) { }

  userLogin(data: any) {
    const success = (value: any) => {
      if (value && value.statusCode == 200) {
       
      } else {
        this.toast.error(value.message);
      }
    };
    this.request.send('login', data, success, null, true);
  }

  getUserData(){
    let u_data: any = localStorage.getItem('data');
    const user = JSON.parse(u_data);
    return user
  }


  isAuthenticated() {
    const accessToken = localStorage.getItem('token');
    if (accessToken && this.getUserData()) {
      return true;
    }
    return false;
  }

  setLoggedIn(token = '', userData: any) {
    return new Promise((resolve) => {
      localStorage.setItem('token', token);
      localStorage.setItem('data', JSON.stringify(userData));
      localStorage.setItem(HAS_LOGGED_IN, 'true');
      this.authState.next(true);
      resolve(true);
    });
  }
}
