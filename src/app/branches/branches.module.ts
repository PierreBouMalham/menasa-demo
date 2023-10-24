import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BranchesComponent } from './branches.component';
import { MatIconModule } from '@angular/material/icon';
import { BranchesRoutingModule } from './branches-routing.module';

@NgModule({
  declarations: [BranchesComponent],
  imports: [CommonModule, RouterModule, MatIconModule, BranchesRoutingModule],
  providers: [],
})
export class BranchesModule {}
