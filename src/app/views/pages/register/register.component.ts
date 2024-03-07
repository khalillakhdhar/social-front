import { Component } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
user={} as User;
  constructor( private userService:UserService) { }

  addUser()
  {
    let us=Object.assign({},this.user);
    console.log("user",us); 
    this.userService.register(us).subscribe(
      (data:any)=>{
        console.log(data);
       // localStorage.setItem('token',data.token);
       // 
       window.location.href="/#/login";
      });
    
  }
}
