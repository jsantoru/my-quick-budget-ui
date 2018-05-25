<template>
  <div class="heading">
    <div class="heading-left">
      <h2 style="text-align:center;padding-bottom:5px;">May 2018</h2>
    </div>
    <div class="heading-center">
      <div class="mat-table">
        <div class="mat-header-row summary-header">
          <div class="mat-header-cell">BUDGETED</div>
          <div class="mat-header-cell">SPENT</div>
          <div class="mat-header-cell">REMAINING</div>
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
</template>

<style scoped>

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