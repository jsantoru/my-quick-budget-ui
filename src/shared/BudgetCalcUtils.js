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
}