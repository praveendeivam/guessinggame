import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trick',
  templateUrl: './trick.component.html',
  styleUrls: ['./trick.component.css']
})
export class TrickComponent implements OnInit {

  constructor() { }
  num:number=Math.floor((Math.random()*100)+1) ;

  ngOnInit(): void 
  {
  }

}
