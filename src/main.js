import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import fetch from 'node-fetch'
// import { createHttpLink } from "apollo-link-http"
import VueApollo from 'vue-apollo'
import Vue from 'vue'
import router from './router'
import App from "./App"

Vue.config.productionTip=false

const httpLink = new HttpLink({
  // GraphQL 服务器 URL，需要使用绝对路径
  uri: 'http://localhost:4002/graphiql'
  //uri: 'http://localhost:4002/graphiql'
})

// const httpLink = createHttpLink({uri:'/graphql',fetch:fetch});

// 创建 apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// 安装 vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  components: { App },
  template: '<App/>',
}).$mount('#app')
