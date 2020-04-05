import { Injectable } from '@angular/core';
import { WhoopsDialogComponent } from 'src/app/components/static/whoops/whoops.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class WhoopsDialogService {

  constructor(private matDialog: MatDialog) { }

  open(): void {
    const dialogRef = this.matDialog.open(WhoopsDialogComponent, {
      width: '300px',
      // data: {name: this.name, animal: this.animal}
    });
  }
}
