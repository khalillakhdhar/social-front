import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces/user';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user={} as User;

  constructor(private userService:UserService) { 
    localStorage.removeItem('token');
    localStorage.clear();
  }
  logUser()
  {
    let us=Object.assign({},this.user);
    console.log("ok")
  // authentification ou exception
    this.userService.login(us).subscribe(
      (data:any)=>{
        console.log(data);
        localStorage.setItem('token',data);
        // extract id from token
        let token=data.split('.')[1];
        // decode base64
        // read id
        
        let tokenData=JSON.parse(atob(token));
        console.log(tokenData);
        // redirect to http://localhost:4200/#/dashboard
        window.location.href="/#/dashboard";
        
 
      });
    
  }

}
