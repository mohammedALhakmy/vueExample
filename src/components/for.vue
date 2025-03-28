<template>
    <div>
        <h1>Loop for</h1>
        <ul>
            <li v-for="program in programming" :key="program">{{program}}</li>
        </ul>
        <ul>
            <li v-for="login in user" :key="login">
                <Props :data="login" />
            </li>
        </ul>
    </div>
    <ChildComponents name="test child 000" />
    <Props name="test child 000" />
</template>
<script>
import ChildComponents from './child.vue';
import Props from './props.vue';
export default {
    name:"For",
    data(){
        return {
            programming: ["php","css","Html","js","vue","Tailwindcss","Laravel","oop","PDO"],
            user:[
                { name:"mohammed",email:"mohammed@mohammed.com",phone:"0502879159"},
                { name:"ali",email:"ali@ali.ali.com",phone:"0502879155"},
                { name:"osama",email:"osama@osama.com",phone:"0502879156"},
                { name:"omar",email:"omar@omar.com",phone:"0502879157"},
                { name:"naser",email:"naser@naser.com",phone:"0502879158"}
            ]
        }
    },
    components: { ChildComponents, Props }
}
</script>
<style>
</style>