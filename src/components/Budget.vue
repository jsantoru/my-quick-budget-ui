<template>
  <div class="budget-container">
    <div class="heading">
      <h2>Budget</h2>
      <p>Totally sweet budget subtext and options</p>
    </div>
    <div class="mat-table">
      <div class="mat-header-row">
        <div class="mat-header-cell">CATEGORY</div>
        <div class="mat-header-cell">BUDGETED</div>
        <div class="mat-header-cell">SPENT</div>
        <div class="mat-header-cell">REMAINING</div>
      </div>
    </div>

    <!-- dynamic -->
    <v-expansion-panel v-for="categoryGroup in budget.categoryGroups" >
      <v-expansion-panel-content :value="true" class="grey lighten-3">
        <div slot="header">
          <div class="category-group-row">
            <div class="mat-cell">{{categoryGroup.name}}</div>
            <div class="mat-cell">{{getCategoryGroupBudgeted(categoryGroup) | currency}}</div>
            <div class="mat-cell">{{getCategoryGroupSpent(categoryGroup) | currency}}</div>
            <div class="mat-cell">{{getCategoryGroupRemaining(categoryGroup) | currency}}</div>

          </div>
        </div>
        <div v-for="category in categoryGroup.categories" class="mat-row">
          <div class="mat-cell">{{category.name}}</div>
          <div class="mat-cell">{{category.budgeted | currency}}</div>
          <div class="mat-cell">{{category.spent | currency}}</div>
          <div class="mat-cell">{{(category.budgeted - category.spent) | currency}}</div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<style scoped>
  .heading {
    text-align: center;
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

  .category-group-row {
    display: flex;
  }

  .mat-row,
  .mat-header-row,
  .category-group-row {
    font-size: 12px;
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
  import VExpansionPanel from "vuetify/src/components/VExpansionPanel/VExpansionPanel";
  export default {
    components: {VExpansionPanel},
    name: "Budget",
    data: () => ({
      budget: ""
    }),
    methods: {
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
      retrieveBudget() {
        console.log("retrieve");

        const budget = {
          categoryGroups: [
            {
              name: "Food",
              categories: [
                {name: "Groceries", budgeted: 400, spent: 327.37},
                {name: "Family Eating Out", budgeted: 175, spent: 158.99},
                {name: "Work Eating Out", budgeted: 80, spent: 77.47},
              ]
            },
            {
              name: "Housing",
              categories: [
                {name: "Mortgage", budgeted: 1214.80, spent: 1214.80},
                {name: "Additional Mortgage", budgeted: 0, spent: 0},
                {name: "Work Eating Out", budgeted: 80, spent: 77.47},
              ]
            },
            {
              name: "Cars",
              categories: [
                {name: "Car Loan", budgeted: 307.55, spent: 0},
                {name: "Gas", budgeted: 125, spent: 95.42},
                {name: "Insurance", budgeted: 125, spent: 120.44},
                {name: "Maintenance", budgeted: 25, spent: 0},
              ]
            },
            {
              name: "Bills",
              categories: [
                {name: "Electric", budgeted: 200, spent: 182.61},
                {name: "Cellphone", budgeted: 60, spent: 53.36},
                {name: "Internet", budgeted: 64.99, spent: 64.99},
              ]
            },
            {
              name: "Subscriptions/Memberships",
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