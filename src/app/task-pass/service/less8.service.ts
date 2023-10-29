import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Less8Service {
  checkPass(password: string): boolean {
    const less8 = /^.{1,7}$/.test(password);

    if (less8) {
      return true;
    } else {
      return false;
    }
  }
}
