import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  querySelector(arg0: string) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('search') searchRef!: ElementRef;
  constructor(private router: Router, private renderer: Renderer2) {}
  logoutUser() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  extendSearch() {
    this.renderer.addClass(this.searchRef.nativeElement, 'active');
  }

  closeSearch() {
    this.renderer.removeClass(this.searchRef.nativeElement, 'active');
  }
}
