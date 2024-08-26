<template>
    <q-layout view="hHh lpR lFf" >

    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar  style="height: 64px">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />

        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <!-- <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"> -->
          <q-icon name="engineering" class="q-mx-sm"></q-icon>
          <span class="q-ml-sm">Fieldservice</span>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click=storeAuth.logoutUser>
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar>
          <q-toolbar-title class="row items-center">
            <q-icon name="engineering" class="q-mx-sm"/>
            <span class="q-ml-sm">Fieldservice</span>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-item v-for="link in links1" :key="link.text" :to="link.to" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" :to="link.to" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useStoreAuth } from 'src/stores/storeAuth'

export default {
  name: 'GooglePhotosLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const storeAuth = useStoreAuth()

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    function logOut(){
      console.log('ll')
    }
    return {
      leftDrawerOpen,
      storeAuth,

      links1: [
        { icon: 'home', text: 'Home' ,to: '/'},
        { icon: 'analytics', text: 'Analytics',to: '/analytics' },
      ],
      links2: [
        { icon: 'settings', text: 'Settings',to: '/settings' },
        { icon: 'help', text: 'Help & Feedback' ,to: '/help' }
      ],
      toggleLeftDrawer,
      logOut
    }
  }
}
</script>

<style lang="sass">
.GPL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 35%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368

    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500

  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
