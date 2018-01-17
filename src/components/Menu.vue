<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
  
        PlanEasier
        <div slot="subtitle">Everything is possible</div>
      </q-toolbar-title>
      <router-link to="/login"><p class="caption" style="color:white;"><small>Log out</small></p></router-link>
    </q-toolbar>

    <div slot="left">
      <div style="background-color: grey;">
      <div id="avatar">
      </div>
      {{pseudo}}
      <q-btn
        flat
      >
        <q-icon name="settings" />
      </q-btn>
      </div>
      
      <q-list no-border link inset-delimiter>
        <q-item @click="$router.push('/home')">
          <q-item-side icon="add" />
          <q-item-main label="New Project"/>
        </q-item>
        <q-item @click="$router.push('/home')">
          <q-item-side icon="work" />
          <q-item-main label="My Projects"/>
        </q-item>
        <q-item @click="$router.push('/home')">
          <q-item-side icon="alarm" />
          <q-item-main label="What are your plans for today ?"/>
        </q-item>
        <q-item @click="$router.push('/home')">
          <q-item-side icon="dashboard" />
          <q-item-main label="My Planning"/>
        </q-item>
      </q-list>
    </div>
    <router-view/>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {
      pseudo: 'mevin'
    }
  }
}
</script>

<style lang="stylus">
#avatar {
  background-image: url('../statics/quasar-logo.png');
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
}
</style>
