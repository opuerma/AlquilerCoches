import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit() {

    console.log('TabletPortrait: ', Breakpoints.TabletPortrait);
    console.log('TabletLandscape: ', Breakpoints.TabletLandscape);
    console.log('HandsetPortrait: ', Breakpoints.HandsetPortrait);
    console.log('HandsetLandscape: ', Breakpoints.HandsetLandscape);
  
    this.responsive.observe(Breakpoints.HandsetLandscape)
      .subscribe(result => {

        if (result.matches) {
          console.log("screens matches HandsetLandscape");
        }
    });
    
  }

}
