import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckWeakService {
  checkPass(password: string): boolean {
    const onlyLetters = /^[a-zA-Zа-яА-Я]*$/.test(password);
    const onlyDigits = /^\d*$/.test(password);
    const onlySymbols = /^[^a-zA-Zа-яА-Я\d]*$/.test(password);

    if (onlyLetters || onlyDigits || onlySymbols) {
      return true;
    } else {
      return false;
    }
  }
}
