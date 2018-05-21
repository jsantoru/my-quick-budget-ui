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
        <div class="mat-row">
          <div class="mat-cell">rent</div>
          <div class="mat-cell">$1000</div>
          <div class="mat-cell">$1000</div>
          <div class="mat-cell">$0</div>
        </div>
        <div class="mat-row">
          <div class="mat-cell">rent</div>
          <div class="mat-cell">$1000</div>
          <div class="mat-cell">$1000</div>
          <div class="mat-cell">$0</div>
        </div>
        <div class="mat-row">
          <div class="mat-cell">rent</div>
          <div class="mat-cell">$1000</div>
          <div class="mat-cell">$1000</div>
          <div class="mat-cell">$0</div>
        </div>
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
        <div class="mat-row">
          <div class="mat-cell">eating out</div>
          <div class="mat-cell">$10</div>
          <div class="mat-cell">$2</div>
          <div class="mat-cell"><span class="budget-badge under-budget-badge">$8.00</span></div>
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
  export default {
    name: "Budget",
    data: () => ({
    }),
    methods: {
    }
  };
</script>