<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <!-- toolbar -->
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <div class="md-toolbar-section-start">
            <span class="md-title">My Quick Budget</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>
        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-home" md-label="Budget" to="/"></md-tab>
            <md-tab id="tab-pages" md-label="Reports" to="/reports"></md-tab>
            <md-tab id="tab-posts" md-label="Account"></md-tab>
            <md-tab id="tab-favorites" md-label="Setup"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <!-- drawer/menu -->
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <Drawer v-on:hide-drawer="toggleMenu"></Drawer>
      </md-app-drawer>

      <!-- content -->
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
  .md-app {
    height: 100vh;
  }

  .md-drawer {
    width: 230px;
  }

  /* fix the border on the sidebar */
  .md-content {
    border: none;
  }
  .md-drawer {
    border-right: 1px solid lightgray;
  }

  .over-budget-badge {
    background-color: red;
  }

  .under-budget-badge {
    background-color: green;
  }

  .budget-badge {
    color: white;
    padding: 4px;
    border-radius: 10px;
  }

  .cash-badge {
    background-color: green;
  }

  .credit-card-badge {
    background-color: red;
  }
</style>

<script>
  import Drawer from './Drawer.vue';

  export default {
    name: "HelloWorld",
    components: {
      "Drawer": Drawer
    },
    data: () => ({
      menuVisible: true,
      isCollapsed: false
    }),
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible;
      },
      collapse() {
        console.log("collapse");
        this.isCollapsed = !this.isCollapsed;
      }
    }
  };
</script>
