import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/models/catering';
import { TagService } from 'src/app/service/tag.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  public tag = new Tag();

  public tagId: number;

  public showForm(): void {

  }

  constructor(private tagService: TagService, private route: ActivatedRoute, private router: Router) { }

  onSubmit(): void {
    if (this.tagId !== null && this.tagId !== undefined) {
      this.tagService.updateTags(this.tagId, this.tag).subscribe((res) => {
        if (res.ok) {
          confirm('Category updated successfully');
          this.router.navigate(['/category-list']);
        }
      }, error => console.error(error));
    }
    this.tagService.postTags(this.tag).subscribe((res) => {
      if (res.ok) {
        this.tag = new Tag();
        location.reload();
      }
    }, error => {
      console.error(error);
    });
  }
  ngOnInit() {
    this.route.params.subscribe((res) => {
      if (res !== null && res.id !== undefined) {
        this.tagService.getTagById(res.id).subscribe((response) => {
          if (response.ok) {
            this.tag = response.json();
            this.tagId = res.id;
          }
        }, error => {
          console.error(error);
        });
      }

    });
  }

}
