import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckStrongService {
  checkPass(password: string): boolean {
    const regLetters = /[a-zA-Zа-яА-Я]/.test(password);
    const regDigits = /\d/.test(password);
    const regSymbols = /[!@#$%^&*+=.<>{}:;`"'~_-]/.test(password);

    if (regLetters && regDigits && regSymbols) {
      return true;
    } else {
      return false;
    }
  }
}
