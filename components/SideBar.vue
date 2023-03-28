<template>
    <div class="flex flex-col ">
        <li class="logo mb-12 pl-10">
            <NuxtLink to="/"><Logo/></NuxtLink>
        </li>
        <li class="selected-item flex justify-end pr-10 pb-4 pt-4">
            <NuxtLink to="/dashboard">About</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/taskboard">About</NuxtLink>
        </li>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
li {
    list-style: none;
}

.selected-item {
    background: #0496FF;
    border-radius: 0 15px 15px 0;
}

</style>