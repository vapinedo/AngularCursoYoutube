import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public form: FormGroup;
 
  constructor() { 
    this.form = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.value)
  }

}
