import { Component, OnInit } from '@angular/core';
import { GetMenuListService } from 'src/app/service/add-menu.service';
import { Menu } from 'src/models/menu';

@Component({
  selector: 'app-ui-menu',
  templateUrl: './ui-menu.component.html',
  styleUrls: ['./ui-menu.component.css']
})
export class UiMenuComponent implements OnInit {

  public menuList: Menu[];
  public burgersList: Menu[];
  public saladsList: Menu[];
  public pastaList: Menu[];
  public breakfastList: Menu[];

  menuLoading = true;

  constructor(private menuService: GetMenuListService) { }



  ngOnInit() {

    this.menuService.getMenu(0, 50).subscribe((res) => {
      if (res.ok) {
        this.menuLoading = false;
        this.menuList = res.json().content;
        this.breakfastList = this.menuList.filter(menu => menu.breakFast === true);
        this.saladsList = this.menuList.filter(menu => menu.salad === true);
        this.pastaList = this.menuList.filter(menu => menu.pasta === true);
        this.burgersList = this.menuList.filter(menu => menu.burger === true);
      }
    }, error => console.error(error));
  }

}
