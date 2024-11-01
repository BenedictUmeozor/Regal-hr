<script setup lang="ts">
import { cn } from '@/lib/utils'
import Container from './Container.vue'
import { Button } from './ui/button'
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <section class="bg-custom-dark text-white py-8 lg:py-16">
    <Container
      class="grid lg:items-center grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-24"
    >
      <div>
        <h1
          class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 tracking-wide lg:leading-[76px]"
        >
          Revolutionize Your HR Management with Ease
        </h1>
        <p class="mb-8 lg:text-xl">
          Empower your team with our all-in-one HR SaaS solution. Simplify
          processes, enhance productivity, and foster a happier workplace.
        </p>
        <div
          class="flex flex-col md:flex-row items-center gap-4 md:gap-2 lg:gap-4 lg:max-w-xs"
        >
          <Button
            :size="isLargeScreen ? 'lg' : 'default'"
            :class="cn('max-md:w-full flex-1 hover:bg-purple-500')"
            >Request a Demo</Button
          >
          <Button
            :size="isLargeScreen ? 'lg' : 'default'"
            :class="
              cn(
                'max-md:w-full flex-1 bg-transparent hover:bg-primary hover:text-white',
              )
            "
            variant="outline"
            >Take the Product Tour</Button
          >
        </div>
      </div>
      <div class="relative">
        <div
          class="hidden lg:block absolute h-full w-full -top-10 -left-12 border-2 border-custom-light rounded-xl"
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
