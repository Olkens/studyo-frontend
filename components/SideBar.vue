<template>
    <div class="flex flex-col pt-10">
            <NuxtLink class="logo mb-12 pl-10 " to="/"><Logo/></NuxtLink>
            <CustomLink class="flex justify-end pr-10 pb-4 pt-4 menu-link" to="/">About</CustomLink>
            <CustomLink class="flex justify-end pr-10 pb-4 pt-4 menu-link" to="/taskboard">About</CustomLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.menu-link {
    margin-top: 1rem;
    color: #fff;
}

.selected-item, .menu-link:hover {
    background: #0496FF;
    border-radius: 0 15px 15px 0;
}

</style>