import { Component } from '@angular/core';
import {AppDialogComponent} from './app-dialog/app-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly dialog: MatDialog) {
  }

  openDialogComponent() {
    this.dialog.open(AppDialogComponent).afterClosed();
  }
}
