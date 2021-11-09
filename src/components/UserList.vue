<template>
  <div>
    <user-item v-for="user in paginatedData" :key="user.id" :data="user"/>
    <my-button @click="prevPage" :disabled="pageNumber==0">Prev page</my-button>
    <my-button @click="nextPage" :disabled="pageNumber >= pagecount -1">Next page</my-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import myButton from "@/components/UI/MyButton";
import UserItem from "@/components/UserItem";

export default {
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
    pageCount() {
      let l = this.getUsers.length,
        s = 10;
      return Math.ceil(l / s);
    },
    paginatedData(){
    const start = this.pageNumber * 10,
          end = start + 10;
    return this.getUsers.slice(start, end);
}
  },
  components: {
    myButton,
    UserItem,
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
  },
};
</script>

<style scoped>
</style>