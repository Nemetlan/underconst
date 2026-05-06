<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from 'vue'

const target = new Date('2026-05-15T14:00:00')
const time = reactive({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const flipping = reactive({ days: false, hours: false, minutes: false, seconds: false })

let ticker: ReturnType<typeof setInterval> | null = null
let prev = -1

function flip(key: keyof typeof flipping) {
  flipping[key] = false
  // force reflow so CSS animation retriggers
  void document.body.offsetHeight
  flipping[key] = true
  setTimeout(() => { flipping[key] = false }, 280)
}

function tick() {
  const diff = Math.max(0, target.getTime() - Date.now())
  const s = Math.floor(diff / 1000)
  if (s === prev) return
  prev = s

  const nd = Math.floor(diff / 86400000)
  const nh = Math.floor((diff % 86400000) / 3600000)
  const nm = Math.floor((diff % 3600000) / 60000)
  const ns = Math.floor((diff % 60000) / 1000)

  if (nd !== time.days) { time.days = nd; flip('days') }
  if (nh !== time.hours) { time.hours = nh; flip('hours') }
  if (nm !== time.minutes) { time.minutes = nm; flip('minutes') }
  if (ns !== time.seconds) { time.seconds = ns; flip('seconds') }
}

const pad = (n: number) => String(n).padStart(2, '0')

onMounted(() => {
  tick()
  ticker = setInterval(tick, 250)
})

onUnmounted(() => {
  if (ticker) clearInterval(ticker)
})
</script>

<template>
  <div class="countdown">
    <div class="cd-block">
      <span class="cd-num" :class="{ tick: flipping.days }">{{ pad(time.days) }}</span>
      <span class="cd-label">Days</span>
    </div>
    <span class="cd-sep" aria-hidden="true">·</span>
    <div class="cd-block">
      <span class="cd-num" :class="{ tick: flipping.hours }">{{ pad(time.hours) }}</span>
      <span class="cd-label">Hours</span>
    </div>
    <span class="cd-sep" aria-hidden="true">·</span>
    <div class="cd-block">
      <span class="cd-num" :class="{ tick: flipping.minutes }">{{ pad(time.minutes) }}</span>
      <span class="cd-label">Mins</span>
    </div>
    <span class="cd-sep" aria-hidden="true">·</span>
    <div class="cd-block">
      <span class="cd-num" :class="{ tick: flipping.seconds }">{{ pad(time.seconds) }}</span>
      <span class="cd-label">Secs</span>
    </div>
  </div>
</template>
