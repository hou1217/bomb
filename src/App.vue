 <template>
  <div id="app">
    <!--<transition>-->
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view> 
    <!--</transition>-->
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
.router-link-exact-active{
  color:#00D8B7 !important;
}
[v-cloak]{
  display: none;
}
</style>
