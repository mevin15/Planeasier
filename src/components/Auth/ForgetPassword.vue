<template>
  <div class="row justify-center">
    <q-card inline style="margin: 30px;">
      <q-card-title class="text-tertiary">
        Reset Password
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="column xs-gutter">
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
          <br/>
          <div class="row justify-around">
            <q-btn 
              icon="done"
              color="primary"
              @click="submit">
              Reset
            </q-btn>
            <q-btn 
              icon="cancel"
              color="secondary"
              @click="$router.push('/login')">
              Cancel 
            </q-btn>
          </div>
        </div>  
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
