import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CheckWeakService} from "./service/checkWeak.service";
import {CheckMediumService} from "./service/check-medium.service";
import {CheckStrongService} from "./service/check-strong.service";
import {Less8Service} from "./service/less8.service";


@Component({
  selector: 'app-task-pass',
  templateUrl: './task-pass.component.html',
  styleUrls: ['./task-pass.component.css']

})
export class TaskPassComponent implements OnInit {
  weak: boolean = false;
  medium: boolean = false;
  strong: boolean = false;
  less8: boolean = false;
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder,
              private checkWeak: CheckWeakService,
              private checkMedium: CheckMediumService,
              private checkStrong: CheckStrongService,
              private checkLess8: Less8Service
  ) {
    this.reactiveForm = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.pattern(/.{8,}/)
      ]]
    });
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    const password = this.reactiveForm.get('password');
    if (password) {
      password.valueChanges.subscribe(value => {
        this.checkPass(value);
      });
    }
  }

  checkPass(pass: string) {
    this.weak = this.checkWeak.checkPass(pass);
    this.medium = this.checkMedium.checkPass(pass);
    this.strong = this.checkStrong.checkPass(pass);
    this.less8 = this.checkLess8.checkPass(pass);
  }
}
