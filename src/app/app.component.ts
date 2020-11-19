import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faSearch, faBook, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private userService: UserService, private ref: ChangeDetectorRef) {
  }

  user: object|null = null;

  ngOnInit(): void{
    this.userService.authUser$.subscribe(user => {
      this.user=user;
      this.ref.detectChanges();
    })
  }

  title = 'book-finder';

  faSearch = faSearch;
  faBook = faBook;
  faGoogle = faGoogle;
  faSignOutAlt = faSignOutAlt;

  handleSignIn(){
    this.userService.logIn();
  }

  handleSignOut(){
    this.userService.logOut();
  }
}
