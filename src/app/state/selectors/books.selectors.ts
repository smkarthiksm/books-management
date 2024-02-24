import { createSelector } from '@ngrx/store';
import { AppState, BooksState } from '../models/state';

export const selectBooksFeature = (state: AppState) => state.booksState;

export const selectBooks = createSelector(
  selectBooksFeature,
  (booksState: BooksState) => booksState.books
);
