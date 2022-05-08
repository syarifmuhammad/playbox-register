<template>
    <div class="w-100 card mt-3">
      <form class="card-body" ref="form_ide" @submit.prevent="simpan" v-if="!teamStore.loading">
        <h4 class="text-center fs-4 mb-3 fw-bold">IDE TIM</h4>
        <div class="d-flex justify-content-center row"></div>
        <div class="row pb-3">
          <div class="col-sm-12 mt-4 center">
            <span class="text-warning fw-bold"></span>
              <div class="form-outline mb-2">
                <span class="label label-primary">Judul</span>

                <input 
                  type="text" 
                  placeholder="Ex : Aplikasi Manajemen Sistem Kafe" 
                  class="form-control center mb-2" 
                  ref="title"
                  required
                  :value="teamStore.idea.title"/>
              </div>
              <form action="" class="form">
                <div class="form-outline">
                  <label for="comment">Deskripsi</label>
                  <textarea
                    class="form-control" 
                    rows="10" 
                    placeholder="Ex : Aplikasi untuk mengelola penjualan di kafe"
                    ref="description"
                    required>{{teamStore.idea.description}}</textarea>
                </div>
              </form>
          </div>
        </div>
        <div class="row m-0 my-4">
            <div class="mb-2 col-xs-12 col-sm-12 col-md-6">
                <button type="button" @click="back" class="w-100 btn btn-outline-primary fw-bold">KEMBALI</button>
            </div>
            <div class="mb-2 col-xs-12 col-sm-12 col-md-6">
                <button type="submit" class="w-100 btn btn-primary fw-bold">SIMPAN</button>
            </div>
        </div>
      </form>
    </div>
</template>
<script>
import { mapStores } from 'pinia'
import { useTeamStore } from "../stores/team"
import http from "../http-common"
export default {
  computed: {
    ...mapStores(useTeamStore)
  },
  methods: {
    back(){
        window.location.href='#biodata'
    },
    simpan(){
      let formData = {
        idea:{
          title:this.$refs.title.value,
          description:this.$refs.description.value
        }
      }
      http.put('/team/idea', formData, {
        headers: {
          Authorization: "Bearer " + localStorage.PLAYBOX_TOKEN
        }
      }).then(response => {
        if(!response.data.error){
          this.$swal.fire({
            icon: "success",
            title: "Berhasil",
            text: 'Berhasil menyimpan ide',
            confirmButtonText: 'Lanjut Pembayaran',
          }).then((result) => {
            this.loading = false
            if (result.isConfirmed) {
              window.location.href="#pembayaran"
            }
          });
        }else{
          this.loading = false
          this.$swal.fire({
            icon: "error",
            title: "Gagal",
            text: 'Coba simpan kembali !',
          })
        }
      }).catch(() => {
        this.loading = false
         this.$swal.fire({
            icon: "error",
            title: "Gagal",
            text: 'Coba simpan kembali !',
          })
      })
    }
  }
}
</script>
