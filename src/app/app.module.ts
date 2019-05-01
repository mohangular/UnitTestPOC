import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitTestComponent } from './unit-test/unit-test.component';
import { FormTestngComponent } from './form-testng/form-testng.component';
import { FormServiceTestComponent } from './form-service-test/form-service-test.component';

@NgModule({
  declarations: [AppComponent, UnitTestComponent, FormTestngComponent, FormServiceTestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
