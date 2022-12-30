import { RouterModule, Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { ProtectedComponent } from './protected/protected.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

/**
 * It works if /home is not protected
 */
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AutoLoginPartialRoutesGuard],
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AutoLoginPartialRoutesGuard],
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
    canActivate: [AutoLoginPartialRoutesGuard],
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
    canLoad: [AutoLoginPartialRoutesGuard],
  },
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
