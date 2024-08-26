<template>
  <q-page class="row wrap items-center ">
      <div class="col-6 column items-center">
        <q-icon name="engineering" size="20em" color="primary"/>
      </div>

      <div class="col-6 column q-pa-md">
        <h2 >Login</h2>
        <q-form @submit="storeAuth.loginUser(credentials)"class="column q-gutter-y-md" >

          <q-input v-model="credentials.email" filled type="email" hint="Email"
            lazy-rules :rules="[ val => val && val.length > 0 || 'Please enter email adres']"/>

          <q-input v-model="credentials.password" filled :type="isPwd ? 'password' : 'text'" hint="Password"
            lazy-rules :rules="[ val => val && val.length > 0 || 'Please enter your password']">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-toggle v-model="rememberMe" label="remember me?" />
          <q-btn label="Login" type="submit"/>
        </q-form>
        <div class="q-my-sm">
          <p>Don't have an account? <a @click="createAccount = !createAccount" class="text-primary">Create one</a></p>
        </div>
        <q-btn class="q-my-sm">Login with google</q-btn>

      </div>

  </q-page>

  <q-dialog v-model="createAccount" persistent>
      <q-card style="min-width: 350px" class="q-pa-md">
        <q-form @submit="storeAuth.registerUser(credentialsCreateAccount)" class="column q-gutter-y-md" >
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Create account</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
         </q-card-section>
          <q-input v-model="credentialsCreateAccount.email" filled type="email" hint="Email"
            lazy-rules :rules="[ val => val && val.length > 0 || 'Please enter email adres']"/>

          <q-input v-model="credentialsCreateAccount.password" filled :type="isPwd ? 'password' : 'text'" hint="Password"
            lazy-rules :rules="[ val => val && val.length > 0 || 'Please enter your password']">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

        <q-btn label="Create" type="submit"/>
        </q-form>
      </q-card>
    </q-dialog>
</template>

<script setup>

  /*
    imports
  */

    import { ref, reactive } from 'vue'
    import { useQuasar } from 'quasar'
    import { useStoreAuth } from 'src/stores/storeAuth'

  /*
    quasar
  */

    const $q = useQuasar()

    let isPwd = ref(true)
    let rememberMe = ref(false)
    const credentials = reactive({
      email: '',
      password: ''
    })
    let createAccount = ref(false)
    const credentialsCreateAccount = reactive({
      email: '',
      password: ''
    })
  /*
    stores
  */

    const storeAuth = useStoreAuth()


</script>
