<template>
<div class="conteiner">
    <div class="loginForm">
        <label>
            Write your email: <br/>
        <input type="email" v-model="mail">
        </label>
        <div class="btn">
        <my-button @click="isRegistrated">login</my-button>
        </div>
    </div>
</div>
</template>

<script>
import MyButton from "@/components/UI/MyButton"
    export default {
        components: {
            MyButton
        },
        data() {
            return {
                mail: null,
                localUsers: null

            }
        },
        methods: {
            isRegistrated() {
                this.$emit('checkEmail', this.mail , this.localUsers)
            }
        },

    }
</script>

<style scoped>
.loginForm{
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10em;
    width: 10%;
    border: 2px solid red;
}
.btn{
    margin-top: 10px ;
}
.conteiner{
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>