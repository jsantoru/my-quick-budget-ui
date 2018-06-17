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
      <span class="tabs-labels">
        <md-tabs class="md-primary" md-sync-route>
          <md-tab class="tab-budget" md-label="budget" to="/"></md-tab>
          <md-tab class="tab-transactions" md-label="accounts" to="/transactions"></md-tab>
          <md-tab class="tab-reports" md-label="reports" to="/reports"></md-tab>
          <md-tab class="tab-setup" md-label="setup" to="/setup"></md-tab>
        </md-tabs>
      </span>
      <span class="tabs-icons">
        <md-tabs class="md-primary" md-sync-route>
          <md-tab class="tab-budget" md-icon="home" to="/"></md-tab>
          <md-tab class="tab-transactions" md-icon="account_balance" to="/transactions"></md-tab>
          <md-tab class="tab-reports" md-icon="insert_chart" to="/reports"></md-tab>
          <md-tab class="tab-setup" md-icon="settings" to="/setup"></md-tab>
        </md-tabs>
      </span>
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
    <AccountsDrawer></AccountsDrawer>
  </md-drawer>

  <md-drawer class="md-right right-drawer" :md-active.sync="showRightSideDrawer">
    <Summary></Summary>
  </md-drawer>

  </div>
</template>

<style scoped>
  .left-drawer,
  .right-drawer {
    width: 300px;
  }

  /* when the screen is below 1200px:
    - the sidebars are removed
    - buttons should be rendered to show the drawers
    - toolbar tabs now show icons */
  .show-drawer-button {
    display: none;
  }

  .tabs-icons {
    display: none;
  }

  @media (max-width: 1200px) {
    .show-drawer-button {
      display: inherit;
    }

    .tabs-labels {
      display: none;
    }

    .tabs-icons {
      display: inherit;
    }
  }

  /* setup mobile bottom bar */
  @media (max-width: 725px) {
    .tabs-icons {
      display: none;
    }
  }
</style>

<script>
  import AccountsDrawer from './AccountsDrawer.vue'
  import Summary from './Summary.vue'

  export default {
    name: "Toolbar",
    components: {
      AccountsDrawer,
      Summary
    },
    data: () => ({
      showDrawer: false,
      showRightSideDrawer: false
    }),
    methods: {
    }
  };
</script>