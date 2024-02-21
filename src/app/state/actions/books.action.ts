import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from '../models/state';

export const BooksActions = createActionGroup({
  source: 'Books Page',
  events: {
    getBooksApiCall: emptyProps(),
    getBooks: props<{ books: Book[] }>(),
  },
});
