import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartReviewComponent } from './cart-review.component';

const routes: Routes = [
  {
    path: '',
    component: CartReviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartReviewRoutingModule {}
