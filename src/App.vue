<script setup lang="ts">
import CountdownTimer from './components/CountdownTimer.vue'
import NotifySection from './components/NotifySection.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <div class="main">
    <p class="eyebrow">Est. 1902 · Coming Soon</p>

    <h1 class="school-name">Hapugala<br>College Galle</h1>
    <p class="school-location">Galle · Southern Province, Sri Lanka</p>

    <div class="divider"></div>

    <p class="message">
      Our new website is under construction.<br>
      Something thoughtful is on its way — <em>Let's Go Forward.</em>
    </p>

    <CountdownTimer />
    
  </div>

  <PageFooter />
</template>
