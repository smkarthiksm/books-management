import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksState } from '../state/models/state';
import { BooksActions } from '../state/actions/books.action';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { booksFeature } from '../state/reducers/books.reducer';

@Component({
  selector: 'app-books-listing',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ApiService],
  templateUrl: './books-listing.component.html',
  styleUrl: './books-listing.component.scss',
})
export class BooksListingComponent implements OnInit {
  constructor(private readonly store: Store<BooksState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      const { books, loading } = booksFeature.selectBooksState(state);
      console.log(books, loading);
    });
    this.store.dispatch(BooksActions.getBooksApiCall());
  }
}
