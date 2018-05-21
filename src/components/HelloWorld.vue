<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
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
          <md-tabs class="md-primary"> <!-- md-sync-route -->
            <md-tab id="tab-home" md-label="Budget"></md-tab> <!-- to="/component"-->
            <md-tab id="tab-pages" md-label="Reports"></md-tab>
            <md-tab id="tab-posts" md-label="Account"></md-tab>
            <md-tab id="tab-favorites" md-label="Setup"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent md-dense">
          <h5 class="md-title" style="flex: 1">Accounts</h5>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon><!--keyboard_arrow_left-->account_balance</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-toolbar class="md-dense" md-elevation="0">
          <md-icon>attach_money</md-icon>
          <span>&nbsp;&nbsp;Cash </span>

          <div class="md-toolbar-section-end">
            <md-badge class="md-square" md-content="$1526" style="margin-right:20px;background-color:green;"></md-badge>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <span class="md-list-item-text">&nbsp;&nbsp;M&T Checking</span>
            <md-badge class="md-square cash-badge" md-content="$1000" style="background-color:green;"></md-badge>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">&nbsp;&nbsp;Key Checking</span>
            <md-badge class="cash-badge md-square" md-content="$526" style="background-color:green;"></md-badge>
          </md-list-item>

          <md-list-item>
            <md-button class="md-icon-button md-dense">
              <md-icon>add_circle</md-icon>
            </md-button>
            <span class="md-list-item-text">Add Cash Account</span>
          </md-list-item>
        </md-list>

        <md-toolbar class="md-dense" md-elevation="0">
          <md-icon>credit_card</md-icon>
          <span>&nbsp;&nbsp;Credit Cards</span>
          <md-badge class="md-square credit-card-badge" md-content="$625" style="margin-right:20px;" />
          <div class="md-toolbar-section-end">
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <span class="md-list-item-text">&nbsp;&nbsp;Chase Sapphire</span>
            <md-badge class="md-square credit-card-badge" md-content="$625" />
          </md-list-item>

          <md-list-item>
            <md-button class="md-icon-button md-dense">
              <md-icon>add_circle</md-icon>
            </md-button>
            <span class="md-list-item-text">Add Credit Card</span>
          </md-list-item>
        </md-list>

      </md-app-drawer>

      <md-app-content>

        <h2>Budget</h2>
        <p>Totally sweet budget subtext and options</p>

        <div class="mat-table">
          <div class="mat-header-row">
            <div class="mat-header-cell">category</div>
            <div class="mat-header-cell">budgeted</div>
            <div class="mat-header-cell">spent</div>
            <div class="mat-header-cell">remaining</div>
          </div>
        </div>
        <v-expansion-panel>
          <v-expansion-panel-content :value="true" class="grey lighten-3">
            <div slot="header">
              <div class="category-group-row">
                <div class="mat-cell">Housing</div>
                <div class="mat-cell">$1000</div>
                <div class="mat-cell">$1000</div>
                <div class="mat-cell">$0</div>
              </div>
            </div>
            <v-card class="white">
              <v-card-text>
                <div class="mat-row">
                  <div class="mat-cell">rent</div>
                  <div class="mat-cell">$1000</div>
                  <div class="mat-cell">$1000</div>
                  <div class="mat-cell">$0</div>
                </div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-content :value="true" class="grey lighten-3">
            <div slot="header">
              <div class="category-group-row">
                <div class="mat-cell">Food</div>
                <div class="mat-cell">$10</div>
                <div class="mat-cell">$2</div>
                <div class="mat-cell"><span class="budget-badge under-budget-badge">$8.00</span></div>

              </div>
            </div>
            <v-card class="white">
              <v-card-text>
                <div class="mat-row">
                  <div class="mat-cell">eating out</div>
                  <div class="mat-cell">$10</div>
                  <div class="mat-cell">$2</div>
                  <div class="mat-cell"><span class="budget-badge under-budget-badge">$8.00</span></div>
                </div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
  .md-app {
    height: 100vh;
    /*border: 1px solid rgba(#000, 0.12);*/
  }

  .md-drawer {
    width: 230px;
    /*max-width: calc(100vw - 125px);*/
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

  /* material table styling */
  .mat-table {
    display: block;
  }

  .mat-row,
  .mat-header-row {
    display: flex;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: lightgray;
    align-items: center;
    min-height: 48px;
    padding: 0 24px;
  }

  .mat-header-row {
    padding-right:48px;
    padding-left:35px;
  }

  .mat-row {
    padding-left:17px;
    padding-right:32px;
  }

  .category-group-row {
    display: flex;
    padding-left:10px;
  }

  .mat-cell,
  .mat-header-cell {
    flex: 1;
    overflow: hidden;
    word-wrap: normal;
    /*border:1px solid black;*/
  }

  .expansion-panel__header {
    background-color: whitesmoke;
  }
</style>

<script>
  export default {
    name: "HelloWorld",
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
