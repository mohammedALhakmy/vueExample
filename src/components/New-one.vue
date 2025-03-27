<template>
    <h1>Hello Developer {{ email }} - {{ mobile }} - {{ getName() }}</h1>
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
            }
        }
    }
}
</script>
<style>
h1{
    color:red;
}
</style>