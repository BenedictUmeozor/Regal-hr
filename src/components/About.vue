<script setup lang="ts">
import Container from './Container.vue'
</script>
<template>
  <section class="py-16 bg-custom-light">
    <Container
      class="grid lg:items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24"
    >
      <div class="py-10 px-14 border-2 border-[#C7A2FD] rounded-xl">
        <img
          src="/data-analysis.png"
          alt="data-analysis"
          class="object-contain w-full aspect-square"
        />
      </div>
      <div class="space-y-4">
        <h2 class="font-bold text-xl lg:text-3xl text-primary">
          About Our HR Saas Product
        </h2>
        <p>
          RegalHR is designed to streamline your HR operations,from recruitment
          and onboarding to performance management and employee engagement. With
          our intuitive platform, you can focus on what really matters –
          building a great team and a thriving company culture.
        </p>
      </div>
    </Container>
  </section>
</template>
