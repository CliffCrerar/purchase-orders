import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

import { AddressModel } from 'src/app/models/address-model';
import { Collection } from 'src/app/services/data.api.service';
import { CompanyProfileForm } from './company-profile.form.model';
import { CompanyProfileModel } from 'src/app/models/company-profile';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

class CompanyCollection extends Collection { }

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit, OnDestroy {
  /* ATTRIBUTES */
  @ViewChild('companyProfileForm', { static: true }) companyProfileForm: NgForm;

  public company: CompanyProfileModel;
  public dbApiCompany: CompanyCollection;
  public form: CompanyProfileForm;
  public matSnackBarRef: MatSnackBarRef<any>;
  public saveBtnActive: boolean;
  public subOne: Subscription;
  public subTwo: Subscription;

  /* CONSTRUCTOR */
  constructor(private location: Location, private snackBar: MatSnackBar) {
    this.saveBtnActive = false;
    this.form = new CompanyProfileForm();
    this.subOne = new Subscription();
    this.subTwo = new Subscription();
    this.dbApiCompany = new CompanyCollection(snackBar);
  }

  /* LIFE HOOKS */
  ngOnInit(): void {
    // Event listener
    this.subTwo = this.dbApiCompany.dataEventListener.subscribe(
      (event) => {
        if (event === 'COMPLETE') { this.toggleSaveButton(); }
      }, err => this.snackBar.open(err.toString()));

    this.dbApiCompany.config = 'company';

    // Get data from indexdb
    this.dbApiCompany.local.allDocs({ include_docs: true })
      .then(allDocsRes => this.populateFormOnStart(allDocsRes.rows[0].doc))
      .catch(allDocsErr => {
        this.snackBarGo('Error while trying to fetch data');
        this.dbApiCompany.sync();
        console.log(allDocsErr);
      });

    this.subOne = this.companyProfileForm
      .statusChanges.subscribe((statusChange: any) => console.log(statusChange));
  }


  ngOnDestroy = (): void => {
    this.subOne.unsubscribe();
    this.subTwo.unsubscribe();
  }

  /* METHODS */
  showDate = () => new Date();

  cancel() {
    this.location.back();
  }

  /**
   * Determines whether submission on TODO:
   * @param form
   */
  onSubmission(form: NgForm) {

    if (form.status === 'VALID') {
      this.toggleSaveButton();
      this.saveForm(this.transformDocs(form.value));
      this.snackBarGo('Saving data');
    } else {
      this.snackBarGo('FORM IS NOT VALID, Check your inputs');
    }
  }

  toggleSaveButton = () => this.saveBtnActive = !this.saveBtnActive;

  /**
   * Transforms docs TODO:
   * @param form
   * @returns
   */
  transformDocs(form: CompanyProfileForm) {
    return this.company = new CompanyProfileModel(
      form.companyName,
      new AddressModel(
        form.suite,
        form.building,
        form.streetNo,
        form.streetName,
        form.area,
        form.city
      ),
      new UserModel(
        form.userName,
        form.firstName,
        form.lastName,
        'somewrongpassword',
        form.email
      )
    );
  }

  /**
   * Saves form TODO:
   * @param models
   */
  saveForm(models): void {

    this.dbApiCompany.local.get(models._id) // find the doc

      .then(getResult => { // found

        models._rev = getResult._rev; // update revision

        this.dbApiCompany.local.put(models) // then save the revision

          .then(existPutResult => {

            console.log(existPutResult); // revisions is saved in browser

            this.dbApiCompany.sync(); // sync to server

            this.snackBarGo('Data Saved'); // feedback
          })
          .catch(existPutErr => console.log(existPutErr));
      })
      .catch(getErr => { // document was not found

        if (getErr.name === 'not_found') {

          this.dbApiCompany.local.put(models) // save the doc

            .then(newPutResult => {

              // new document saved successful.

              this.dbApiCompany.sync(); // sync

              this.snackBarGo('Data Saved'); // feedback

            })
            .catch(newPutErr => {

              console.log(newPutErr); // error placing document

              this.snackBarGo('Data Not Saved!'); // feedback

            });

        } else {

          console.error(getErr);

        }
      });
  }


  /**
   * Populates form on start TODO:
   * @param doc
   */
  populateFormOnStart(doc: CompanyProfileModel) {
    this.form.companyName = doc.companyName;
    this.form.aboutCompany = doc.aboutCompany;
    this.form.suite = doc.address.suite;
    this.form.building = doc.address.building;
    this.form.streetNo = doc.address.streetNo;
    this.form.streetName = doc.address.streetName;
    this.form.area = doc.address.area;
    this.form.city = doc.address.city;
    this.form.userName = doc.contacts.username;
    this.form.firstName = doc.contacts.firstName;
    this.form.lastName = doc.contacts.lastName;
    this.form.email = doc.contacts.email;
  }

  /**
   * Snacks bar go TODO:
   * @param msg
   * @param [type]
   */
  snackBarGo(msg: string, type?: boolean): void {
    this.matSnackBarRef = this.snackBar.open(msg);
    setTimeout(() => this.matSnackBarRef.dismiss(), 3000);
  }
}
