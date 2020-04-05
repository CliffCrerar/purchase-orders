import { Subscription } from 'rxjs';
import { SupplierCreateFormModel } from './supplier-create.model';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.scss']
})
export class SupplierCreateComponent implements OnInit {
  /* ATTRIBUTES */
  @Output('cancelled') cancelled: EventEmitter<boolean>;
  @ViewChild('supplierForm', { static: true }) supplierForm: NgForm;

  private formSub: Subscription;
  public formDefinition: string[];
  private formHeadings: string[];
  public model: SupplierCreateFormModel;

  /* CONSTRUCTOR */
  constructor() {
    this.cancelled = new EventEmitter<boolean>();
    this.formSub = new Subscription();
    this.model = new SupplierCreateFormModel();
    this.formHeadings = ['Supplier Specifics', 'Supplier Address', 'Supplier Contact', 'Supplier Products'];
  }
  /* LIFE HOOKS */

  // Init
  ngOnInit(): void {
    this.formDefinition = this.merge(Object.keys(this.model));
    this.formSub = this.supplierForm.statusChanges.subscribe(statusChange => console.log(statusChange));
  }

  // Destroy
  ngOnDestroy = (): void => this.formSub.unsubscribe();

  /* METHODS */
  /**
   * Show date of supplier create component
   */
  showDate = (): Date => new Date(); // show date

  /**
   * Merges supplier create component
   * @param arrayOfStrings
   * @returns merge
   * TODO:
   */
  merge(arrayOfStrings: string[]): string[] {
    const [a, b, c, d] = this.formHeadings;
    const [e, f, g, h, i, j, k, l, m, n, o] = arrayOfStrings;
    return [a, e, b, f, g, h, i, j, k, c, l, m, n, d, o];
  }

  /**
   * Determines whether key heading is
   * TODO:
   */
  isKeyHeading = (key: string): boolean => this.formHeadings.includes(key);
  determineType(key: string) {
    switch (key) {
      case 'email': return 'email';
      case 'suite': return 'number';
      case 'streetNo': return 'number';
      default: return 'text';
    }
  }

  /**
   * Determines whether cancel click on
   * TODO:
   */
  onCancelClick = () => this.cancelled.emit(false);
  saveForm(supplierForm: NgForm) {
    console.log('this.model: ', this.model);

  }
}
