<template>
  <aside class="menu">
    <p class="menu-label">书籍</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/posts/new">新书记</router-link>
      </li>
      <li>
        <router-link to="/admin/posts">书籍列表</router-link>
      </li>
    </ul>
    <p class="menu-label">作者</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/users">作者列表</router-link>
      </li>
    </ul>
  </aside>
</template>
