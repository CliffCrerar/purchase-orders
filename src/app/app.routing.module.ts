
import { Routes } from '@angular/router';
import { LandingComponent } from 'src/app/components/2.landing/landing.component';
import { HomeComponent } from 'src/app/components/3.home/home.component';
import { PurchaseOrdersComponent } from 'src/app/components/3.home/1.purchase-orders/purchase-orders.component';
import { SuppliersComponent } from 'src/app/components/3.home/2.suppliers/suppliers.component';
import { ProductsComponent } from 'src/app/components/3.home/3.products/products.component';
import { CompanyProfileComponent } from './components/settings/company-profile/company-profile.component';
import { PriceComponent } from 'src/app/components/3.home/4.price/price.component';
import { SupplierCreateComponent } from 'src/app/components/3.home/2.suppliers/supplier-create/supplier-create.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingComponent, data: {} },
  { path: 'admin-entity', component: CompanyProfileComponent, data: {} },
  {
    path: 'main', component: HomeComponent, data: {},
    children: [
      {
        path: '',
        redirectTo: 'purchase-orders',
        pathMatch: 'full'
      },
      {
        path: 'purchase-orders',
        component: PurchaseOrdersComponent,
        data: {
          workspaceTitle: 'Manage Purchase Orders'
        }
      },
      {
        path: 'suppliers',
        component: SuppliersComponent,
        data: {
          workspaceTitle: 'Manage Suppliers'
        },
      },

      {
        path: 'price-list',
        component: PriceComponent,
        data: {
          workspaceTitle: 'Manage Price List'
        }
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          workspaceTitle: 'Manage Products'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          workspaceTitle: 'About'
        }
      }
    ]
  }
];

export default routes;

