import { Component, ContentChild, OnInit } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component'
@Component({
  selector: 'app-user-after-content-detail',
  templateUrl: './user-after-content-detail.component.html',
  styleUrls: ['./user-after-content-detail.component.css']
})
export class UserAfterContentDetailComponent implements OnInit {

  constructor() { }
  user = {
    name: 'john',
    age: 25
  };

  @ContentChild(EditUserComponent) edituser: EditUserComponent;
  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log("after content Init......");
    console.log(this.edituser.user.name);
    console.log(this.edituser.user.age);


  }

  ngAfterContentChecked() {
    console.log("after content Checked......");
    console.log(this.edituser.user.name);
    console.log(this.edituser.user.age);
  }

}
