import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compact',
  templateUrl: './compact.component.html',
  styleUrls: ['./compact.component.css']
})
export class CompactComponent implements OnInit {

  
  constructor(private router:Router)
  {
    if(window.innerWidth<768)
      {
        this.router.navigate(['mobile']);
      }
      else
        {
          this.router.navigate(['desktop']);
        }
  }

  ngOnInit(): void {
  }

}
