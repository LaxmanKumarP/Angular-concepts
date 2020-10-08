import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.profileFormGroup.valueChanges.subscribe(changesObj =>{
      console.log(changesObj);
    })
  }

  profileFormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    Address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    })
  });

  onSubmit() {
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);


  }

  updateFewProfileControls() {
    this.profileFormGroup.patchValue({
      firstName: 'Nancy',
      Address: {
        street: '123 dowling'
      }
    });
  }

  updateAllProfileControls() {
    this.profileFormGroup.setValue({
      firstName: 'laxman',
      lastName: 'kumar',
      Address: {
        street: 'ladd',
        city: 'hyd',
        state: 'Ts',
        zip: ''
      }
    });
  }
}
