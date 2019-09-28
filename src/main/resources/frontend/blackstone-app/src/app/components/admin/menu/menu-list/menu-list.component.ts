import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/models/menu';
import { GetMenuListService } from 'src/app/service/add-menu.service';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  public menuList: Menu[];
  public displayedColumns: string[] = ['title', 'price', 'createdOn'];
  public burgersList: Menu[];
  public breakfastList: Menu[];
  public saladsList: Menu[];
  public pastaList: Menu[];
  public menuId = 0;
  public idSelected = false;
  public selectedMenu: Menu;
  constructor(private getMenuListService: GetMenuListService, private sharedService: SharedService) { }

  convertDate(date: Date): string {
    return this.sharedService.convertDate(date);
  }

  testFunc(): void {
    this.breakfastList = this.menuList.filter(menu => menu.breakFast === true);
    console.log(this.breakfastList);
  }


  ngOnInit() {
    this.getMenuListService.getMenu(0, 10).subscribe((res) => {
      if (res.ok) {
        console.log(res.json());
        this.menuList = res.json().content;
        this.breakfastList = this.menuList && this.menuList.filter(menu => menu.breakFast === true);
        this.burgersList = this.menuList && this.menuList.filter(menu => menu.burger === true);
        this.saladsList = this.menuList && this.menuList.filter(menu => menu.salad === true);
        this.pastaList = this.menuList && this.menuList.filter(menu => menu.pasta === true);
      }
    }, error => {
      console.log(error);
    });
  }

}
