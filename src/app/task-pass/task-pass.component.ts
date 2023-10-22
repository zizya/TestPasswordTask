import {Component} from '@angular/core';

@Component({
  selector: 'app-task-pass',
  templateUrl: './task-pass.component.html',
  styleUrls: ['./task-pass.component.css']

})
export class TaskPassComponent {
  password: string = '';
  passSection1: string = 'gray';
  passSection2: string = 'gray';
  passSection3: string = 'gray';
  passSectionText: string = '';

  checkPass() {

    if (this.password.length == 0) {
      this.passSection1 = 'gray';
      this.passSection2 = 'gray';
      this.passSection3 = 'gray';
      this.passSectionText= 'Password length = 0';

    } else if (this.password.length < 8) {
      this.passSection1 = 'red';
      this.passSection2 = 'red';
      this.passSection3 = 'red';
      this.passSectionText= 'Password length < 8 symbols';
    } else {
      const regLetters = /[a-zA-Z]/.test(this.password);
      const regDigits = /\d/.test(this.password);
      const regSymbols = /[!@#$%^&*+=.<>{}:;`"'~_-]/.test(this.password);

      if (regLetters && regDigits && regSymbols) {
        this.passSection1 = 'green';
        this.passSection2 = 'green';
        this.passSection3 = 'green';
        this.passSectionText= 'Password is strong';
      } else if ((regLetters && regDigits) || (regDigits && regSymbols) || (regLetters && regSymbols)) {
        this.passSection1 = 'yellow';
        this.passSection2 = 'yellow';
        this.passSection3 = 'gray';
        this.passSectionText= 'Password is medium';
      } else if (regLetters || regDigits || regSymbols) {
        this.passSection1 = 'red';
        this.passSection2 = 'gray';
        this.passSection3 = 'gray';
        this.passSectionText= 'Password is Weak';

      }
    }
  }
}
