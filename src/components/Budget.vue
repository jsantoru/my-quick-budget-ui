<template>
  <div class="budget-container">
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
  </div>
</template>

<style scoped>
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
    name: "Budget",
    data: () => ({
    }),
    methods: {
    }
  };
</script>