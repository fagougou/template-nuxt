<template>
  <div class="container">
    <pre>{{ $store.state }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'default-d'
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFF;
}
</style>
