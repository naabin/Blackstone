import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Catering} from 'src/models/catering';
import { CateringService } from 'src/app/service/catering.service';


@Component({
  selector: 'app-tagged-catering-list',
  templateUrl: './tagged-catering-list.component.html',
  styleUrls: ['./tagged-catering-list.component.css']
})
export class TaggedCateringListComponent implements OnInit {
  public cateringList: Catering[];
  public tagName: string;

  constructor(private activatedRoute: ActivatedRoute, private cateringService: CateringService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      if (res.tagName !== undefined && res.tagName !== null) {
        this.tagName = res.tagName;
        this.cateringService.getCategoryByTagName(res.tagName).subscribe((result) => {
          if (result.ok) {
            this.cateringList = result.json();
            console.log(result.json());
          }
        }, error => console.error(error));
      }
    }, error => console.error(error));
  }

}
