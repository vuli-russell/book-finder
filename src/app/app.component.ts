import { Component, OnInit } from '@angular/core';
import { faSearch, faBook, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private userService: UserService) {
  }

  user: object|null = null;

  ngOnInit(): void {
    this.userService.watchUser((value) => (this.user=value))
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

  // logUser(){
  //   console.log(this.user)
  // }
}
