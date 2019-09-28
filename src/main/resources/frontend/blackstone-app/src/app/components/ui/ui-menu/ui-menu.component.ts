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

  constructor(private menuService: GetMenuListService) { }


  ngOnInit() {

    this.menuService.getMenu(0, 10).subscribe((res) => {
      if (res.ok) {

        this.menuList = res.json().content;

      }
    }, error => console.error(error));
  }

}
