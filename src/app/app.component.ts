import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public categories: string[] = [];
  public search: string = '';

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.getData();
  }

  getData(): void{
    this.dataService.getData().subscribe((res)=>{
      this.categories = res;
    })
  }
}
