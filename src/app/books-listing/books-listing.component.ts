import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, BooksState } from '../state/models/state';
import { BooksActions } from '../state/actions/books.action';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { booksFeature } from '../state/reducers/books.reducer';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-listing',
  standalone: true,
  imports: [HttpClientModule, ProgressSpinnerModule, CommonModule],
  providers: [ApiService],
  templateUrl: './books-listing.component.html',
  styleUrl: './books-listing.component.scss',
})
export class BooksListingComponent implements OnInit {
  books: Book[] = [];
  loading = false;
  constructor(private readonly store: Store<BooksState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      const { books, loading } = booksFeature.selectBooksState(state);
      this.books = books;
      this.loading = loading;
    });
    this.store.dispatch(BooksActions.getBooksApiCall());
  }
}
