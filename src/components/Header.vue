<script setup lang="ts">
import { NAVLINKS } from '@/lib/constants'
import Container from './Container.vue'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { MenuIcon, XIcon } from 'lucide-vue-next'
import { ref, watchEffect } from 'vue'
import MobileNav from './MobileNav.vue'

const open = ref(false)
const toggleOpen = () => (open.value = !open.value)

const handleClose = () => {
  open.value = false
}

watchEffect(() => {
  if (open.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }
})
</script>

<template>
  <div
    v-if="open"
    class="fixed lg:hidden top-0 left-0 h-screen w-full bg-black/50 backdrop-blur z-[99]"
  ></div>
  <header class="bg-custom-dark py-4 text-white relative z-[999999]">
    <Container class="flex items-center justify-between">
      <a
        href="#"
        class="text-xl font-medium md:text-4xl hover:text-custom-light"
      >
        Regal HR
      </a>
      <nav class="hidden lg:flex items-center justify-center flex-1">
        <ul class="flex items-center gap-8">
          <li v-for="link in NAVLINKS" :key="link">
            <a href="#" class="hover:text-custom-light">{{ link }}</a>
          </li>
        </ul>
      </nav>
      <div class="hidden lg:flex items-center gap-2">
        <Button variant="ghost" :class="cn('text-base')">Support</Button>
        <Button size="lg" :class="cn(' hover:bg-purple-500 rounded-full')"
          >Sign in</Button
        >
      </div>
      <button class="lg:hidden" variant="ghost" @click.stop="toggleOpen">
        <XIcon v-if="open" class="w-8 h-8" />
        <MenuIcon v-else class="w-8 h-8" />
      </button>
    </Container>
    <MobileNav v-if="open" @close="handleClose()" :open="open" />
  </header>
</template>
