<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout :align-center="!isLoggedIn" justify-center>
          <Login v-if="!isLoggedIn" />
          <div v-else>
            <v-btn color="error" @click="logout" style="float:right;">Logout</v-btn>
            <Courses />
          </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/Login';
import Courses from './components/Courses';

import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    Login,
    Courses
  },
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['logout']),
};
</script>

<style>
body {
  font-family: Roboto;
}
</style>
