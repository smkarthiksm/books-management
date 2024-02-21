import { createFeature, createReducer, on } from '@ngrx/store';
import { BooksState } from '../models/state';
import { BooksActions } from '../actions/books.action';
const initialState: BooksState = {
  books: [],
  loading: true,
};

export const booksFeature = createFeature({
  name: 'books',
  reducer: createReducer(
    initialState,
    on(BooksActions.getBooks, (state, { books }) => ({
      ...state,
      books,
      loading: false,
    }))
  ),
});
