import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  /**
   * !Only redirect if the path is empty!
   */
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
