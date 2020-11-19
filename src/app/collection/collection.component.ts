import { Component } from '@angular/core';
import { CollectionsService } from "../collections.service";
import { UserService } from '../user.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {

  books: any;

  constructor(public collectionsService: CollectionsService, private userService: UserService) { }

  handleSignIn(){
    this.userService.logIn();
  }
}
