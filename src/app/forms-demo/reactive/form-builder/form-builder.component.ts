import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.profileFormGroup.valueChanges.subscribe(changesObj => {
      console.log(changesObj);
    })
  }

  ngOnInit(): void {
  }

  profileFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    Address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    })
  })

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
