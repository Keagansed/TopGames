import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'; 
import { Router } from "@angular/router"
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from './presentation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  URL: string = ""
  mobileTitle: string = ""

  constructor(private location: Location, public router: Router, private dialog: MatDialog, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.events.subscribe((e) => {
      this.URL = this.router.url.substring(this.router.url.indexOf('/') + 1,this.router.url.length)
      this.URL = this.URL.substring(this.URL.indexOf('/') + 1,this.URL.length)
      switch (this.URL) {
        case 'top':
          this.mobileTitle = "Top Games"
          break
        case 'new':
          this.mobileTitle = "New Games"
          break
        case 'slots':
          this.mobileTitle = "Slots"
          break
        case 'live':
          this.mobileTitle = "Live"
          break
        case 'blackjack':
          this.mobileTitle = "Blackjack"
          break
        case 'roulette':
          this.mobileTitle = "Roulette"
          break
        case 'table':
          this.mobileTitle = "Table"
          break
        case 'poker':
          this.mobileTitle = "Poker"
          break
        default: 
        this.mobileTitle = "Other"
          break
      }
    });
  }

  scrollTop = 0;
  hideNav = false;

  onScroll(event) {
    this.hideNav = this.scrollTop < event.target.scrollTop;
    this.scrollTop = event.target.scrollTop;
  }

  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterDialog);

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([result]);
    });
  }

  
}

@Component({
  selector: 'filter-dialog',
  templateUrl: 'framework/dialogs/filter-dialog.html',
  styleUrls: ['./app.component.scss']
})
export class FilterDialog {}
