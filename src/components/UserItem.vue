<template>
  <div>
    <div class="user">
      <p><strong>First name</strong>: {{ data.first_name }}</p>
      <p><strong>Last name</strong>: {{ data.last_name }}</p>
      <p><strong>Email</strong>: {{ data.email }}</p>
      <my-button @click="$router.push(`/users/${data.id}`)">Read all information</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton"

export default {
    name: "UserItem",
    props: {
        data: {
            type: Object,
            default: ()=> ({})
        },
    },
    components: {
        MyButton,
    },
};
</script>

<style scoped>
.user{
  border: 2px solid green;
  margin-bottom: 5px;

}
</style>