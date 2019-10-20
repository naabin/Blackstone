import { Component, OnInit, ViewChild } from '@angular/core';
import { Catering } from 'src/models/catering';
import { CateringService } from 'src/app/service/catering.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-catering-list',
  templateUrl: './catering-list.component.html',
  styleUrls: ['./catering-list.component.css']
})
export class CateringListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) private paginator: MatPaginator;
  public cateringList: Catering[];
  public dataSource: MatTableDataSource<Catering>;
  public displayedColumns = ['name', 'tag', 'minNum', 'price', 'createdOn'];
  constructor(
    private cateringService: CateringService) { }


  ngOnInit() {
    this.cateringService.getCatering(0, 10).subscribe((res) => {
      if (res.ok) {
        this.cateringList = res.json().content;
        this.dataSource = new MatTableDataSource<Catering>(this.cateringList);
      }
    }, error => {
      console.error(error);
    });

  }

}
