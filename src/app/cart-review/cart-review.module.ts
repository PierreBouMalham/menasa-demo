import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartReviewComponent } from './cart-review.component';
import { MatIconModule } from '@angular/material/icon';
import { CartReviewRoutingModule } from './cart-review-routing.module';

@NgModule({
  declarations: [CartReviewComponent],
  imports: [CommonModule, RouterModule, MatIconModule, CartReviewRoutingModule],
  providers: [],
})
export class CartReviewModule {}
