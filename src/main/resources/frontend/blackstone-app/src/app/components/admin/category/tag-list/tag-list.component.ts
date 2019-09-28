import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/models/catering';
import { TagService } from 'src/app/service/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  public tagList: Tag[];

  constructor(private tagService: TagService) { }

  ngOnInit() {

    this.tagService.getTags(0, 10).subscribe((res) => {
      if (res.ok) {
        this.tagList = res.json().content;
      }
    }, error => {
      console.error(error);
    });
  }

}
