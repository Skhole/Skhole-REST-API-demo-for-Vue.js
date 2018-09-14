<template>
  <v-container grid-list-md text-xs-center>

    <v-layout row wrap>
      <v-flex>
        <h1>Hello, {{getName}}!</h1>
        <h2>Here's your courses</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="course in allCourses" :key="course.name" xs4>
        <v-card dark color="primary">
          <v-card-text class="px-0">{{course.name}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: mapGetters(['allCourses', 'getName']),
  methods: mapActions(['fetchCourses']),
  created() {
    this.fetchCourses();
  }
};
</script>

<style scoped>
h1, h2 {
  margin-bottom: 30px;
}
</style>
