import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import { EMPTY, catchError, exhaustMap, map, of } from 'rxjs';
import { BooksActions } from '../actions/books.action';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      (actions) => {
        return actions;
      },
      ofType(BooksActions.getBooksApiCall),
      exhaustMap(() =>
        this.apiService.getBooks().pipe(
          map((books) => {
            return BooksActions.getBooks({ books });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
