<template>
  <main class="container" id="main-content" style="height: 100%">
    <div
      style="height: 100%"
      class="row d-flex justify-content-center align-items-center p-3"
    >
      <div
        id="login"
        class="col-xs-11 col-sm-10 col-md-6 col-xl-4 d-flex flex-column align-items-center justify-content-center py-3 px-4"
      >
        <img
          src="images/logo-playbox-s2-fix.png"
          class="img-fluid w-50"
          alt=""
        />
        <form class="form d-flex flex-column w-100" @submit.prevent="login">
          <input
            class="form-control my-3"
            type="email"
            placeholder="Email"
            required
            v-model="email"
          />
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            required
            v-model="password"
          />
          <button class="btn btn-outline-primary my-3" type="submit">Login</button>
          <span
            >Belum punya akun?
            <a style="text-decoration: dashed" href="#register">Daftar</a></span
          >
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'pinia'
import {useLoginStore} from "../stores/login"
import http from "../http-common"
export default {
  name: "Login",
  data(){
    return {
      email:"",
      password:""
    }
  },
  computed:{
    ...mapState(useLoginStore, ['isLogin'])
  },
  created(){
    if(this.isLogin) {
      window.location.href = "/"
    }
  },
  methods:{
    login(){
      http.post('/signin', {
        email: this.email,
        password: this.password
      }).then(response => {
        let data = response.data
        if(!data.error){
          localStorage.setItem("PLAYBOX_TOKEN", data.data.token)
          useLoginStore.login()
          window.location.href="#"
        }else{
          this.$swal.fire({
            icon: "error",
            title: "Gagal",
            text: 'Kombinasi email dan password tidak valid !',
          })
        }
      }).catch(e => {
        if(e.response.data.error){
          this.$swal.fire({
            icon: "error",
            title: "Gagal",
            text: 'Kombinasi email dan password tidak valid !',
          })
        }
      })
    }
  }
}
</script>

<style scoped></style>
