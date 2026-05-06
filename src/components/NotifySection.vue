<script setup lang="ts">
import { ref } from 'vue'
import { subscribeToNewsletter } from '../services/subscription'

const email = ref('')
const loading = ref(false)
const submitted = ref(false)

async function handleSubscribe() {
  if (!email.value.includes('@')) return
  
  loading.value = true
  const success = await subscribeToNewsletter(email.value)
  loading.value = false
  
  if (success) {
    submitted.value = true
    email.value = ''
  }
}
</script>

<template>
  <div class="notify-section">
    <p v-if="!submitted" class="notify-label">Notify me when we launch</p>
    <div v-if="!submitted" class="notify-row">
      <input 
        v-model="email"
        type="email" 
        class="notify-input" 
        placeholder="Email address"
        :disabled="loading"
        @keyup.enter="handleSubscribe"
      >
      <button 
        class="notify-btn" 
        :disabled="loading || !email.includes('@')"
        @click="handleSubscribe"
      >
        {{ loading ? 'Sending...' : 'Notify Me' }}
      </button>
    </div>
    <p v-else class="notify-success">
      Thank you! We'll be in touch soon.
    </p>
  </div>
</template>
