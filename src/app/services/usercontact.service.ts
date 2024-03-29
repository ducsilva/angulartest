import { Injectable } from '@angular/core';
import { UserContact } from '../_core/model/usercontact.model';


@Injectable({
  providedIn: 'root'
})
export class UsercontactService {

  usercontacts: UserContact[] = [{
    id: 0,
    firstname: 'Nguyen',
    lastname: 'Duc',
    email: 'nguyenminhduc1327@gmail.com'
  },
  {
    id: 1,
    firstname: 'Tran',
    lastname: 'Hoang',
    email: 'hoangtran@gmail.com'
  },
  {
    id: 2,
    firstname: 'Mai',
    lastname: 'Nguyen',
    email: 'mainguyen@gmail.com'
  }];

  create(usercontact: UserContact) {
    const itemIndex = this.usercontacts.length;
    usercontact.id = this.getnextId();
    console.log(usercontact);
    this.usercontacts[itemIndex] = usercontact;
  }

  delete(usercontact: UserContact) {
    this.usercontacts.splice(this.usercontacts.indexOf(usercontact), 1);
  }

  update(usercontact: UserContact) {
    const itemIndex = this.usercontacts.findIndex(item => item.id === usercontact.id);
    console.log(itemIndex);
    this.usercontacts[itemIndex] = usercontact;
  }

  getall(): UserContact[] {
    console.log('usercontactservice:getall');
    console.log(this.usercontacts);
    return this.usercontacts;
  }

  reorderUserContacts(usercontact: UserContact) {
    console.log('Zur Info:', usercontact);
    this.usercontacts = this.usercontacts
      .map(uc => uc.id === usercontact.id ? usercontact : uc)
      .sort((a, uc) => uc.id - uc.id);
  }

  getUserById(id: number) {
    console.log(id);
    const itemIndex = this.usercontacts.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.usercontacts[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.usercontacts.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}
