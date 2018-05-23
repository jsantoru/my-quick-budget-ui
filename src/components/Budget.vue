<template>
  <div class="budget-container">
    <div class="heading">
      <div class="heading-left">
        <h2 style="text-align:center;padding-bottom:5px;">May 2018</h2>
      </div>
      <div class="heading-center">

        <div class="mat-table">
          <div class="mat-header-row summary-header">
            <div class="mat-header-cell">BUDGETED</div>
            <div class="mat-header-cell">SPENT</div>
            <div class="mat-header-cell">BUDGET REMAINING</div>
            <div class="mat-header-cell">DAYS REMAINING</div>
          </div>
          <div class="mat-row summary-row">
            <div class="mat-cell">{{getTotalBudgeted() | currency}}</div>
            <div class="mat-cell">{{getTotalSpent() | currency}}</div>
            <div class="mat-cell">{{getTotalBudgeted() - getTotalSpent() | currency}}</div>
            <div class="mat-cell">{{getMonthDaysLeft()}}</div>
          </div>
        </div>
      </div>
      <div class="heading-right">
        <div class="mat-table">
          <div class="mat-header-row summary-header">
            <div class="mat-header-cell">NEXT PAYCHECK</div>
            <div class="mat-header-cell">NEXT BILL DUE</div>
          </div>
          <div class="mat-row summary-row">
            <div class="mat-cell">June 1st ($2145)</div>
            <div class="mat-cell">June 1st ($1510 - Mortgage)</div>
          </div>
        </div>
      </div>
      <div class="heading-far-right">

      </div>
    </div>

    <!-- begin main table -->
    <div class="mat-table">
      <div class="mat-header-row">
        <div class="mat-header-cell category-col">CATEGORY</div>
        <div class="mat-header-cell currency-col">BUDGETED</div>
        <div class="mat-header-cell currency-col">SPENT</div>
        <div class="mat-header-cell currency-col last-col">REMAINING</div>
      </div>
    </div>

    <!-- dynamic -->
    <v-expansion-panel v-for="categoryGroup in budget.categoryGroups" class="border-top">
      <v-expansion-panel-content :value="true" class="grey lighten-3">
        <div slot="header">
          <div class="category-group-row">
            <div class="mat-cell category-col">
              <md-icon v-if="categoryGroup.mdicon">{{categoryGroup.mdicon}}</md-icon>
              <md-icon v-if="!categoryGroup.mdicon">label</md-icon>
              <span class="category-group-name">{{categoryGroup.name}}</span></div>
            <div class="mat-cell currency-col">{{getCategoryGroupBudgeted(categoryGroup) | currency}}</div>
            <div class="mat-cell currency-col">{{getCategoryGroupSpent(categoryGroup) | currency}}</div>
            <div class="mat-cell currency-col last-col">
              <span class="category-group-remaining-cell">{{getCategoryGroupRemaining(categoryGroup) | currency}}</span>
            </div>
          </div>
        </div>
        <div v-for="category in categoryGroup.categories" class="mat-row">
          <div class="mat-cell category-col">{{category.name}}</div>
          <div class="mat-cell currency-col">
            <currency-input v-model="category.budgeted" @focus.native="$event.target.select();"></currency-input>
          </div>
          <div class="mat-cell currency-col">
            <currency-input v-model="category.spent"></currency-input>
          </div>
          <div class="mat-cell currency-col last-col">
            <span class="budget-badge"
                :class="{'under-budget-badge': getCategoryRemaining(category) > 0, 'over-budget-badge': getCategoryRemaining(category) < 0, 'on-budget-badge': getCategoryRemaining(category) === 0}">
              <span class="budget-badge-value">{{getCategoryRemaining(category) | currency}}</span>
            </span>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<style scoped>
  .heading {
    box-shadow: 0 3px 2px -2px gray;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .heading-center {
    flex: 3;
    text-align: center;
  }

  .heading-left {
    flex: 1;
  }

  .heading-right {
    flex: 2;
    padding-left:20px;
    padding-right:20px;
    text-align: center;
  }

  .heading-far-right {
    flex: 1;
  }

  .summary-header {
    background-color: whitesmoke;
  }

  .summary-row {
    border-bottom: 1px solid lightgray;
    margin-bottom: 15px;
  }

  .category-group-name {
    padding-left: 5px;
  }

  /* badge */
  .over-budget-badge {
    background-color: darkred;
  }

  .under-budget-badge {
    background-color: green;
  }

  .on-budget-badge {
    background-color: darkgray;
  }

  .budget-badge {
    border-radius: 20px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .budget-badge-value {
    color: white;
    padding-left:8px;
    padding-right:8px;
  }

  /* material table styling */
  .mat-table {
    display: block;
  }

  .mat-row,
  .mat-header-row {
    display: flex;
    border-top: 1px solid lightgray;
    align-items: center;
    min-height: 34px;
    padding: 0 24px;
  }

  .mat-row {
    background-color: white;
  }

  .mat-row,
  .mat-header-row {
    padding-right:48px;
  }

  .mat-header-row {
    border-top: 1px solid lightgray;
  }

  .category-group-row {
    display: flex;
  }

  .mat-header-row {
    font-size: 12px;
  }

  .mat-row,
  .category-group-row {
    font-size: 14px;
  }

  .mat-cell,
  .mat-header-cell {
    flex: 1;
    overflow: hidden;
    word-wrap: normal;
  }

  .category-col {
    flex: .5;
  }

  .currency-col {
    display: flex;
    justify-content: flex-end;
  }

  .last-col {
    padding-right:20px;
  }

  .category-group-remaining-cell {
    /* additional 8px for the badge padding so the group remaining amount stays aligned */
    padding-right: 8px;
  }

  .border-top {
    border-top: 1px solid lightgray;
  }

  /** TODO: hide */

</style>

<script>
  import VExpansionPanel from "vuetify/src/components/VExpansionPanel/VExpansionPanel";
  import VueNumeric from 'vue-numeric';
  import CurrencyInput from './CurrencyInput.vue';

  export default {
    components: {VExpansionPanel, VueNumeric, CurrencyInput},
    name: "Budget",
    data: () => ({
      budget: "",
      labelText:""
    }),
    methods: {
      getMonthDaysLeft(){
        const date = new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate();
      },
      getTotalBudgeted() {
        let total = 0;
        for (const categoryGroup of this.budget.categoryGroups) {
          for (const category of categoryGroup.categories) {
            total += category.budgeted;
          }
        }
        return total;
      },
      getTotalSpent() {
        let total = 0;
        for (const categoryGroup of this.budget.categoryGroups) {
          for (const category of categoryGroup.categories) {
            total += category.spent;
          }
        }
        return total;
      },
      getCategoryGroupBudgeted(categoryGroup) {
        let total = 0;
        for (const category of categoryGroup.categories) {
          total += category.budgeted;
        }
        return total;
      },
      getCategoryGroupSpent(categoryGroup) {
        let total = 0;
        for (const category of categoryGroup.categories) {
          total += category.spent;
        }
        return total;
      },
      getCategoryGroupRemaining(categoryGroup) {
        return this.getCategoryGroupBudgeted(categoryGroup) - this.getCategoryGroupSpent(categoryGroup);
      },
      getCategoryRemaining(category) {
        return category.budgeted - category.spent;
      },
      retrieveBudget() {
        console.log("retrieve");

        const budget = {
          categoryGroups: [
            {
              name: "Food",
              mdicon: "fastfood",
              faicon: "",
              categories: [
                {name: "Groceries", budgeted: 300, spent: 327.37},
                {name: "Family Eating Out", budgeted: 175, spent: 158.99},
                {name: "Work Eating Out", budgeted: 80, spent: 77.47},
              ]
            },
            {
              name: "Housing",
              mdicon: "home",
              categories: [
                {name: "Mortgage", budgeted: 1510.80, spent: 1510.80},
                {name: "Additional Mortgage", budgeted: 0, spent: 0},
              ]
            },
            {
              name: "Cars",
              mdicon: "directions_car",
              categories: [
                {name: "Car Loan", budgeted: 307.55, spent: 0},
                {name: "Gas", budgeted: 125, spent: 95.42},
                {name: "Insurance", budgeted: 125, spent: 120.44},
                {name: "Maintenance", budgeted: 25, spent: 0},
              ]
            },
            {
              name: "Bills",
              mdicon: "drafts",
              categories: [
                {name: "Electric", budgeted: 200, spent: 182.61},
                {name: "Cellphone", budgeted: 60, spent: 53.36},
                {name: "Internet", budgeted: 64.99, spent: 64.99},
              ]
            },
            {
              name: "Subscriptions",
              mdicon: "repeat",
              categories: [
                {name: "YouTube TV", budgeted: 40, spent: 40},
                {name: "Spotify", budgeted: 10.98, spent: 10.98},
                {name: "Netflix", budgeted: 13.99, spent: 13.99},
                {name: "Gym", budgeted: 29.98, spent: 29.98},
                {name: "YNAB", budgeted: 5, spent: 0},
                {name: "Amazon Prime", budgeted: 10, spent: 0},
                {name: "Museum of Play", budgeted: 15, spent: 0},
              ]
            },
          ]
        };

        this.budget = budget;
      }
    },
    created() {
      this.retrieveBudget();
    }
  };
</script>