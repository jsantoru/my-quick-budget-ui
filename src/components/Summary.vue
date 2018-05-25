<template>
  <div class="summary">
    <div class="summary-top">
      <md-toolbar class="md-transparent md-dense" md-elevation="0">
        <md-icon>calendar_today</md-icon>
        <h5 class="md-title" style="flex: 1">May 2018</h5>
      </md-toolbar>
    </div>
    <div class="summary-middle">
      <md-list>
        <md-divider></md-divider>
        <md-list-item style="background-color:whitesmoke;">
          <span class="md-title" style="font-size:18px;">Budget Summary</span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text">Budgeted</span>
          <div>{{getTotalBudgeted() | currency}}</div>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Spent</span>
          <div>{{getTotalSpent() | currency}}</div>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Remaining</span>
          <div>{{getTotalBudgeted() - getTotalSpent() | currency}}</div>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Days Left</span>
          <div>{{getMonthDaysLeft()}}</div>
        </md-list-item>

        <md-divider></md-divider>

        <md-list-item style="background-color:whitesmoke;">
          <span class="md-title" style="font-size:18px;">Paycheck and Bills Summary</span>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Next Paycheck</span>
          <div>June 1st ($2145)</div>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text">Next Bill Due</span>
          <div>June 1st (Mortgage - $1510)</div>
        </md-list-item>
      </md-list>
    </div>
    <div class="summary-bottom">
    </div>
  </div>
</template>

<style scoped>
  .cash-badge {
    background-color: green;
  }
</style>

<script>
  import budgetCalcUtils from '../shared/BudgetCalcUtils';
  export default {
    name: "Transactions",
    data: () => ({
    }),
    methods: {
      getTotalBudgeted() {
        return budgetCalcUtils.getTotalBudgeted();
      },
      getTotalSpent() {
        return budgetCalcUtils.getTotalSpent();
      },
      getMonthDaysLeft() {
        return budgetCalcUtils.getMonthDaysLeft();
      }
    }
  };
</script>