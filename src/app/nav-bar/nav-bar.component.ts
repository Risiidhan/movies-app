import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('search', { static: false }) search: ElementRef<HTMLInputElement> = {} as ElementRef;

  searchedMovie: string | undefined;
  h1color = 'transparent';

  onSubmit(search: string) {
    this.searchedMovie = search

  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  refresh(id: any): void {
    this.router.navigateByUrl(`/search/${id}`);
    this.reset();
  }

  reset() {
    let element : HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if(element.getAttribute('aria-expanded')==='true'){
      element.click();
    }
    this.search.nativeElement.value = "";
  }

  onFocusEvent(event: any) {
    this.h1color = "white"
  }

}
