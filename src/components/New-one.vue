<template>
    <h1>Hello Developer {{ email }} - {{ mobile }} - {{ getName() }}</h1>
    <span>{{ getSecond("Ali") }}</span>
    <h3>{{ getData().email }}</h3> <br>
    <h3>{{ getData().phone }}</h3>
</template>

<script>
export default {
    name:"Pages",
    data(){
        return{
            email:"test@cod6e.com",
            mobile:"0502879159",
            getName: function(){
                return "Moahmmed";  
            },
            getSecond:function(nameE){
                return nameE
            },
            getData(){
                return {
                    email:"test1@test.com",
                    phone:"0502879159",
                }
            }
        }
    }
}
</script>
<style>
    h1 {
        color: red;
    }
</style>