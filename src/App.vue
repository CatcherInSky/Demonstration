<template>
  <a-layout class="container">
    <a-layout-header class="header">
      <Header />

    </a-layout-header>
    <a-layout>
      <a-layout-sider collapsible class="menu">
        <Menu />
      </a-layout-sider>
      <a-layout>
        <a-layout>
        <a-layout-content class="content">
          <div class="page">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-sider theme="light" width="150">
          <Anchor />
        </a-layout-sider>
        </a-layout>
        <a-layout-footer class="footer">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
  import Header from './components/header.vue';
  import Footer from './components/footer.vue';
  import Menu from './components/menu.vue';
  import Anchor from './components/anchor.vue';
</script>
<style scoped lang="scss">
.container {
  min-height: 100vh;
}
.header {
  color: #fff;
}
.content {
  display: flex;
}
.page {
  margin: 10px;
  background: #fff;
  border-radius: 2px;
  flex: 1;
  box-shadow: 1px 1px 2px #ccc;
}
.menu {
}
.footer {
  background: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
