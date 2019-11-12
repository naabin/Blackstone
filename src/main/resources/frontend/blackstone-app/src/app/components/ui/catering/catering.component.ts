import { Component, OnInit } from '@angular/core';
import { CateringService } from 'src/app/service/catering.service';
import { TagService } from 'src/app/service/tag.service';
import { Tag, Catering } from 'src/models/catering';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {

  public panelOpenState = false;

  public tags: Tag[];

  public cateringMenu: Catering[] = [];


  constructor(private cateringService: CateringService, private tagService: TagService) { }

  showMenu = ((tag: string) => {
    this.panelOpenState = true;
    console.log(tag);
    this.cateringService.getCategoryByTagName(tag).subscribe((res) => {
      if (res.ok) {
        this.cateringMenu = res.json();
      }
    }, error => console.error(error));
  });

  ngOnInit() {

    this.tagService.getTags(0, 20).subscribe((res) => {
      if (res.ok) {
        this.tags = res.json().content;
      }
    }, error => console.error(error));
  }


}
