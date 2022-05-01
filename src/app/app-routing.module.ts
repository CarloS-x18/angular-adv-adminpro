import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

  // Dashboard Routes
  { path: 'dashboard', loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule ) },
  // Auth Routes
  { path: '', loadChildren: () =>  import('./auth/auth.module').then( m => m.AuthModule ) },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
