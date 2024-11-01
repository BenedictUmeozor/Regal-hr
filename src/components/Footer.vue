<script setup lang="ts">
import {
  COMPANYLINKS,
  CONTACTLINKS,
  LEGALLINKS,
  PRODUCTLINKS,
  RESOURCELINKS,
} from '@/lib/constants'
import Container from './Container.vue'
</script>

<template>
  <footer class="bg-custom-dark pt-16 pb-4 text-white space-y-8">
    <a
      href="#"
      class="text-xl font-bold md:text-3xl block text-center hover:text-custom-light"
      >Regal HR</a
    >
    <Container class="space-y-12">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div class="space-y-4">
          <h5 class="font-semibold text-lg">Company</h5>
          <ul class="space-y-4">
            <li v-for="link in COMPANYLINKS" :key="link">
              <a href="#" class="font-light hover:text-custom-light">{{
                link
              }}</a>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h5 class="font-semibold text-lg">Product</h5>
          <ul class="space-y-4">
            <li v-for="link in PRODUCTLINKS" :key="link">
              <a href="#" class="font-light hover:text-custom-light">{{
                link
              }}</a>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h5 class="font-semibold text-lg">Resources</h5>
          <ul class="space-y-4">
            <li v-for="link in RESOURCELINKS" :key="link">
              <a href="#" class="font-light hover:text-custom-light">{{
                link
              }}</a>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h5 class="font-semibold text-lg">Contact</h5>
          <ul class="space-y-4">
            <li v-for="link in CONTACTLINKS" :key="link">
              <a href="#" class="font-light hover:text-custom-light">{{
                link
              }}</a>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h5 class="font-semibold text-lg">Legal</h5>
          <ul class="space-y-4">
            <li v-for="link in LEGALLINKS" :key="link">
              <a href="#" class="font-light hover:text-custom-light">{{
                link
              }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row gap-y-4 justify-between items-center"
      >
        <div class="flex items-center justify-center gap-4">
          <a href="#">
            <img src="/x.svg" alt="x" class="w-8" />
          </a>
          <a href="#">
            <img src="/instagram.svg" alt="instagram" class="w-8" />
          </a>
          <a href="#">
            <img src="/linkedin.svg" alt="linkedin" class="w-8" />
          </a>
          <a href="#">
            <img src="/facebook.svg" alt="facebook" class="w-8" />
          </a>
        </div>
        <p>© RegalHR 2024 , All rights reserved.</p>
      </div>
    </Container>
  </footer>
</template>
