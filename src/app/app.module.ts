import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/1.root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModulesClass } from './app.material.module';
import AppComponentsModule from './app.declarations.module';
import Routes from './app.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ...AppComponentsModule.declarations
  ],
  imports: [
  MaterialModulesClass,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routes)
  ],
  entryComponents: [...AppComponentsModule.entryComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
console.log('AppModule: ', AppModule);
