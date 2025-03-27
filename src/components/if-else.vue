<template>
    <div>
        <h1 v-if="diesplay">if condition</h1>
        <h1 v-else>else condition</h1>
        <button v-on:click="diesplay = !diesplay">click</button>
    </div>
</template>

<script>
export default {
    name: "Ifelse",
    data() {
        return {
            diesplay: true,
        }
    }
}
</script>

<style>

</style>