<script setup lang="ts">
import Container from './Container.vue'
import { Button } from './ui/button'
</script>

<template>
  <section class="lg:py-16 lg:bg-custom-light">
    <Container>
      <div class="bg-custom-dark rounded-lg p-8 lg:p-16 text-white">
        <div class="lg:max-w-md mx-auto space-y-8 text-center">
          <h4 class="font-semibold text-xl md:text-2xl">
            Ready to Transform Your HR Management?
          </h4>
          <p>
            Join the thousands of companies that trust RegalHR- to manage their
            HR needs. Sign up today and experience the difference.
          </p>
          <Button class="font-medium hover:bg-purple-500"
            >Start for free</Button
          >
        </div>
      </div>
    </Container>
  </section>
</template>
