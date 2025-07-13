<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
	text: string;
	link: string;
  style: 'btn-primary' | 'btn-secondary';
}>();
</script>

<template>
	<RouterLink :to="link" :class="'btn ' + style">{{ text }}</RouterLink>
</template>

<style scoped>
.btn {
	display: inline-block;
	padding: 0.5rem 1rem;
	background-color: var(--color-text);
	color: white;
	text-decoration: none;
	border-radius: 4px;
  border: 1px solid var(--color-text);
}

.btn-primary {
  background-color: var(--vt-c-indigo);
}

.btn-secondary {
  background-color: var(--vt-c-indigo-soft);
  color: var(--color-text);
}
</style>
