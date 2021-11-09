<template>
  <div class="home">
    <div v-if="isAuth">
      <login-form @checkEmail="isRegistrated" />
    </div>
    <div v-else>
      <div>
        <header>
          <div>
            <h2>You logined as: {{ authEmail }}</h2>
          </div>
          <div>
          <div>
            <my-button @click="logout">Logout</my-button>
          </div>
          <div>
            <my-button @click="showDialog">Create new user</my-button>
          </div>
          </div>
        </header>
        <user-form v-model:show="dialogVisible" />
        <user-list />
      </div>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import loginForm from "@/components/LoginForm";
import MyButton from "@/components/UI/MyButton";
import { mapGetters } from "vuex";
import UserForm from '@/components/UserForm';

export default {
  name: "Home",
  data() {
    return {
      authEmail: localStorage.getItem("userEmail"),
      dialogVisible: false,
      
    };
  },
  methods: {
    isRegistrated(mail, localUsers) {
      localUsers = this.getUsers;
      for (let i = 0; i < localUsers.length; i++) {
        if (mail == localUsers[i].email) {
          console.log(`the state was wrote in local storage`);
          localStorage.setItem("userEmail", localUsers[i].email);
          break;
        }
      }

      if (localStorage.getItem("userEmail") != mail) {
        localStorage.clear();
        console.log(`email is invalid`);
      }
      location.reload();
    },

    logout() {
      localStorage.clear();
      location.reload();
    },
    showDialog(){
      this.dialogVisible = true
    }
  },
  components: {
    loginForm,
    MyButton,
    UserList,
    UserForm,
  },
  computed: {
    ...mapGetters(["getUsers" , "getAuthStatus"]),

    isAuth() {
      if (localStorage.getItem("userEmail") == undefined) {
        return !this.getAuthStatus;
      } else {
        return this.getAuthStatus;
      }
    },
    
  },
};
</script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
