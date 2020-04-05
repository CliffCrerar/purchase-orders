/**
 * Generic Card Header
 */

import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-generic-header',
  template: `
      <div class="d-flex align-items-center justify-content-between">

      <div>
        <mat-card-title style="font-weight: 200;">{{headerTitle}}</mat-card-title>
        <mat-card-subtitle>{{showDate()}}</mat-card-subtitle>
      </div>
      <!-- </mat-card-title-group> -->

      <div class="d-flex align-items-center">

        <button
          [matTooltip]="btnTooltip"
          class="mr-3"
          color="primary"
          (click)="onClick($event)"
          mat-mini-fab>
          <mat-icon>add</mat-icon>
        </button>

        <p>
          <mat-form-field
            appearance="standard"
            [matTooltip]="searchBarToolTip">
            <mat-label>Search</mat-label>
            <input
              matInput
              (keyup)="onChange($event)"
              placeholder="Start typing to filter">
            <mat-icon matSuffix>search</mat-icon>
            <!-- <mat-hint>Hint</mat-hint> -->
          </mat-form-field>
        </p>

      </div>

    </div>

    <mat-divider></mat-divider>
  `,
  styles: [``]
})
export class GenericCardHeaderComponent {
  /* INPUT ATTRIBUTES */
  @Input() headerTitle: string;
  @Input() btnTooltip: string;
  @Input() searchBarToolTip: string;

  /* OUTPUT ATTRIBUTES */
  @Output() addButtonClickEvent: EventEmitter<Event>;
  @Output() searchBarKeyEvent: EventEmitter<KeyboardEvent>;
  /* PUBLIC ATTRIBUTES */
  public title: string;
  public button_tooltip: string;
  public search_bar_tooltip: string;
  public btn_Action: any;
  /* CONSTRUCTOR */
  constructor() {
    this.title = this.headerTitle === undefined ? '' : this.headerTitle;
    this.button_tooltip = this.btnTooltip === undefined ? '' : this.btnTooltip;
    this.search_bar_tooltip = this.searchBarToolTip === undefined ? '' : this.searchBarToolTip;

    this.addButtonClickEvent = new EventEmitter<Event>();
    this.searchBarKeyEvent = new EventEmitter<KeyboardEvent>();
  }
  /* METHODS */
  showDate = () => new Date();
  onClick = (ev: Event): void => this.addButtonClickEvent.emit(ev);
  onChange = (ev: KeyboardEvent): void => this.searchBarKeyEvent.emit(ev);
}
