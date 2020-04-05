import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-po-create',
  templateUrl: './po-create.component.html',
  styleUrls: ['./po-create.component.scss']
})
export class PoCreateComponent implements OnInit {
  /* Atrr */
  public static poNumber: number;
  /* CONSTRUCTOR */
  constructor() {
    PoCreateComponent.poNumber = 10001;
  }
  /* LIFE HOOKS */
  ngOnInit(): void {
  }
  /* METHODS */
  newDate = () => new Date();
  /* EVENTS */

}
