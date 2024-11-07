<script setup lang="ts">
import { FEATURES } from '@/lib/constants'
import Container from './Container.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { ref } from 'vue'
import { Navigation } from 'swiper/modules'

const swiperInstance = ref<SwiperType | null>(null)

const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}

const slidePrev = () => {
  swiperInstance.value?.slidePrev()
}

const slideNext = () => {
  swiperInstance.value?.slideNext()
}
</script>

<template>
  <section class="py-16 space-y-8">
    <h3 class="text-center font-bold text-xl lg:text-3xl mb-8">Key Features</h3>
    <Container class="hidden lg:flex flex-wrap justify-center gap-8 gap-y-8">
      <div
        v-for="feature in FEATURES"
        :key="feature.iconPath"
        class="border w-[30%] border-gray-300 hover:bg-custom-dark cursor-pointer group rounded p-6 space-y-4"
      >
        <header class="flex items-center justify-start">
          <img
            :src="feature.iconPath"
            :alt="feature.title"
            class="w-10 group-hover:hidden"
          />
          <img
            :src="feature.hoverPath"
            :alt="feature.title"
            class="w-10 hidden group-hover:block"
          />
        </header>
        <h4 class="text-xl font-semibold text-primary">{{ feature.title }}</h4>
        <p class="group-hover:text-white">{{ feature.description }}</p>
      </div>
    </Container>
    <Container class="lg:hidden space-y-6">
      <div>
        <swiper
          @swiper="onSwiper"
          :modules="[Navigation]"
          :slides-per-view="1"
          :space-between="10"
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
        >
          <swiper-slide v-for="feature in FEATURES" :key="feature.title">
            <div
              class="border border-gray-300 cursor-pointer rounded p-6 flex flex-col gap-4 aspect-[6/4] w-full"
            >
              <header class="flex items-center justify-start">
                <img
                  :src="feature.iconPath"
                  :alt="feature.title"
                  class="w-10"
                />
              </header>
              <h4 class="text-xl font-semibold text-primary">
                {{ feature.title }}
              </h4>
              <p>{{ feature.description }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="flex items-center justify-center gap-4">
        <button
          @click="slidePrev"
          type="button"
          aria-label="Previous slide"
          class="p-2 rounded-full border hover:bg-gray-100"
        >
          <ChevronLeft class="w-6 h-6" />
        </button>
        <button
          @click="slideNext"
          type="button"
          aria-label="Next slide"
          class="p-2 rounded-full border hover:bg-gray-100"
        >
          <ChevronRight class="w-6 h-6" />
        </button>
      </div>
    </Container>
  </section>
</template>
