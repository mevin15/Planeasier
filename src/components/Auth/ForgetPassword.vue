<template>
  <div>
    <q-card inline>
      <q-card-title>
        Reset Password
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-field
          icon="mail"
          label="Email"
          helper="Enter your email address"
        >
          <q-input 
            type="email"
            v-model="email"
          />
        </q-field>
        <q-btn 
          icon="done"
          color="primary"
          @click="submit">
          Reset Password 
        </q-btn>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardSeparator,
  QCardMain,
  QField,
  QInput,
  QBtn,
  Toast
} from 'quasar'

export default {
  data () {
    return {
      email: ''
    }
  },
  components: {
    QCard,
    QCardMain,
    QCardSeparator,
    QCardTitle,
    QField,
    QInput,
    QBtn
  },
  methods: {
    submit () {
      // send mail function
      this.$router.push('/login')
      Toast.create['positive']('We have send you an email')
    }
  }
}
</script>

<style>
</style>
