<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <button class="btn btn-primary" @click="incrementPayload">Increment Payload</button>
    <button class="btn btn-primary" @click="asyncIncrement">Async Increment</button>
    <hr>
    <input type="text" v-model="value">
    {{value}}
  </div>
</template>

<script>
export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value
      },
      set(value) {
        this.$store.commit('updateValue', value)
      }
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
    incrementPayload() {
      this.$store.commit('incrementPayload', {
        amount: 100
      })
    },
    asyncIncrement() {
      this.$store.dispatch('asyncIncrement')
    }
  }
}
</script>