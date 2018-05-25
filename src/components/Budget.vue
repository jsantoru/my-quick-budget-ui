<template>
  <div class="budget-container">
    <div class="budget-header">
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
      <div class="mat-table">
        <div class="mat-header-row">
          <div class="mat-header-cell category-col">CATEGORY</div>
          <div class="mat-header-cell currency-col">BUDGETED</div>
          <div class="mat-header-cell currency-col">SPENT</div>
          <div class="mat-header-cell currency-col last-col">REMAINING</div>
        </div>
      </div>
    </div>
    <div class="budget-body">
    <!-- Confirm - Delete Category-->
    <md-dialog-confirm
        :md-active.sync="confirmDeleteCategory"
        md-title="Are you sure you want to delete this category?"
        md-content="All transactions in this category will need to be re-categoried. Continue with category delete?"
        md-confirm-text="Yes"
        md-cancel-text="Cancel"
        @md-cancel="cleanupDeleteCategory()"
        @md-confirm="deleteCategory()">
    </md-dialog-confirm>
    <div class="bottom-container">
      <div class="budget-table-container">

    <!-- dynamic -->
    <v-expansion-panel v-for="categoryGroup in budget.categoryGroups" class="border-top">
      <v-expansion-panel-content :value="true" class="grey lighten-3">
        <div slot="header">
          <div class="category-group-row">
            <!-- category col -->
            <div class="mat-cell category-col">
              <!-- on hover over the icon or the name, display an add category button -->
              <span class="category-group-wrapper" @mouseover="categoryGroup.isHover = true" @mouseleave="categoryGroup.isHover = false">
                <md-button v-if="!categoryGroup.isHover" class="md-icon-button md-dense">
                  <md-icon v-if="categoryGroup.mdicon">{{categoryGroup.mdicon}}</md-icon>
                  <md-icon v-if="!categoryGroup.mdicon">label</md-icon>
                  <md-tooltip md-delay="0" md-direction="bottom">Add Category</md-tooltip>
                </md-button>
                <md-button v-if="categoryGroup.isHover" class="md-icon-button md-raised md-primary md-dense"
                           @click="$event.stopPropagation(); addCategory(categoryGroup)">
                  <md-icon>add</md-icon>
                  <md-tooltip md-delay="0" md-direction="bottom">Add Category</md-tooltip>
                </md-button>
                <span class="category-group-name">{{categoryGroup.name}}</span>
              </span>
            </div>
            <div class="mat-cell currency-col">{{getCategoryGroupBudgeted(categoryGroup) | currency}}</div>
            <div class="mat-cell currency-col">{{getCategoryGroupSpent(categoryGroup) | currency}}</div>
            <div class="mat-cell currency-col last-col">
              <span class="category-group-remaining-cell">{{getCategoryGroupRemaining(categoryGroup) | currency}}</span>
            </div>
          </div>
        </div>

        <!-- categories -->
        <div v-for="category in categoryGroup.categories" class="mat-row">
          <div class="mat-cell category-col" @mouseover="category.isHover = true" @mouseleave="category.isHover = false">
            <smart-input v-model="category.name" @focus.native="$event.target.select();"></smart-input>
            <md-button v-if="category.isHover" class="md-icon-button md-raised md-primary md-dense">
              <md-icon>add</md-icon>
              <md-tooltip md-delay="0" md-direction="bottom">Add Transaction</md-tooltip>
            </md-button>
            <md-button v-if="category.isHover" class="md-icon-button md-raised md-accent md-dense"
                @click="onClickDeleteCategory(categoryGroup.categories, category)">
              <md-icon>delete</md-icon>
              <md-tooltip md-delay="0" md-direction="bottom">Delete Category</md-tooltip>
            </md-button>
          </div>
          <div class="mat-cell currency-col">
            <smart-input v-model="category.budgeted" :type="'currency'" :right-align="true" @focus.native="$event.target.select();"></smart-input>
          </div>
          <div class="mat-cell currency-col">
            <span>{{category.spent | currency}}</span>
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
    </div>
    </div>
  </div>
</template>

<style scoped>
  .budget-container {
    display: flex;
    flex-direction: column;

    overflow: hidden;
  }

  .budget-body {
    overflow: auto;
  }

  .bottom-container {
    display: flex;
    flex-direction: row;
  }

  .budget-table-container {
    flex: 5;
  }

  .right-side {
    flex: 1;
  }

  /* hide the right bar when the width shrinks */
  /* TODO: do this in other spots to make it much more mobile friendly */
  @media (max-width: 1200px) {
    .right-side {
      display: none;
      flex: 0;
    }
  }

  .heading {
    box-shadow: 0 3px 2px -2px gray;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    overflow: hidden;
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

  .category-group-wrapper {
    display: flex;
    align-items:center;
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

    display: flex;
    align-items: center;

  }

  .category-col {
    flex: 2;
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
  import SmartInput from './SmartInput.vue';

  export default {
    components: {VExpansionPanel, VueNumeric, SmartInput},
    name: "Budget",
    data: () => ({
      labelText:"",
      confirmDeleteCategory: false,
      deleteCategoryObject: null
    }),
    computed: {
      store() {
        return this.$root.$data.store;
      },
      budget() {
        return this.store.budget;
      }
    },
    methods: {
      /* add/delete categories */
      addCategory(categoryGroup) {
        categoryGroup.categories.push({name: "", budgeted: 0, spent: 0, isHover: false});
      },
      onClickDeleteCategory(categories, category) {
        this.deleteCategoryObject = {categories, category};

        // the confirm dialog is synced to this value
        this.confirmDeleteCategory = true;
      },
      deleteCategory() {
        const categories = this.deleteCategoryObject.categories;
        const categoryToDelete = this.deleteCategoryObject.category;

        for (let i=0; i<categories.length; i++) {
          const category = categories[i];
          if (category.name === categoryToDelete.name) {
            categories.splice(i, 1);
          }
        }

        this.cleanupDeleteCategory();
      },
      cleanupDeleteCategory() {
        this.confirmDeleteCategory = false;
        this.deleteCategoryObject = null;
      },

      /* methods for computing table values */
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
                {name: "Groceries", budgeted: 300, spent: 327.37, isHover: false},
                {name: "Family Eating Out", budgeted: 175, spent: 158.99, isHover: false},
                {name: "Work Eating Out", budgeted: 80, spent: 77.47, isHover: false},
              ],
              isHover: false
            },
            {
              name: "Housing",
              mdicon: "home",
              categories: [
                {name: "Mortgage", budgeted: 1510.80, spent: 1510.80, isHover: false},
                {name: "Additional Mortgage", budgeted: 0, spent: 0, isHover: false},
              ],
              isHover: false
            },
            {
              name: "Cars",
              mdicon: "directions_car",
              categories: [
                {name: "Car Loan", budgeted: 307.55, spent: 0, isHover: false},
                {name: "Gas", budgeted: 125, spent: 95.42, isHover: false},
                {name: "Insurance", budgeted: 125, spent: 120.44, isHover: false},
                {name: "Maintenance", budgeted: 25, spent: 0, isHover: false},
              ],
              isHover: false
            },
            {
              name: "Bills",
              mdicon: "drafts",
              categories: [
                {name: "Electric", budgeted: 200, spent: 182.61, isHover: false},
                {name: "Cellphone", budgeted: 60, spent: 53.36, isHover: false},
                {name: "Internet", budgeted: 64.99, spent: 64.99, isHover: false},
              ],
              isHover: false
            },
            {
              name: "Subscriptions",
              mdicon: "repeat",
              categories: [
                {name: "YouTube TV", budgeted: 40, spent: 40, isHover: false},
                {name: "Spotify", budgeted: 10.98, spent: 10.98, isHover: false},
                {name: "Netflix", budgeted: 13.99, spent: 13.99, isHover: false},
                {name: "Gym", budgeted: 29.98, spent: 29.98, isHover: false},
                {name: "YNAB", budgeted: 5, spent: 0, isHover: false},
                {name: "Amazon Prime", budgeted: 10, spent: 0, isHover: false},
                {name: "Museum of Play", budgeted: 15, spent: 0, isHover: false},
              ],
              isHover: false
            },
          ]
        };

        //this.budget = budget;
        this.$root.$data.store.budget = budget;
      }
    },
    created() {
      this.retrieveBudget();
    }
  };
</script>