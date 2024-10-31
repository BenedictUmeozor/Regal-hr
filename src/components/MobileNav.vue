<script lang="ts" setup>
import { NAVLINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { onUnmounted, useTemplateRef } from 'vue'
import { Button } from './ui/button'
import Container from './Container.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const props = defineProps<{ open: boolean }>()

const navRef = useTemplateRef('navRef')

const handleClickOutside = (event: MouseEvent) => {
  if (
    navRef.value &&
    !navRef.value.contains(event.target as Node) &&
    props.open
  ) {
    emit('close')
  }
}

const closeNav = () => {
  emit('close')
}

document.addEventListener('click', handleClickOutside)

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <section
    ref="navRef"
    class="lg:hidden absolute top-full w-full bg-custom-dark z-[999999]"
  >
    <Container>
      <nav class="py-4 space-y-4">
        <ul class="space-y-4">
          <li v-for="link in NAVLINKS" :key="link">
            <a @click="closeNav" href="#" class="hover:text-custom-light">{{
              link
            }}</a>
          </li>
          <li>
            <a href="#" @click="closeNav" class="hover:text-custom-light"
              >Support</a
            >
          </li>
        </ul>

        <Button
          @click="closeNav"
          :class="cn('text-base hover:bg-purple-500 w-full')"
          >Sign in</Button
        >
      </nav>
    </Container>
  </section>
</template>
