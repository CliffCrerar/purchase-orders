/**
 * About component
 */

import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Markdown from 'markdown-it';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <section class="p-3">
    <mat-card>
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <mat-card-title>Purchase Orders</mat-card-title>
        <mat-card-subtitle>a Progressive Web Application (PwA) demo</mat-card-subtitle>
      </div>
      <div>
        <div>GIT icon</div>
      </div>
    </div>
      <mat-divider></mat-divider>
      <mat-card-content>
        <div class="container">
          <div id="mdDiv" #mdDiv></div>
        </div>
      </mat-card-content>
    </mat-card>
  </section>
  `,
  styles: [``]
})
export class AboutComponent implements OnInit {

  @ViewChild('mdDiv',{static: true}) mdDiv: ElementRef<HTMLDivElement>;


  private md: any;
  private markedUp: string;


  constructor(private http: HttpClient) {
    this.md = new Markdown();
    // this.mdContainer = new HTMLDivElement();

  }

  ngOnInit(): void {
    console.log('mdDiv: ', this.mdDiv);
    this.http.get('/readme').subscribe(
      (res: {message: string}) => {
         console.log( this.md.render(res.message));

         this.mdDiv.nativeElement.innerHTML = this.md.render(res.message);

      },
      err => { console.log(err); }
    );

  }


}
