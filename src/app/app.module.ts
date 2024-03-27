// Modules
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat/";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { environment } from "../environments/environment";
import { AccountModule } from "./account/account.module";
import { AdminModule } from "./admin/admin.module";
import { CheckoutModule } from "./checkout/checkout.module";
import { CoreModule } from "./core/core.module";
import { ProductsModule } from "./products/products.module";
import { SharedModule } from "./shared/shared.module";

// Components
import { APP_BASE_HREF } from "@angular/common";
import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, CartComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
    CoreModule,
    ProductsModule,
    CheckoutModule,
    AccountModule,
    AdminModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/meticulous-demo" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
