<template>
    <button class="btn">
        <slot>
            My button
        </slot>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.btn{
    margin-bottom: 0.5em ;
    margin-right: 0.5em ;
    padding: 0.5em 1em;
}

</style>