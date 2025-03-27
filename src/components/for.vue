<template>
    <div>
        <h1>Loop for</h1>
        <ul>
            <li v-for="program in programming" :key="program">{{program}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"For",
    data(){
        return {
            programming: ["php","css","Html","js","vue","Tailwindcss","Laravel","oop","PDO"]
        }
    }
}
</script>
<style>
</style>