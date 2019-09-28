import { Component, OnInit, Inject } from '@angular/core';
import { Menu } from 'src/models/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMenuListService } from 'src/app/service/add-menu.service';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  public menu: Menu;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: GetMenuListService,
    private sharedService: SharedService,
  ) { }

  dateConverter(date: Date): string {
    return this.sharedService.convertDate(date);
  }

  deleteMenu(id: number) {
    confirm('Are you sure want to delete ?');
    this.menuService.deleteMenu(id).subscribe(res => {
      if (res.ok) {
        console.log('Menu with an id ' + id + ' has been deleted');
        this.router.navigate(['/menu']);
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {

    this.route.params.subscribe((res) => {
      if (res !== null) {
        this.menuService.getMenuById(res.id).subscribe(menu => {
          if (menu && menu.ok) {
            this.menu = menu.json();
          }
        }, error => {
          console.error(error);
        });
      }
    });
  }

}
