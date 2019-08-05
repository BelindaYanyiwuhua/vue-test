export const FIND_ALL_BOOKS_QUERY = gql`
  query findAllBooksQuery {
    findAllBooks {
      id
      title
      isbn
      pageCount
    }
  }
`
