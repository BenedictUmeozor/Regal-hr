<script setup lang="ts">
import { cn } from '@/lib/utils'
import Container from './Container.vue'
import { Button } from './ui/button'
</script>

<template>
  <section class="bg-custom-dark text-white py-8 lg:py-16">
    <Container
      class="grid lg:items-center grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-24"
    >
      <div>
        <h1
          class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-wide lg:leading-normal"
        >
          Revolutionize Your HR Management with Ease
        </h1>
        <p class="mb-8">
          Empower your team with our all-in-one HR SaaS solution. Simplify
          processes, enhance productivity, and foster a happier workplace.
        </p>
        <div class="flex items-center gap-1 md:gap-2 lg:gap-4 lg:max-w-xs">
          <Button
            :class="cn('flex-1 hover:border-input border border-transparent')"
            >Request a Demo</Button
          >
          <Button
            :class="
              cn('flex-1 bg-transparent hover:bg-primary hover:text-white')
            "
            variant="outline"
            >Take the Product Tour</Button
          >
        </div>
      </div>
      <div class="relative">
        <div
          class="hidden lg:block absolute h-full w-full -top-10 -left-20 border-2 border-primary rounded-xl"
        ></div>
        <div class="aspect-square relative z-10">
          <img
            src="/hero.png"
            alt="hero image"
            class="w-full object-cover rounded h-full"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
