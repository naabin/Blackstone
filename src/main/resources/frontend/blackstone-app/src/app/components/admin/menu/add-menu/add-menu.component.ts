import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/models/menu';
import { AddMenuService, GetMenuListService } from 'src/app/service/add-menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  public menu: Menu = new Menu();
  private menuId: number;
  public menuAdded = false;

  public menuForm: FormGroup;

  constructor(
    private addMenuService: AddMenuService,
    private router: Router,
    private menuService: GetMenuListService,
    private route: ActivatedRoute) {
    this.menuForm = this.menuValidator();
  }
  onSubmit() {
    if (this.menuId !== null && this.menuId !== undefined) {
      this.menuService.updateMenu(this.menu.id, this.menu).subscribe(res => {
        if (res.ok) {
          console.log('The menu has been suceessfully updated');
          console.log(res);
          this.router.navigate(['/menu']);
        }
      }, error => {
        console.error(error);
      });
    } else {
      this.addMenuService.addMenu(this.menu).subscribe(() => {
        this.menuAdded = true;
        this.menu = new Menu();
        this.menu.createdOn = new Date();
        this.router.navigate(['/menu']);
      }, error => {
        console.log(error);
      });
    }
  }
  menuValidator() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      addExtra: new FormControl('', Validators.nullValidator),
      addedPrice: new FormControl('', Validators.nullValidator),
      control: new FormControl('', [(control) => !control.touched ? {required: true} : null])
    });
  }
  ngOnInit() {
    this.route.params.subscribe((res) => {
      if (res.id !== null && res.id !== undefined) {
        this.menuService.getMenuById(res.id).subscribe((response) => {
          if (response.ok) {
            this.menuId = res.id;
            this.menu = response.json();
            console.log(Object.entries(this.menu).length);
          }
        }, error => {
          console.error(error);
        });
      }
    });
  }
}

