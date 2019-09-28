import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imageName: string;

  images: [];

  public loading = false;

  public imageForm: FormGroup;

  constructor(private imageService: ImageService, private router: Router) {
    this.imageForm = this.imageFormValidator();
  }

  imageFormValidator() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    });
  }

  getName(event: any) {
    this.imageName = event.target.value;
  }
  processFile(imageInput: any, event: any) {
    const file: File = imageInput.files[0];
    event.preventDefault();
    this.loading = true;
    this.imageService.postImage(file, this.imageName).subscribe(() => {
      this.loading = false;
      console.log('Image saved');
    }, (error) => {
      console.error(error);
    });
  }

  deleteImage(id: number) {
    this.loading = true;
    this.imageService.deleteImageById(id).subscribe((res) => {
      if (res.ok) {
        this.loading = false;
        this.imageService.getImages(0, 10).subscribe((res) => {
          if (res.ok) {
            this.images = res.json().content;
          }
        });
      }
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }

  ngOnInit() {
    this.imageService.getImages(0, 10).subscribe((res) => {
      if (res.ok) {
        this.images = res.json().content;
        console.log(this.images);
      }
    }, error => console.error(error));
  }


}
