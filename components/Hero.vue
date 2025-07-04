<template>
  <section class="mx-auto text-center py-12">
    <Heading type="h1"><slot name="heading" /></Heading>
    <Paragraph class="mt-2 mb-4 text-xl"><slot name="subheading" /></Paragraph>
    <slot name="action" />
  </section>
</template>
