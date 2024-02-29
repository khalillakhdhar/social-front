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

  constructor(private userService:UserService) { }
  logUser()
  {
    let us=Object.assign({},this.user);
    console.log("ok")
  // authentification ou exception
    this.userService.login(us).subscribe(
      (data:any)=>{
        console.log(data);
        localStorage.setItem('token',data.token);
      });
    
  }

}
