<template>
    <div id="register">
        <h1>S'inscrire</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Nom" />
        <input type="email" name="email" v-model="input.email" placeholder="Email">
        <input type="password" name="password" v-model="input.password" placeholder="Mot de passe" />
        <button type="button" v-on:click="register()">S'enregistrer</button>
    </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        input: {
          username: "",
          password: "",
          email: ""
        }
      }
    },
    methods: {
      register() {
        if(this.input.username != "" && this.input.password != "" && this.input.email != "") {
          console.log("ok")
        } else {
            console.log("A username email and password must be present");
            alert("A username email and password must be present");
        }
      }
    }
  }
</script>

<style scoped>
  #register {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }
</style>
