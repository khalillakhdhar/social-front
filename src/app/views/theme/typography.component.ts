import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { GroupeService } from '../../shared/services/groupe.service';
import { get } from 'lodash-es';
import { Groupe } from 'src/app/shared/interfaces/groupe';

@Component({
  templateUrl: 'typography.component.html',
})
export class TypographyComponent {
users:any;
groupes:any;
groupe={} as Groupe;
  constructor(private userService:UserService , private groupesService:GroupeService) {
    console.log("ok");
this.getGroupes();
this.getUsers();

  }
  getUsers()
  {
    this.userService.getUsers().subscribe(
      (data:any)=>{
        console.log("users:",data);
        this.users=data;
      });
  }
  getGroupes()
  {
    this.groupesService.getGroupes().subscribe(
      (data:any)=>{
        console.log("groupes:",data);
        this.groupes=data;
      });
  }
  deleteUser(us:any)
  {
    if(confirm("Vous voulez supprimer "+us.nom+" "+us.prenom))
    {
    this.userService.deleteUser(us.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.getUsers();
      });
    }
  }
  addGroupe()
  {
    let gr=Object.assign({},this.groupe);
    console.log("groupe",gr);
    this.groupesService.addgroupe(gr).subscribe(
      (data:any)=>{
        console.log(data);
        this.getGroupes();
        this.groupe={} as Groupe;
      });
  }



}
