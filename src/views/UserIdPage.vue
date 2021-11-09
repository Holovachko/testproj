<template>
  <div>
      <my-button @click="reload"><router-link to="/">Get back to users</router-link></my-button>
    <h1>Page of user {{ $route.params.id }}</h1>
    <p>First Name : {{ getUsers[$route.params.id - 1].first_name }}</p>
    <p>Last name : {{ getUsers[$route.params.id - 1].last_name }}</p>
    <p>Email : {{ getUsers[$route.params.id - 1].email }}</p>
    <p>Gender : {{ getUsers[$route.params.id - 1].gender }}</p>
    <p>IP address : {{ getUsers[$route.params.id - 1].ip_address }}</p>
    <div></div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton"
import { mapGetters } from "vuex";
export default {
    methods: {
        reload() {
      location.reload();
            
        }
    },
  computed: {
    ...mapGetters(["getUsers", "getAuthStatus"]),
    isUserAuth() {
      if (!this.getAuthStatus) {
        $router.go("/");
      }
    },
  },
  mounted() {
    if (!this.getAuthStatus) {
      $router.push("/");
    }
  },
};
</script>

<style scoped>
</style>