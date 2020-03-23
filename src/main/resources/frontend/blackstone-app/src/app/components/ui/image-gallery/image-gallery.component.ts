import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  public imageList: [];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  public homeImage: any;

  constructor(private imageService: ImageService) { }

  makeImage(imageList: any): void {
    this.galleryImages = [];
    imageList.map(image => {
      if (image && image.imageUrl) {
        const imageUrl = image.imageUrl;
        this.galleryImages.push({ small: imageUrl, medium: imageUrl, big: imageUrl });
      }
    });
  }
  imageLoading = true;

  ngOnInit() {

    this.imageService.getImages(0, 10).subscribe((res) => {
      if (res.ok) {
       
        const imageList: [] = res.json().content;
        const randomIndex = Math.round(Math.random() * (imageList.length - 1));
        this.homeImage = imageList[randomIndex];
        this.makeImage(imageList);
        this.imageLoading = false;
      }
    }, error => console.error(error));
    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: true
      }
    ];
  }

}
