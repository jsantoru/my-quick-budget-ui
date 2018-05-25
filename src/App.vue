<template>
  <div class="container" ref="container">
    <div class="top">TOP</div>
    <div class="middle">
      <div class="middle-left">
        <p>SIDEBAR CONTENT</p>
        <p>SIDEBAR CONTENT</p>
        <p>SIDEBAR CONTENT</p>
        <p>SIDEBAR CONTENT</p>
        <p>SIDEBAR CONTENT</p>
      </div>
      <div class="middle-content">

        <div class="middle-content-header">
          <p>MIDDLE CONTENT HEADER</p>
        </div>

        <div class="middle-content-body">
          <budget></budget>
        </div>

      </div>
      <div class="middle-right">
        <p>RIGHT SIDEBAR CONTENT</p>
        <p>RIGHT SIDEBAR CONTENT</p>
        <p>RIGHT SIDEBAR CONTENT</p>
        <p>RIGHT SIDEBAR CONTENT</p>
        <p>RIGHT SIDEBAR CONTENT</p>
      </div>
    </div>
    <div class="bottom">
      <p>BOTTOM</p>
    </div>
  </div>
</template>

<script>
  import Budget from './components/Budget.vue'

export default {
  name: 'app',
  components: {
    Budget
  }
}
</script>

<style>
  body {
    margin: 0; /* puts the body all the way to the edge, avoids an outer scrollbar */
  }
  html,
  body,
  .container {
    height: 100%; /* fill up the available space */
    overflow: hidden;
    padding: 0;
  }

  div {
    /*border: 1px solid black;*/
  }

  .container {
    display: flex; /* needed at the parent level, so child divs can use 'flex: n' */
    flex-direction: column; /* stack divs vertically - this allows the top bar to be on top instead of on the left */
  }
  .top {
    height: 50px; /* static height nav */
    /*flex:1;*/ /* relative size to divs at the same level */
  }
  .middle {
    display: flex; /* needed at the parent level, so child divs can use 'flex: n' */
    flex: 9; /* relative size to divs at the same level */
  }
  .middle-left {
    flex: 1; /* relative size to divs at the same level */
    overflow: auto; /* enable scroll bar */
    /* needed for its child divs */
    display: flex; /* needed at the parent level, so child divs can use 'flex: n' */
    flex-direction: column; /* child divs stack vertically */
  }
  .middle-content {
    flex: 4; /* relative size to divs at the same level */
    overflow: hidden; /* vertical scrollbar */

    display: flex;
    flex-direction: column;
  }

  .middle-content-header {
    height: 40px;
  }

  .middle-content-body {
    flex:1;
    overflow: auto;
  }

  .middle-right {
    flex: 1; /* relative size to divs at the same level */
    overflow: auto; /* vertical scrollbar */
  }
  .bottom {
    height: 20px;
    /*flex: 0.5; /* relative size to divs at the same level */
  }


/* hide sidebars when width shrinks */
/* TODO: add hamburgers to display sidebars if needed - USE DRAWERS!! */
@media (max-width:1000px) {
  .middle-left,
  .middle-right {
  display: none;
  width:0px;
  }
}
</style>
