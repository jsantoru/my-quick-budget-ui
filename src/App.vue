<template>
  <div class="container" ref="container">
    <div class="top"><toolbar v-if="showDrawer"></toolbar></div>
    <div class="middle">
      <div class="middle-left" v-if="showDrawer">
        <AccountsDrawer></AccountsDrawer>
      </div>
      <div class="middle-content">
        <router-view></router-view>
      </div>
      <div class="middle-right" v-if="showDrawer">
        <Summary></Summary>
      </div>
    </div>
    <div class="bottom-bar">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item md-label="budget" md-icon="home" to="/"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="accounts" md-icon="account_balance" to="/transactions"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="reports" md-icon="insert_chart" to="/reports"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="setup" md-icon="settings" to="/setup"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
    <div class="bottom">
      <p style="padding-left:10px;">© My Quick Budget {{(new Date()).getFullYear()}}</p>
    </div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import AccountsDrawer from './components/AccountsDrawer.vue'
import Summary from './components/Summary.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    AccountsDrawer,
    Summary
  },
  data: () => ({
    showDrawer: false,
    showRightSideDrawer: false
  })
}
</script>

<style>
  body {
    margin: 0; /* puts the body all the way to the edge, avoids an outer scrollbar */
  }
  html,
  body,
  .container {
    height: 100%; /* fill up the available space */
    overflow: hidden;
    padding: 0;
    max-width:100%;
  }

  div {
    /*border: 1px solid black;*/
  }

  .container {
    display: flex; /* needed at the parent level, so child divs can use 'flex: n' */
    flex-direction: column; /* stack divs vertically - this allows the top bar to be on top instead of on the left */
  }
  .top {
    /*height: 72px; /* static height nav */

    /*flex:1;*/ /* relative size to divs at the same level */
  }
  .middle {
    display: flex; /* needed at the parent level, so child divs can use 'flex: n' */
    flex: 9; /* relative size to divs at the same level */
  }
  .middle-left {
    /*flex: 1; /* relative size to divs at the same level */
    min-width:300px;
    overflow: auto; /* enable scroll bar */

    border-right:1px solid lightgrey;

    /* needed for its child divs */
    display: flex; /* needed at the parent level, so child divs can use 'flex: n' */
    flex-direction: column; /* child divs stack vertically */
  }
  .middle-content {
    flex: 4; /* relative size to divs at the same level */
    overflow: hidden; /* vertical scrollbar */

    display: flex;
    flex-direction: column;
  }

  .middle-content-header {
    height: 40px;
  }

  .middle-content-body {
    flex:1;
    overflow: auto;
  }

  .middle-right {
    flex: 1; /* relative size to divs at the same level */
    overflow: auto; /* vertical scrollbar */

    min-width: 300px;
  }

  .md-bottom-bar {
    display: none;
  }

  /* setup mobile bottom bar */
  @media (max-width: 725px) {
    .md-bottom-bar {
      display: inherit;
    }

    .bottom {
      display: none;
    }
  }

  .bottom {
    height: 20px;
    /*flex: 0.5; /* relative size to divs at the same level */
  }


/* hide sidebars when width shrinks */
@media (max-width:1200px) {
  .middle-left,
  .middle-right {
    display: none;
    width:0px;
  }
}
</style>
