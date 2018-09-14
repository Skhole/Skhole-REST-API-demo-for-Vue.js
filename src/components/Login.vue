<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login to Skhole</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="person" name="username" id="username" label="Login" type="text" v-model="username"></v-text-field>
          <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="submit">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data: function() {
    return  {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    submit : function(e) {
      if (this.username && this.password) {
        const payload = {
          username: this.username,
          password: this.password
        }
        this.login(payload);
      }
      e.preventDefault();
    }
  },
  computed: mapGetters(['getToken'])
};
</script>
