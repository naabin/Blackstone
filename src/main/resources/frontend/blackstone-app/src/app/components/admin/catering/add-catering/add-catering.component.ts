import { Component, OnInit } from '@angular/core';
import { Catering, Tag } from 'src/models/catering';
import { TagService } from 'src/app/service/tag.service';
import { CateringService } from 'src/app/service/catering.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-catering',
  templateUrl: './add-catering.component.html',
  styleUrls: ['./add-catering.component.css']
})
export class AddCateringComponent implements OnInit {

  public catering = new Catering();
  public tags: Tag[];
  public tag = new Tag();
  public cateringId: number;
  public cateringAdded = false;
  public selected: string;
  public currentTag: Tag;
  public cateringForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private tagService: TagService,
    private cateringService: CateringService,
    private router: Router) {
      this.cateringForm = this.cateringFormValidator();
     }

  cateringFormValidator() {
    return new FormGroup({
      tag: new FormControl('', [(control) => !control.touched ? {required: true} : null]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.nullValidator]),
      minimumNo: new FormControl('', [Validators.required]),
      pricePerPerson: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.cateringId !== null && this.cateringId !== undefined) {
      this.catering.tags = this.tags.filter(t => t.name === this.tag.name);
      this.cateringService.updateCatering(this.cateringId, this.catering).subscribe((res) => {
        if (res.ok) {
          console.log('Catering updated.');
        }
      }, error => console.error(error));
    } else {
      this.catering.tags = this.tags.filter(t => t.name === this.tag.name);
      this.cateringService.addCatering(this.catering).subscribe((res) => {
        if (res.ok) {
          this.cateringAdded = true;
          location.reload();
          this.router.navigate(['/catering']);
        }
      }, error => {
        console.error(error);
      });
    }


  }

  ngOnInit() {
    this.route.params.subscribe((res) => {
      if (res.id !== null && res.id !== undefined) {
        this.cateringService.getCateringById(res.id).subscribe((response) => {
          if (response.ok) {
            this.catering = response.json();
            this.tag = this.catering.tags[0];
          }
        }, error => console.error(error));
      }
    });
    this.catering.createdOn = new Date();
    this.tagService.getTags(0, 10).subscribe((res) => {
      if (res.ok) {
        this.tags = res.json().content;
      }
    }, error => {
      console.error(error);
    });
  }
}
