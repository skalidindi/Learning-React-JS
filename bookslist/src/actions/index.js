export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action, an object
  // with a type or property.
  return {
    type: 'BOOK_SELECTED', // should be defined as a constant ideally
    payload: book,
  };
}
