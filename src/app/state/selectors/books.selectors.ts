import { createSelector } from '@ngrx/store';
import { AppState, Book, BooksState } from '../models/state';

export const selectBooksFeature = (state: AppState) => state.books;

export const selectBooks = createSelector(
  selectBooksFeature,
  (books: BooksState) => books.books
);
