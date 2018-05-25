import store from '../store';

export default {
  getMonthDaysLeft(){
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate();
  },
  getTotalBudgeted() {
    let total = 0;
    for (const categoryGroup of store.budget.categoryGroups) {
      for (const category of categoryGroup.categories) {
        total += category.budgeted;
      }
    }
    return total;
  },
  getTotalSpent() {
    let total = 0;
    for (const categoryGroup of store.budget.categoryGroups) {
      for (const category of categoryGroup.categories) {
        total += category.spent;
      }
    }
    return total;
  },
  /* methods for computing table values */
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
}