import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'wc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  openFilters() {
    this.matDialog.open(FiltersComponent);
  }

}
