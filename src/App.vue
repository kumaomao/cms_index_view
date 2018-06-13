<template>
  <div id="app" v-wechat-title="$route.name">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
