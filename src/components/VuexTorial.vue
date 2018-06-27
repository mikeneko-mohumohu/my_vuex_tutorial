<template>
  <div id="app">
    <vue-header></vue-header>
    <time-line></time-line>
  </div>
</template>

<script>
import VueHeader from './Header'
import TimeLine from './page/TimeLine'

export default {
  components: {
    VueHeader,
    TimeLine
  }
}
</script>