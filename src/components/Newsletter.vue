<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'
</script>

<template>
  <section class="py-16 bg-custom-light">
    <div
      class="max-w-6xl w-[90%] mx-auto text-center py-8 lg:py-12 px-8 rounded-md bg-[#381669] text-white"
    >
      <div class="lg:max-w-lg mx-auto">
        <h4 class="font-bold text-xl lg:text-3xl mb-6 lg:mb-8">
          Stay Updated with the Latest HR Trends
        </h4>

        <p class="mb-12 font-light">
          Subscribe to our newsletter for tips, insights, and updates on HR best
          practices and our latest features.
        </p>
        <div class="relative">
          <Input
            placeholder="Enter your mail"
            :class="cn('w-full text-black placeholder:text-xs py-6')"
          />
          <Button
            class="absolute top-1/2 -translate-y-1/2 right-2 bg-black text-white font-semibold hover:bg-black/80"
            >Subscribe</Button
          >
        </div>
      </div>
    </div>
  </section>
</template>
