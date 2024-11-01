<script setup lang="ts">
import Container from './Container.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { ref } from 'vue'
import { Navigation } from 'swiper/modules'
import { RECOMMENDATIONS } from '@/lib/constants'

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
  <section class="py-16 text-center">
    <Container>
      <h3 class="text-center font-bold text-xl lg:text-3xl mb-8">
        Trusted by the fastest growing startups and companies
      </h3>
      <p class="mb-12">
        10k+ startups and companies choose RegalHR. Hear What They Have to Say
        abou Us
      </p>
      <div class="hidden lg:grid grid-cols-4 gap-4">
        <div
          v-for="item in RECOMMENDATIONS"
          :key="item.avatarPath"
          class="relative text-center space-y-4 p-6 bg-[#ECDFFF] rounded-md"
        >
          <div
            class="h-14 w-14 rounded-full flex items-center justify-center border-2 border-black p-1 mx-auto"
          >
            <img
              :src="item.avatarPath"
              alt="avatar"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
          <p class="md:text-sm">{{ item.firstText }}</p>
          <p class="md:text-sm">{{ item.secondText }}</p>
        </div>
      </div>
      <div class="lg:hidden">
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
          <swiper-slide v-for="item in RECOMMENDATIONS" :key="item.avatarPath">
            <div
              class="relative text-center space-y-4 p-6 bg-[#ECDFFF] rounded-md"
            >
              <div
                class="h-14 w-14 rounded-full flex items-center justify-center border-2 border-black p-1 mx-auto"
              >
                <img
                  :src="item.avatarPath"
                  alt="avatar"
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
              <p class="md:text-sm">{{ item.firstText }}</p>
              <p class="md:text-sm">{{ item.secondText }}</p>
            </div>
          </swiper-slide>
        </swiper>
        <div class="flex items-center mt-8 justify-center gap-4">
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
      </div>
    </Container>
  </section>
</template>
