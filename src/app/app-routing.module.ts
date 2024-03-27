import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { OrdersComponent } from "./account/orders/orders.component";
import { ProfileComponent } from "./account/profile/profile.component";
import { RegisterLoginComponent } from "./account/register-login/register-login.component";
import { AddEditComponent } from "./admin/add-edit/add-edit.component";
import { AdminGuard } from "./admin/shared/admin.guard";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CompleteComponent } from "./checkout/complete/complete.component";
import { HomeComponent } from "./core/home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsListComponent },
  { path: "products/:id", component: ProductDetailComponent },
  { path: "cart", component: CartComponent },
  { path: "admin/add", component: AddEditComponent, canActivate: [AdminGuard] },
  {
    path: "admin/edit/:id",
    component: AddEditComponent,
    canActivate: [AdminGuard],
  },
  { path: "checkout", component: CheckoutComponent },
  { path: "register-login", component: RegisterLoginComponent },
  {
    path: "account",
    component: AccountComponent,
    children: [
      { path: "", redirectTo: "profile", pathMatch: "full" },
      { path: "orders", component: OrdersComponent },
      { path: "profile", component: ProfileComponent },
    ],
  },
  { path: "order-complete", component: CompleteComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: "legacy",
      useHash: true,
    }),
  ],
  exports: [RouterModule],
  providers: [AdminGuard],
})
export class AppRoutingModule {}
