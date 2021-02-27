import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  num:number=Math.floor((Math.random()*100)+1) ;
  message:string="";
  gcount:number=1;
  convert:number=0;
  constructor() { }

  check(received:string)
  {
 
    this.convert=parseInt(received);
   // console.log(this.convert);
   console.log(this.num);
     if(this.convert<=100&&this.convert>0)
      {
        if(this.convert>this.num)
          {
              this.message="Try Again!. Actual number is less than "+received;
              this.gcount++;
          }
          else if(this.convert<this.num)
            {
                this.message="Try Again!.\n Actual number is greater than "+received;
                
                this.gcount++;
            }
            else
              {
               
                this.message="Hurray! You guessed the number in "+ this.gcount +"  Steps   ";
              }
            }
            else
              {
                this.message="Invalid number!. Enter a number between 1-100";
              }
      
  }
  ngOnInit(): void {
  }

}
