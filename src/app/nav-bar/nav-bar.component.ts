import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchedMovie: string | undefined;
  h1color = 'transparent';

  onSubmit(search:string){
    this.searchedMovie=search
    console.log(this.searchedMovie);
    
  }

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  refresh(id:any): void {
    this.router.navigateByUrl(`/search/${id}`);
}

onFocusEvent(event:any){
  this.h1color = "white"
}

}
