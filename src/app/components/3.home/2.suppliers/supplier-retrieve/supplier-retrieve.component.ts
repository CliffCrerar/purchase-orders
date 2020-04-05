import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-supplier-retrieve',
  templateUrl: './supplier-retrieve.component.html',
  styleUrls: ['./supplier-retrieve.component.scss']
})
export class SupplierRetrieveComponent implements OnInit {
  /* ATTRIBUTES */
  @Output() addSuppliers: EventEmitter<boolean>;
  @Input() addButtonTooltip: string;
  @Input() searchInputToolTip: string;
  public addSupplierTooltip: string;
  public searchSupplierTooltip: string;
  constructor() {
    this.addSuppliers = new EventEmitter<boolean>();
    this.addSupplierTooltip = 'Start typing to filter the list';
    this.searchSupplierTooltip = 'tooltipemplate';
  }
  /* LIFE HOOKS */
  ngOnInit(): void {
  }
  /* METHODS */
  showDate = () => new Date();

  /* EVENTS */
  onAddSupplierClick() {
    this.addSuppliers.emit(true);
  }
}
