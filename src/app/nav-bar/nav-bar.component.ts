import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchedMovie: string | undefined;

  onSubmit(search:string){
    this.searchedMovie=search
    console.log(this.searchedMovie);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
