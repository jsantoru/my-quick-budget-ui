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
            <md-badge class="md-square cash-badge" md-content="$1526" style="margin-right:20px;" />
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <span class="md-list-item-text">&nbsp;&nbsp;M&T Checking</span>
            <md-badge class="md-square cash-badge" md-content="$1000" />
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">&nbsp;&nbsp;Key Checking</span>
            <md-badge class="md-square cash-badge" md-content="$526" />
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

        <button class="accordion" @click="collapse">
          <span><md-icon>fastfood</md-icon>&nbsp;&nbsp;Food</span>
          <div class="md-toolbar-section-end">
          </div>
        </button>
        <div class="panel">
          <md-table class="food-table" :class="{collapsed: isCollapsed}">
            <md-table-row>
              <md-table-head>Category</md-table-head>
              <md-table-head>Budgeted</md-table-head>
              <md-table-head>Spent</md-table-head>
              <md-table-head>Remaining</md-table-head>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Groceries</md-table-cell>
              <md-table-cell>$400</md-table-cell>
              <md-table-cell>$240</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$160</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Family</md-table-cell>
              <md-table-cell>$100</md-table-cell>
              <md-table-cell>$185</md-table-cell>
              <md-table-cell><span class="budget-badge over-budget-badge">-$85</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Work</md-table-cell>
              <md-table-cell>$50</md-table-cell>
              <md-table-cell>$30</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$20</span></md-table-cell>
            </md-table-row>
          </md-table>
        </div>

        <button class="accordion">
          <span><md-icon>home</md-icon>&nbsp;&nbsp;Housing</span>
          <div class="md-toolbar-section-end">
          </div>
        </button>
        <div class="panel">
          <md-table class="food-table">
            <md-table-row>
              <md-table-head>Category</md-table-head>
              <md-table-head>Budgeted</md-table-head>
              <md-table-head>Spent</md-table-head>
              <md-table-head>Remaining</md-table-head>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Groceries</md-table-cell>
              <md-table-cell>$400</md-table-cell>
              <md-table-cell>$240</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$160</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Groceries</md-table-cell>
              <md-table-cell>$400</md-table-cell>
              <md-table-cell>$240</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$160</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Groceries</md-table-cell>
              <md-table-cell>$400</md-table-cell>
              <md-table-cell>$240</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$160</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Family</md-table-cell>
              <md-table-cell>$100</md-table-cell>
              <md-table-cell>$185</md-table-cell>
              <md-table-cell><span class="budget-badge over-budget-badge">-$85</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Work</md-table-cell>
              <md-table-cell>$50</md-table-cell>
              <md-table-cell>$30</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$20</span></md-table-cell>
            </md-table-row>
          </md-table>
        </div>


        <button class="accordion">
          <span><md-icon>drive_eta</md-icon>&nbsp;&nbsp;Transportation</span>
          <div class="md-toolbar-section-end">
          </div>
        </button>
        <div class="panel">
          <md-table class="food-table">
            <md-table-row>
              <md-table-head>Category</md-table-head>
              <md-table-head>Budgeted</md-table-head>
              <md-table-head>Spent</md-table-head>
              <md-table-head>Remaining</md-table-head>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Groceries</md-table-cell>
              <md-table-cell>$400</md-table-cell>
              <md-table-cell>$240</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$160</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Family</md-table-cell>
              <md-table-cell>$100</md-table-cell>
              <md-table-cell>$185</md-table-cell>
              <md-table-cell><span class="budget-badge over-budget-badge">-$85</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Work</md-table-cell>
              <md-table-cell>$50</md-table-cell>
              <md-table-cell>$30</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$20</span></md-table-cell>
            </md-table-row>
          </md-table>
        </div>

        <button class="accordion">
          <span><md-icon>drive_eta</md-icon>&nbsp;&nbsp;Transportation</span>
          <div class="md-toolbar-section-end">
          </div>
        </button>
        <div class="panel">
          <md-table class="food-table">
            <md-table-row>
              <md-table-head>Category</md-table-head>
              <md-table-head>Budgeted</md-table-head>
              <md-table-head>Spent</md-table-head>
              <md-table-head>Remaining</md-table-head>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Groceries</md-table-cell>
              <md-table-cell>$400</md-table-cell>
              <md-table-cell>$240</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$160</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Family</md-table-cell>
              <md-table-cell>$100</md-table-cell>
              <md-table-cell>$185</md-table-cell>
              <md-table-cell><span class="budget-badge over-budget-badge">-$85</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Work</md-table-cell>
              <md-table-cell>$50</md-table-cell>
              <md-table-cell>$30</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$20</span></md-table-cell>
            </md-table-row>
          </md-table>
        </div>

        <button class="accordion">
          <span><md-icon>drive_eta</md-icon>&nbsp;&nbsp;Transportation</span>
          <div class="md-toolbar-section-end">
          </div>
        </button>
        <div class="panel">
          <md-table class="food-table">
            <md-table-row>
              <md-table-head>Category</md-table-head>
              <md-table-head>Budgeted</md-table-head>
              <md-table-head>Spent</md-table-head>
              <md-table-head>Remaining</md-table-head>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Groceries</md-table-cell>
              <md-table-cell>$400</md-table-cell>
              <md-table-cell>$240</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$160</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Family</md-table-cell>
              <md-table-cell>$100</md-table-cell>
              <md-table-cell>$185</md-table-cell>
              <md-table-cell><span class="budget-badge over-budget-badge">-$85</span></md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell>Eating Out - Work</md-table-cell>
              <md-table-cell>$50</md-table-cell>
              <md-table-cell>$30</md-table-cell>
              <md-table-cell><span class="budget-badge under-budget-badge">$20</span></md-table-cell>
            </md-table-row>
          </md-table>
        </div>
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

  .over-budget-badge {
    background-color: red;
  }

  .under-budget-badge {
    background-color: green;
  }

  .budget-badge {
    color: white;
    padding: 4px;
    border-radius: 5px;
  }

  .cash-badge {
    background-color: green;
  }

  .credit-card-badge {
    background-color: red;
  }

  /* accordian styling */
  .category-title {
    margin: 0;
    font-weight: normal;
  }

  .collapsed {
    height: 0px;
    overflow: hidden;
    transition: height 0.25s ease-in;
  }

  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    padding: 10px;
  }

  .active,
  .accordion:hover {
    background-color: #ccc;
  }

  .panel {
    padding: 0 18px;
    background-color: white;
    max-height: auto;
    transition: max-height 0.2s ease-out;
    /*max-height: 0;*/
    /*overflow: hidden;*/
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
