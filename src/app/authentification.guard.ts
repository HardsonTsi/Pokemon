import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  canActivate() {
    console.info('Le Guard a bien été appelé !');
    return true;
  }
}


