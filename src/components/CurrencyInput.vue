<template>
  <div>
    <md-field>
      <label v-if="labelText">prevValue: {{labelText}}</label>

    <md-input
        v-model="displayValue"
        placeholder="Enter Value"
        @blur="isInputActive = false;"
        @focus="isInputActive = true;">
    </md-input>
    </md-field>
  </div>
</template>

<style scoped>
  input {
    text-align: right;
  }

  /* remove bottom line when not being edited */
  .md-field:after {
    height: 0px;
  }

  /* override the material padding */
  .md-field {
    padding: 0;
    margin: 0;
    min-height: 0;
    font-size: 1em;
  }

</style>

<script>
  export default {
    components: {},
    name: "CurrencyInput",
    props: ["value"],
    data: function () {
      return {
        isInputActive: false
      }
    },
    computed: {
      displayValue: {
        get: function () {
          if (this.isInputActive) {
            // Cursor is inside the input field. unformat display value for user
            return this.value.toString()
          } else {
            // User is not modifying now. Format display value for user interface
            return "$ " + this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
          }
        },
        set: function (modifiedValue) {
          // Recalculate value after ignoring "$" and "," in user input
          let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
          // Ensure that it is not NaN
          if (isNaN(newValue)) {
            newValue = 0
          }
          // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
          // $emit the event so that parent component gets it
          this.$emit('input', newValue)
        }
      }
    }
  }
</script>