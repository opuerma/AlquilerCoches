import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Breakpoints = Breakpoints;
  
  movil: boolean;
  customBreakpoint: string = '(max-width: 900px)';
  menuAbierto: boolean = false;
  
  readonly breakpoint$ = this.breakpointObserver
    .observe(this.customBreakpoint)
    .pipe(
      tap(),
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  private breakpointChanged() {
    if(this.breakpointObserver.isMatched(this.customBreakpoint)) {
      this.movil = true;
    }
    else {
      this.movil = false;
    }
  }

  abrirMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

}
