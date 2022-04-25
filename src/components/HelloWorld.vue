<script setup>
import { ref } from 'vue';


const count = ref(1)
const add = () => count.value++

</script>

<template>
<div>Times clicked: {{ count }} </div>
<button @click="add">click</button>
</template>

<style>
</style>
