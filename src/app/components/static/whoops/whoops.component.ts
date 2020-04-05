import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-whoops-dialog',
  template: `
  <div>
    <div class="d-flex flex-row justify-content-start align-items-center">
      <div>
        <mat-icon class="mr-1">build</mat-icon>
      </div>
      <div>
        <h1 mat-dialog-title>Whoops!</h1>
      </div>
    </div>

    <div class="mt-3">
      <mat-card class="mat-elevation-z5">
        <mat-card-content>
          <h3>These app controls are a non-functional feature of this demo.</h3>
        </mat-card-content>
      </mat-card>
    </div>

    <div mat-dialog-actions class="mt-3">
      <button mat-raised-button class="w-100" (click)="onNoClick()">Ok</button>
  <!-- <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button> -->
    </div>
  </div>
  `,
  styles: [`
    :host{

    }
  `]
})
export class WhoopsDialogComponent {

  constructor(public dialogRef: MatDialogRef<WhoopsDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
