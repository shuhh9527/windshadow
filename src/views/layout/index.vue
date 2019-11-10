<template>
<div>
  <WsNavbar></WsNavbar>
  <WsMenu></WsMenu>
  <router-view />
</div>
</template>

<script>
import WsMenu from './WsMenu'
import WsNavbar from './WsNavbar'
export default {
  name: 'dashboard',
  components: {
    WsMenu,
    WsNavbar
  }
}
</script>

<style>
</style>
