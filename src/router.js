import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "./components/views/Login.vue"
import SecureComponent from "./components/views/secure.vue"
import RegisterComponent from "./components/views/Register.vue"


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
    },
    {
      path: "/register",
      name: "register",
      component: RegisterComponent
    }
  ]
})
