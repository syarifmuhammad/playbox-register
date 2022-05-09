<template>
  <main class="container" id="main-content" style="height: 100%">
    <div
      style="height: 100%"
      class="row d-flex justify-content-center align-items-center p-3"
    >
      <div
        id="register"
        class="col-xs-11 col-sm-10 col-md-6 col-xl-4 d-flex flex-column align-items-center justify-content-center py-3 px-4"
      >
        <img
          src="@/assets/images/logo-playbox-s3.png"
          class="img-fluid w-50 my-4"
          alt=""
        />
        <form class="form d-flex flex-column w-100" @submit.prevent="register">
          <input
            class="form-control mt-3"
            type="text"
            placeholder="Nama TIM"
            required
            v-model="name"
          />
          <input
            class="form-control my-3"
            type="email"
            placeholder="Email"
            required
            v-model="email"
          />
          <input
            class="form-control"
            type="tel"
            placeholder="No Telepon"
            required
            v-model="phone"
          />
          <input
            class="form-control my-3"
            type="password"
            placeholder="Password"
            required
            v-model="password"
          />
          <button class="btn btn-outline-primary my-3" type="submit">Daftar</button>
          <span
            >Sudah punya akun?
            <a style="text-decoration: dashed" href="#login">Login</a></span
          >
        </form>
      </div>
    </div>
  </main>
</template>
<script>
import http from "../http-common"
export default {
  name:"Register",
  data(){
    return {
      name:"",
      email:"",
      phone:"",
      password:"",
    }
  },
  methods:{
    register(){
      http.post('/team/add', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password
      }).then(response => {
        let data = response.data
        if(!data.error){
          this.$swal.fire({
            icon: "success",
            title: "Berhasil",
            text: 'Lanjut login sekarang !',
            confirmButtonText: 'Login',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href="#login"
            }
          });
        }else{
          this.$swal.fire({
            icon: "error",
            title: "Gagal",
            text: 'Coba daftar kembali !',
          })
        }
      }).catch(e => {
        this.$swal.fire({
            icon: "error",
            title: "Gagal",
            text: e.response.data.message,
          })
      })
    }
  }
}
</script>
