<template>
  <div>
		<top></top>
    <main-page></main-page>
  </div>
</template>

<script>
import top from './header.vue';
import mainPage from './main.vue';

export default {
  components: {
    top,
    mainPage
  },
  data() {
    return {

    }
  }
}
</script>

<style>
	
</style>