<template>
  <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Reports from './components/Reports.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Reports
  }
}
</script>

<style>
#app {

}

</style>
