<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog_content" @click.stop>
      <h2>Create new user</h2>
      <label>
        write Email: <br />
        <input type="text" v-model="userMail"/>
      </label>
      <label>
        write first name: <br />
        <input type="text" v-model="userFirstName"/>
      </label>
      <label>
        write last name: <br />
        <input type="text" v-model="userLastName"/>
      </label>
      <label>
        write gender: <br />
        <input type="text" v-model="userGender"/>
      </label>
      <label>
        write IP address: <br />
        <input type="text" v-model="userIpAddress"/>
      </label>
      <br />
      <my-button @click="addUser"> Create user </my-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MyButton from "@/components/UI/MyButton";
export default {
  name: "user-form",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
    data() {
      return {
        userMail: null,
        userFirstName: null,
        userLastName: null,
        userGender: null,
        userIpAddress: null,
      };
    },
    ...mapActions(["addUser"]),
    onAdd() {
      this.addUser({
        userMail: this.userMail,
        userFirstName: this.userFirstName,
        userLastName: this.userLastName,
        userGender: this.userGender,
        userIpAddress: this.userIpAddress,
      });
    },
  },
  components: {
    MyButton,
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.dialog_content {
  padding: 15px;
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 100px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>