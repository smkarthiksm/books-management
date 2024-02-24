export interface AppState {
  booksState: BooksState;
}

export interface BooksState {
  books: Book[];
  loading: boolean;
}

export interface Book {
  author: {
    first_name: string;
    last_name: string;
  };
  review: {
    name: string;
    body: string;
  };
  _id: string;
  book_id: number;
  title: string;
  pages: number;
  genres: string[];
  rating: number;
  plot: string;
  cover: string;
  url: string;
  __v: number;
}
