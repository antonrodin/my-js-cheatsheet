<template>
<div class="entry-component">
    <p>
        <slot>Some text for default slot</slot>
    </p>
</div>
</template>

<script>
    export default {

    }
</script>

<style>
    .entry-component { width: 100%; margin: 5px; border: 1px solid grey; padding: 10px; text-align: left; }
</style>