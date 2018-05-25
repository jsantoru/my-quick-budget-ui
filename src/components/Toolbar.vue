<template>
  <div class="toolbar-container">
  <md-toolbar class="md-dense md-primary">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button show-drawer-button" @click="showDrawer = !showDrawer">
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
        <md-button class="md-icon-button show-drawer-button" @click="showRightSideDrawer = !showRightSideDrawer">
          <md-icon>menu</md-icon>
        </md-button>
      </div>
    </div>
  </md-toolbar>

  <md-drawer class="left-drawer" :md-active.sync="showDrawer">
    <Drawer></Drawer>
  </md-drawer>

  <md-drawer class="md-right right-drawer" :md-active.sync="showRightSideDrawer">
    SUMMARY
  </md-drawer>
  </div>
</template>

<style scoped>
  .left-drawer,
  .right-drawer {
    width: 230px;
  }

  /* when the screen is below 1000px the sidebars are removed, and buttons should be rendered to show the drawers */
  .show-drawer-button {
    display: none;
  }
  @media (max-width: 1000px) {
    .show-drawer-button {
      display: inherit;
    }
  }
</style>

<script>
  import Drawer from './AccountsDrawer.vue'
  export default {
    name: "Toolbar",
    components: {
      Drawer
    },
    data: () => ({
      showDrawer: false,
      showRightSideDrawer: false
    }),
    methods: {
    }
  };
</script>