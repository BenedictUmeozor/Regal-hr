<script setup lang="ts">
import Container from './Container.vue'
</script>

<template>
  <section class="py-16">
    <h3 class="text-center font-bold text-xl lg:text-3xl mb-8">
      Trusted by companies of all sizes
    </h3>
    <Container class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:max-w-6xl">
      <div><img src="/spendflow.png" alt="spendflow" class="mx-auto" /></div>
      <div><img src="/cuebiq.png" alt="cuebiq" class="mx-auto" /></div>
      <div><img src="/airmeet.png" alt="airmeet" class="mx-auto" /></div>
      <div><img src="/placeiq.png" alt="placeiq" class="mx-auto" /></div>
    </Container>
  </section>
</template>
