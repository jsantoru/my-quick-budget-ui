<template>
    <h1>Auth!</h1>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
 @import "../../assets/styles";

 body {
     &:after {
        content: '';
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: $background-tint;
        opacity: .3;
        z-index: -1;
     }
 }
</style>
