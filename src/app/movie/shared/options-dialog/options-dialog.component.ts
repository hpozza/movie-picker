import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.scss']
})
export class OptionsDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDeleteDialog() {
    this.dialog.open(DeleteDialogComponent)
  }

}
