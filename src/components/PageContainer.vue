<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <!-- toolbar -->
      <md-app-toolbar class="md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Quick Budget</span>
          </div>
          <!-- center of toolbar -->
          <!-- TODO: logo -->
          <span><md-tabs class="md-primary" md-sync-route>
              <md-tab id="tab-budget" md-label="budget" md-icon="home" to="/"></md-tab>
              <md-tab id="tab-transactions" md-label="accounts" md-icon="account_balance" to="/transactions"></md-tab>
              <md-tab id="tab-reports" md-label="reports" md-icon="insert_chart" to="/reports"></md-tab>
              <md-tab id="tab-setup" md-label="setup" md-icon="settings" to="/setup"></md-tab>
            </md-tabs></span>
          <div class="md-toolbar-section-end">
            <!-- TODO: move button to sticky bottom right... how difficult is this? -->
            <md-button class="md-icon-button md-raised md-accent" title="add transaction">
              <md-icon>add</md-icon>
            </md-button>
            <md-badge md-content="3">
              <md-button class="md-icon-button">
                <md-icon>notifications</md-icon>
              </md-button>
            </md-badge>
            <md-button class="md-icon-button avatar">
              <md-avatar>
                <img src="../assets/joe-avatar.png" alt="Avatar">
              </md-avatar>
            </md-button>
            <md-button class="md-icon-button" @click="showRightSideDrawer = !showRightSideDrawer">
              <md-icon>menu</md-icon>
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
  .page-container {
  }

  /* allow the content to take up the entire viewport height*/
  .md-app {
    height: 100vh;
    width: 100vw;
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

  .avatar {
    margin-left: 15px;
  }
</style>

<script>
  import Drawer from './AccountsDrawer.vue';

  export default {
    name: "PageContainer",
    components: {
      "Drawer": Drawer
    },
    data: () => ({
      menuVisible: true,
      isCollapsed: false,
      showRightSideDrawer: true
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
