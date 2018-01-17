<template>
  <div class="row justify-center">
    <q-card inline style="margin: 30px;">
      <q-card-title class="text-tertiary">
        Register
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="column xs-gutter">
          <q-field
            icon="perm identity"
            label="Username"
            helper="Choose an username"
          >
            <q-input 
              v-model="login"
              @blur="$v.login.$touch"
              :error="$v.login.$error"
              />
          </q-field>
          <q-field
            icon="mail"
            label="E-mail address"
            helper="Enter your e-mail address"
          >
            <q-input 
              type="email"
              v-model="email"
              @blur="$v.email.$touch"
              :error="$v.email.$error"
            />
          </q-field>
          <q-field
            icon="check"
            label="Confirm e-mail address"
            helper="Confirm your e-mail address"
          >
            <q-input 
              type="email"
              v-model="checkedEmail"
              @blur="$v.checkedEmail.$touch"
              :error="$v.checkedEmail.$error"
            />
          </q-field>
          <q-field
            icon="lock"
            label="Password"
            helper="Choose a password"
          >
            <q-input 
              type="password"
              v-model="password"
              @blur="$v.password.$touch"
              :error="$v.password.$error"
            />
          </q-field>
          <q-field
            icon="check"
            label="Confirm Password"
            helper="Confirm your password"
          >
            <q-input 
              type="password"
              v-model="checkedPassword"
              @blur="$v.checkedPassword.$touch"
              :error="$v.checkedPassword.$error"
            />
          </q-field>
          <div><small class="text-negative">{{errorMessage}}</small></div>
          <br/>
          <div class="row justify-around">
            <q-btn 
              icon="done"
              color="primary"
              @click="submit">
              Register 
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
import {
  required,
  email,
  sameAs,
  minLength
} from 'vuelidate/lib/validators'

import axios from 'axios'

export default {
  data () {
    return {
      login: '',
      password: '',
      email: '',
      checkedEmail: '',
      checkedPassword: '',
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
  validations: {
    login: {
      required
    },
    email: {
      required,
      email
    },
    checkedEmail: {
      sameAs: sameAs('email')
    },
    password: {
      required,
      minLength: minLength(6)
    },
    checkedPassword: {
      sameAs: sameAs('password')
    }
  },

  methods: {
    submit () {
      if (this.password === this.checkedPassword) {
        if (this.email === this.checkedEmail) {
          axios.post('http://localhost:3000/api/auth/register', {pseudo: this.login, password: this.password}).then(
            Response => {
              if (Response.status === 200) {
                this.$router.push('/login')
                Toast.create['positive']('You are now register')
              }
              else {
                this.errorMessage = Response.statusText
              }
            }).catch((e) => {
            this.errorMessage = 'An error occured. Please try later'
          })
        }
        else {
          this.errorMessage = 'The emails are not the same'
        }
      }
      else {
        this.errorMessage = 'The password are not the same'
      }
    }
  }
}
</script>

<style>
</style>
