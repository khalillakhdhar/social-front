import { Component } from '@angular/core';
import { PublicationService } from '../../shared/services/publication.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  publications:any;
  constructor(private publicationService: PublicationService) { 

this.getPublications();

  }
getPublications()
{
  this.publicationService.getPublications().subscribe(
    (data:any)=>{
      console.log("publications:",data);
      this.publications=data;
    });
}
  // chartBarOptions = {
  //   maintainAspectRatio: false,
  // };
  deletePublication(pub:any)
  {
    if(confirm("Vous voulez supprimer "+pub.text))
    {
    this.publicationService.deletePublication(pub.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.getPublications();
      });
    }
  }

}
