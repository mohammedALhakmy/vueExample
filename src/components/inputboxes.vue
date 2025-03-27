<template>
    <div>
        <br>
        <input type="text">
        <h2>Welcome mohammed </h2>

        <label for="">Cricket</label>
        <input type="checkbox" value="Cricket" v-model="sports">
        &nbsp;

        <label for="">Football</label>
        <input type="checkbox" value="Football" v-model="sports">
        &nbsp;

        <label for="">Hockey</label>
        <input type="checkbox" value="Hockey" v-model="sports">
        &nbsp;

        <label for="">player 1</label>
        <input type="radio" value="player 1" v-model="player">
        &nbsp;

        <label for="">player 2</label>
        <input type="radio" value="player 2" v-model="player">
        &nbsp;
        <h3>Selected Soprts : {{ sports }}</h3>
        <h3>Selected Player : {{ player }}</h3>
    </div>
</template>
<script>
export default {
    name:"InputBoxes",
    data() {
        return {
            sports:[],
            player:[],
        }
    },
}
</script>
<style>

</style>