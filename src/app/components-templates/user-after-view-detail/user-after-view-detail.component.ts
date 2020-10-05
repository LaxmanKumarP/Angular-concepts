import { Component, OnInit, ViewChild } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';
@Component({
  selector: 'app-user-after-view-detail',
  templateUrl: './user-after-view-detail.component.html',
  styleUrls: ['./user-after-view-detail.component.css']
})
export class UserAfterViewDetailComponent implements OnInit {

  constructor() { }

  user = {
    name: 'john',
    age: 25
  };

  @ViewChild(EditUserComponent) editUser: EditUserComponent;

  ngOnInit(): void {
    // console.log(this.editUser.user.name);

  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Called....!");
    console.log(this.editUser.user.name);
    console.log(this.editUser.user.age);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called....!");
    console.log(this.editUser.user.name);
    console.log(this.editUser.user.age);
  }
}

