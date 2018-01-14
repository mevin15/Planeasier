<template>
  <div>
    <q-card inline>
      <q-card-title>
        Log in
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-field
          icon="perm identity"
          label="Username"
        >
          <q-input v-model="login" />
        </q-field>
        <q-field
          icon="lock"
          label="Password"
        >
          <q-input 
            type="password"
            v-model="password"
          />
        </q-field>
        <div>{{errorMessage}}</div>
        <q-btn 
          icon="done"
          color="primary"
          @click="submit">
          Log in 
        </q-btn>
        <router-link to="/forgetPassword">I forgot my password</router-link>
        <router-link to="/register">Register</router-link>
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
  QBtn
} from 'quasar'
import axios from 'axios'

export default {
  data () {
    return {
      login: '',
      password: '',
      errorMessage: ''
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
      axios.post('http://localhost:3000/api/auth/login', {pseudo: this.login, password: this.password}).then(
        Response => {
          if (Response.status === 200) {
            this.$router.push('/home')
          }
          else {
            this.errorMessage = Response
          }
        }
      ).catch((error) => {
        this.errorMessage = error.response ? error.response.data : 'An error occured. Please try later'
      })
    }
  }
}
</script>

<style>
</style>
