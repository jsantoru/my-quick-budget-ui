<template>
  <PageContainer></PageContainer>
</template>

<script>
import PageContainer from './components/PageContainer.vue';
import Reports from './components/Reports.vue';
import Budget from './components/Budget.vue';

export default {
  name: 'app',
  components: {
    PageContainer,
    Budget,
    Reports
  }
}
</script>

<style>
  html {
    overflow: hidden;
  }
  #app {

  }
</style>
