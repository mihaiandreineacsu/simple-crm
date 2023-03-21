import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date = new Date();

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);

    this.firestore
      .collection('users')
      .add(this.user)
      .then((result: any) => {
        console.log('Adding user finished', result);
      })
  };

}