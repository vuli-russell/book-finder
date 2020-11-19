import { Component, OnInit, OnDestroy} from '@angular/core';
import { CollectionsService } from "../collections.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {

  books: any;
  userSubscription: Subscription;

  constructor(public collectionsService: CollectionsService) { }
}
