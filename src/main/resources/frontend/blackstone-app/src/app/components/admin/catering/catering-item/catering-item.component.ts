import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catering, Tag } from 'src/models/catering';
import { CateringService } from 'src/app/service/catering.service';

@Component({
  selector: 'app-catering-item',
  templateUrl: './catering-item.component.html',
  styleUrls: ['./catering-item.component.css']
})
export class CateringItemComponent implements OnInit {

  public catering: Catering;
  public cateringId: number;
  public tags: Tag[];

  constructor(private route: ActivatedRoute, private cateringService: CateringService, private router: Router) { }


  onDelete(id: number) {
    this.cateringService.deleteCaterinng(id).subscribe((res) => {
      if (res.ok) {
        console.log('Item deleted');
        this.router.navigate(['/catering']);
      }
    }, error => console.error(error));
  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      if (res.id !== null && res.id !== undefined) {
        this.cateringId = res.id;
        this.cateringService.getCateringById(res.id).subscribe((response) => {
          if (response.ok) {
            this.catering = response.json();
            this.tags = this.catering.tags;
          }
        }, error => console.error(error));
      }
    });
  }

}
