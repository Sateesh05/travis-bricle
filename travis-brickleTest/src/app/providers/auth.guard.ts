import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../token/gettoken.service';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private _TokenService: TokenService, private _router: Router) { }
    CanActivate(): boolean {
        if (this._TokenService.isLoggodInToken()) {
            return true
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}