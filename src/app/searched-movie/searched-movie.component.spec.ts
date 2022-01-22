import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedMovieComponent } from './searched-movie.component';

describe('SearchedMovieComponent', () => {
  let component: SearchedMovieComponent;
  let fixture: ComponentFixture<SearchedMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
