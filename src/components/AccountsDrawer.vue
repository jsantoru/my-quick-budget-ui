<template>
  <div class="drawer-container">
    <md-toolbar class="md-transparent md-dense">
      <md-icon>account_balance</md-icon>
      <h5 class="md-title" style="flex: 1">Accounts</h5>
    </md-toolbar>

    <md-toolbar class="md-dense" md-elevation="0">
      <md-icon>attach_money</md-icon>
      <span>&nbsp;&nbsp;Cash </span>

      <div class="md-toolbar-section-end">
        <md-badge class="md-square" md-content="$1526" style="margin-right:20px;background-color:green;"></md-badge>
      </div>
    </md-toolbar>

    <md-list>
      <md-list-item>
        <span class="md-list-item-text">&nbsp;&nbsp;M&T Checking</span>
        <md-badge class="md-square cash-badge" md-content="$1000" style="background-color:green;"></md-badge>
      </md-list-item>

      <md-list-item>
        <span class="md-list-item-text">&nbsp;&nbsp;Key Checking</span>
        <md-badge class="cash-badge md-square" md-content="$526" style="background-color:green;"></md-badge>
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
</style>

<script>
  export default {
    name: "AccountsDrawer",
    data: () => ({
    }),
    methods: {
      hide() {
        this.$emit("hide-drawer");
      }
    }
  };
</script>