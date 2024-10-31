<script setup lang="ts">
import { FEATURES } from '@/lib/constants'
import Container from './Container.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <section class="py-16 space-y-8">
    <h3 class="text-center font-bold text-xl lg:text-3xl mb-8">Key Features</h3>
    <Container class="hidden lg:flex flex-wrap justify-center gap-8 gap-y-8">
      <div
        v-for="feature in FEATURES"
        :key="feature.iconPath"
        class="border w-[30%] border-gray-300 rounded p-6 space-y-4"
      >
        <header class="flex items-center justify-start">
          <img :src="feature.iconPath" :alt="feature.title" class="w-10" />
        </header>
        <h4 class="text-xl font-semibold text-primary">{{ feature.title }}</h4>
        <p>{{ feature.description }}</p>
      </div>
    </Container>
    <Container class="lg:hidden">
      <swiper
        :slides-per-view="1"
        :navigation="true"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
        class="feature-swiper"
      >
        <swiper-slide v-for="feature in FEATURES" :key="feature.title">
          <div class="border border-gray-300 rounded p-6 space-y-4">
            <header class="flex items-center justify-start">
              <img :src="feature.iconPath" :alt="feature.title" class="w-10" />
            </header>
            <h4 class="text-xl font-semibold text-primary">
              {{ feature.title }}
            </h4>
            <p>{{ feature.description }}</p>
          </div>
        </swiper-slide>
      </swiper>
      <div value="flex items-center justify-center gap-4">
        <button>
          <ChevronLeft class="w-12 h-12" />
        </button>
        <button>
          <ChevronRight class="w-12 h-12" />
        </button>
      </div>
    </Container>
  </section>
</template>
