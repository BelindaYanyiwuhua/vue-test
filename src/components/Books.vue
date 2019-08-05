<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu/>
        </div>
        <div class="column is-9">
          <h2 class="title">书籍列表</h2>

          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
            <tr>
              <th>书籍</th>
              <th>作者</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="book in findAllBooks" :key="book.id">
              <td>{{ book.title }}</td>
              <td>{{ book.pageCount }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { FIND_ALL_BOOKS_QUERY } from '../graphql'
  import FindAllBooks from '../components/FindAllBooks'

  export default {
    name: 'Books',
    components: {
      FindAllBooks
    },
    data () {
      return {
        findAllBooks: []
      }
    },
    apollo: {
      // fetch all books
      findAllBooks: {
        query: FIND_ALL_BOOKS_QUERY
      }
    }
  }
</script>
