import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapse = false; //check collapse navigation expand
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoWishlist() {
    this.router.navigate(['/wishlist']);
  }

  toggleMenu(event:any) {
    if (!this.isCollapse) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;

    }
  }
}
