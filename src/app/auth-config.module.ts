import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        // triggerAuthorizationResultEvent: true,
        postLoginRoute: '/auth-callback', // Not working ?
        forbiddenRoute: '/forbidden',
        unauthorizedRoute: '/unauthorized',
        logLevel: LogLevel.Debug,
        // historyCleanupOff: true,
        authority: 'https://offeringsolutions-sts.azurewebsites.net',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'angularCodeRefreshTokens',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
