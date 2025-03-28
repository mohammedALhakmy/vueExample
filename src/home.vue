<template>
    <div class="">Home Page</div>

    <nav>
        <RouterLink to="/">الرئيسية</RouterLink> |
        <RouterLink to="/home">حول</RouterLink>
    </nav>

    <main>
        <router-view></router-view>
        <table>
            <tr v-for="item in info" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.first_name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.last_name }}</td>
                <td><img :src="item.avatar" alt=""></td>
            </tr>
        </table>
    </main>
</template>
<script>
import axios from "axios";
export default {
    name:"Home",
    data() {
        return {
            info:[],
        }
    },
    async mounted() {
        let information = await axios.get("https://reqres.in/api/users?page=1");
        console.log("Api Data",information.data.data)
        this.info = information.data.data
        console.log(this.info);
    },
}
</script>
<style>
table{
    width: 100%;
}
td,th{
    border:1px solid #ddd;
    text-align: left;
    padding: 8px;
}
tr:nth-child(even){
    background-color: #ddd;
    color: #000000;
}
</style>