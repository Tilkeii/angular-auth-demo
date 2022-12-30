import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css'],
})
export class AuthCallbackComponent implements OnInit {
  constructor(private securityService: OidcSecurityService) {}

  ngOnInit(): void {
    // Never going here
    this.securityService.checkAuth().subscribe(console.debug);
  }
}
