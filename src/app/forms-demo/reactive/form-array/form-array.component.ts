import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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
    }),
    aliases: this.fb.array([this.fb.control('')])
  })

  get aliases() {
    console.log(this.profileFormGroup.get('aliases'));
    return this.profileFormGroup.get('aliases') as FormArray;
  }
  onSubmit() {
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);
  }
  addAliases() {
    this.aliases.push(this.fb.control(''));
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
      },
      aliases: ['john', 'doe', 'martin']
    });
  }

}
