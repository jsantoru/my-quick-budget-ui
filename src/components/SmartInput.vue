<template>
  <div>
    <md-field>
      <!-- TODO: investigate a good use for this field (maybe the ideal budgeted value? how much remaining? how much overspent by?) -->
      <!--<label v-if="prevValue">{{prevValue}}</label>-->
    <md-input ref="input"
        v-model="displayValue"
        placeholder="Enter Value"
        @blur="isInputActive = false; prevValue = null"
        @focus="isInputActive = true; prevValue = getPreviousDisplayValue()"
        @keyup.native.enter="onEnter()">
        <!-- @focus.native="$event.target.select();"> selectAll - works, but then is immediately not selected because the value changes-->
    </md-input>
    </md-field>
  </div>
</template>

<style scoped>
  input {
    max-width: 150px;
  }

  .right-align {
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
  }

</style>

<script>
  export default {
    components: {},
    name: "SmartInput",
    props: ["value", "type", "rightAlign"],
    data: function () {
      return {
        prevValue: "",
        isInputActive: false
      }
    },
    computed: {
      rightAlignValue() {
        return this.rightAlign || false;
      },
      typeValue() {
        return this.type || "string";
      },
      displayValue: {
        get: function () {
          if (this.isInputActive || this.typeValue !== "currency") {
            // Cursor is inside the input field. unformat display value for user
            return this.value.toString();
          } else {
            // User is not modifying now. Format display value for user interface
            return "$ " + this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
          }
        },

        // TODO: define a WIP value and then send event to update value only on "ENTER" or "blur"
        // TODO: do not send an update on "ESC"
        set: function (modifiedValue) {
          let newValue = modifiedValue;
          if (this.typeValue === "currency") {
            // Recalculate value after ignoring "$" and "," in user input
            newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
            // Ensure that it is not NaN
            if (isNaN(newValue)) {
              newValue = 0
            }
            // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
            // $emit the event so that parent component gets it
          }

          this.$emit('input', newValue)
        }
      }
    },
    methods: {
      onEnter() {
        console.log("ENTER");
        this.isInputActive = false;

        // TODO: remove focus
        // TODO: focus on something else??
      },

      getPreviousDisplayValue() {
        if (this.type === "currency") {
          return "$ " + this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
        }
        return this.value;
      }
    },

    mounted: function() {
      // override the vue-material font-size for inputs
      // overriding with classes in the template didn't work, so override it after it's been mounted
      this.$refs.input.$el.style.fontSize = "14px";

      // if right align was passed in
      if (this.rightAlignValue) {
        console.log("right align");
        this.$refs.input.$el.style.textAlign = "right";
      }

    }
  }
</script>