import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: AngularFirestore) {
    firestore
      .collection('dragons')
      .doc('JlzDn87QipJdnN3bncgH')
      .snapshotChanges()
      .subscribe((value) => console.log(value.payload.data()));
  }

  async createCollection() {
    let x = await this.firestore
      .collection('dragons')
      .add({
        name: 'slutdragon',
        sex: 'unicorn',
      })
      .then((value) => console.log(value.id));
    console.log('Return from Firestore: ' + x);
  }
}
