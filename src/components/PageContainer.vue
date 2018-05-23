<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <!-- toolbar -->
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Quick Budget</span>
          </div>
          <!-- center of toolbar -->
          <!-- TODO: logo -->
          <span>...</span>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-accent">
              <md-icon>thumb_up</md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon>person</md-icon>
            </md-button>

          </div>
        </div>
        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-budget" md-label="Budget" to="/"></md-tab>
            <md-tab id="tab-transactions" md-label="Transactions" to="/transactions"></md-tab>
            <md-tab id="tab-reports" md-label="Reports" to="/reports"></md-tab>
            <md-tab id="tab-setup" md-label="Setup" to="/setup"></md-tab>
          </md-tabs>
          <div class="md-toolbar-section-start">
          </div>
          <div class="md-toolbar-section-end">
            <!-- TODO: move button to sticky bottom right... how difficult is this? -->
            <md-button class="md-icon-button md-raised md-accent" title="add transaction">
              <md-icon>add</md-icon>
            </md-button>
          </div>
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
  /* allow the content to take up the entire viewport height*/
  .md-app {
    height: 100vh;
  }

  /* set the width of the drawer */
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

  .md-content {
    padding-left: 0px;
    padding-right: 0px;
  }
</style>

<script>
  import Drawer from './Drawer.vue';

  export default {
    name: "PageContainer",
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
