<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Pages from './components/New-one.vue';
import InputBoxes from './components/inputboxes.vue';
import Ifelse from './components/if-else.vue';
import For from './components/for.vue';


</script>

<template>
  <header>
    
    <div class="wrapper"> 
      <Pages />
      <InputBoxes />
      <Ifelse />
      <for />
    </div>
  </header>
 
  <nav>
    <RouterLink to="/">الرئيسية</RouterLink> |
    <RouterLink to="/home">حول</RouterLink>
  </nav>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
