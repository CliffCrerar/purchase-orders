import { FormatDatePipe } from './pipes/format-date.pipe';
import { FormatAmountPipe } from './pipes/format-amount.pipe';
import { RemapHeadingsPipe } from './pipes/pricelist-headings.pipe';
import { AddsComponent } from 'src/app/components/adds/adds.component';
import { CompanyProfileComponent } from 'src/app/components/settings/company-profile/company-profile.component';
// GENERIC
import { GenericCardHeaderComponent } from './_generic/generic-card-header';
// SPECIFIC
import { HomeComponent } from 'src/app/components/3.home/home.component';
import { LandingComponent } from 'src/app/components/2.landing/landing.component';
import { LogoSvgComponent } from 'src/app/components/static/logo-svg/logo-svg.component';
import { PoCreateComponent } from 'src/app/components/3.home/1.purchase-orders/po-create/po-create.component';
import { PoRetrieveComponent } from 'src/app/components/3.home/1.purchase-orders/po-retrieve/po-retrieve.component';
import { PoUpdateComponent } from 'src/app/components/3.home/1.purchase-orders/po-update/po-update.component';
import { PriceComponent } from 'src/app/components/3.home/4.price/price.component';
import { PriceCreateComponent } from './components/3.home/4.price/price-create/price-create.component';
import { PriceRetrieveComponent } from './components/3.home/4.price/price-retrieve/price-retrieve.component';
import { PriceUpdateComponent } from './components/3.home/4.price/price-update/price-update.component';
import { ProductsComponent } from 'src/app/components/3.home/3.products/products.component';
import { PurchaseOrdersComponent } from 'src/app/components/3.home/1.purchase-orders/purchase-orders.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { SupplierCreateComponent } from 'src/app/components/3.home/2.suppliers/supplier-create/supplier-create.component';
import { SupplierRetrieveComponent } from 'src/app/components/3.home/2.suppliers/supplier-retrieve/supplier-retrieve.component';
import { SupplierUpdateComponent } from 'src/app/components/3.home/2.suppliers/supplier-update/supplier-update.component';
import { SuppliersComponent } from 'src/app/components/3.home/2.suppliers/suppliers.component';
// Entry
import { WhoopsDialogComponent } from 'src/app/components/static/whoops/whoops.component';
import { AboutComponent } from './about.component';

// Declarations
const p = '';

export default {

  declarations: [
    // tslint:disable-next-line: max-line-length
    LandingComponent, LogoSvgComponent, HomeComponent, PurchaseOrdersComponent, SuppliersComponent, PriceComponent, ProductsComponent, WhoopsDialogComponent, SupplierRetrieveComponent, SupplierCreateComponent, SupplierUpdateComponent, PoCreateComponent, PoRetrieveComponent, PoUpdateComponent, CompanyProfileComponent, SettingsComponent, AddsComponent, PriceRetrieveComponent, PriceCreateComponent, PriceUpdateComponent, GenericCardHeaderComponent, RemapHeadingsPipe, FormatAmountPipe, FormatDatePipe, AboutComponent
  ],
  entryComponents: [WhoopsDialogComponent]
};
