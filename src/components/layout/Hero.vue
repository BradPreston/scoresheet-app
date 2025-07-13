<script setup lang="ts">
import Button from '@/components/ui/Button.vue';

defineProps<{
	title: string;
	subtitle?: string;
	action?: {
		text: string;
		link: string;
    style?: 'btn-primary' | 'btn-secondary';
	};
}>();
</script>

<template>
	<section class="hero">
		<h1 class="hero-title">{{ title }}</h1>
		<p class="hero-subtitle" v-if="subtitle">{{ subtitle }}</p>
		<Button :style="action.style ? action.style : 'btn-primary'" v-if="action" :text="action.text" :link="action.link" />
	</section>
</template>

<style scoped>
.hero {
	text-align: center;
}

.hero-title {
	color: var(--color-heading);
	font-weight: 900;
	font-size: 2.5rem;
	margin-bottom: 1rem;
  line-height: 2.7rem;
}

.hero-subtitle {
	color: var(--color-body);
	font-size: 1.25rem;
	margin-bottom: 1rem;
  line-height: 1.4rem;
}

@media screen and (min-width: 640px) {
  .hero-title {
    font-size: 3rem;
    line-height: 3.5rem;
  }
  .hero-subtitle {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
}
</style>
