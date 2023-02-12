import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VisitService } from 'src/services/visit.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent {
  constructor(private visitService:VisitService, private router:Router){

  }
  displayedColumns: string[] = ['temperature', 'bloodpressure', 'weight', 'hight','spo2','visitDate','diagnostic','patient'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.visitService.visitTab);
  

  fetchDataSource():void{
    this.visitService.getAllVisits().then((result)=>(this.dataSource.data = result));
  }
  //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
