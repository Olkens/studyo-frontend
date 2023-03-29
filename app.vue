<template>
  <div class="h-[100vh] bg-teal-600 overflow-auto flex flex-row gap-9">
    <div>
      <SideBar />
    </div>
    <div class="container p-10">
      <MainView />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.container {
  background-color: #fff;
  max-width: 1920px;
  border-radius: 45px 0 0 45px;
}
</style>