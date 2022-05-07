<template>
  <form class="card mt-3" @submit.prevent="simpan()" ref="form_biodata">
    <div class="card-body">
      <h4 class="text-center fs-4 mb-3 fw-bold">KATEGORI</h4>
      <div class="d-flex justify-content-center row">
        <div
          class="col-sm-3 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top"
          @click="teamStore.selectedCategory = 'SMA'"
          :class="teamStore.selectedCategory == 'SMA' ? 'text-white bg-primary' : 'border'"
          style="cursor: pointer; min-height: 80px"
        >
          SMA/SMK
        </div>
        <div
          class="col-sm-3 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top"
          @click="teamStore.selectedCategory = 'MHS'"
          :class="teamStore.selectedCategory == 'MHS' ? 'text-white bg-primary' : 'border'"
          style="cursor: pointer; min-height: 80px"
        >
          Mahasiswa
        </div>
        <div
          class="col-sm-3 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top"
          @click="teamStore.selectedCategory = 'INTERNAL'"
          :class="teamStore.selectedCategory == 'INTERNAL' ? 'text-white bg-primary' : 'border'"
          style="cursor: pointer; min-height: 80px"
        >
          Internal
        </div>
      </div>
      <div class="row pb-3">
        <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
          <span class="text-primary fw-bold">HIPSTER</span>
          <div class="card p-3">
              <!-- <input type="file" name="profile" class="form-control"> -->
              <div class="form-group">
                <label for="nama">Nama</label>
                <input
                  type="text"
                  name="memberOneName"
                  class="form-control mb-2"
                  :value="teamStore.member_one.name"
                />
              </div>
              <div class="form-group">
                <label for="no_telp">No Telepon</label>
                <input
                  type="tel"
                  name="memberOnePhone"
                  class="form-control mb-2"
                  :value="teamStore.member_one.phone"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="memberOneEmail"
                  class="form-control mb-2"
                  :value="teamStore.member_one.email"
                />
              </div>
              <div class="form-group">
                <label for="institusi">Asal Institusi</label>
                <input
                  type="text"
                  name="memberOneInstitution"
                  class="form-control mb-2"
                  :value="teamStore.member_one.institution"
                />
              </div>
              <div class="form-group">
                <label for="kartu_identitas">{{ kartu_identitas }}</label>
                <input
                  type="file"
                  name="memberOneIdImage"
                  class="form-control mb-3"
                  :value="teamStore.member_one.id_image"
                />
              </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
          <span class="text-warning fw-bold">HACKER</span>
          <div class="card p-3">
              <!-- <input type="file" name="profile" class="form-control"> -->
              <div class="form-group">
                <label for="nama">Nama</label>
                <input
                  type="text"
                  name="memberTwoName"
                  class="form-control mb-2"
                  :value="teamStore.member_two.name"
                />
              </div>
              <div class="form-group">
                <label for="no_telp">No Telepon</label>
                <input
                  type="tel"
                  name="memberTwoPhone"
                  class="form-control mb-2"
                  :value="teamStore.member_two.phone"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="memberTwoEmail"
                  class="form-control mb-2"
                  :value="teamStore.member_two.email"
                />
              </div>
              <div class="form-group">
                <label for="institusi">Asal Institusi</label>
                <input
                  type="text"
                  name="memberTwoInstitution"
                  class="form-control mb-2"
                  :value="teamStore.member_two.institution"
                />
              </div>
              <div class="form-group">
                <label for="kartu_identitas">{{ kartu_identitas }}</label>
                <input
                  type="file"
                  name="memberTwoIdImage"
                  class="form-control mb-3"
                  :value="teamStore.member_two.id_image"
                />
              </div>
              <!-- <input type="file" name="kartu_identitas" class="form-control"> -->
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
          <span class="text-danger fw-bold">HUSTLER</span>
          <div class="card p-3">
              <!-- <input type="file" name="profile" class="form-control"> -->
              <div class="form-group">
                <label for="nama">Nama</label>
                <input
                  type="text"
                  name="memberThreeName"
                  class="form-control mb-2"
                  :value="teamStore.member_three.name"
                />
              </div>
              <div class="form-group">
                <label for="no_telp">No Telepon</label>
                <input
                  type="tel"
                  name="memberThreePhone"
                  class="form-control mb-2"
                  :value="teamStore.member_three.phone"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="memberThreeEmail"
                  class="form-control mb-2"
                  :value="teamStore.member_three.email"
                />
              </div>
              <div class="form-group">
                <label for="institusi">Asal Institusi</label>
                <input
                  type="text"
                  name="memberThreeInstitution"
                  class="form-control mb-2"
                  :value="teamStore.member_three.institution"
                />
              </div>
              <div class="form-group">
                <label for="kartu_identitas">{{ kartu_identitas }}</label>
                <input
                  type="file"
                  name="memberThreeIdImage"
                  class="form-control mb-3"
                  :value="teamStore.member_three.id_image"
                />
              </div>
          </div>
        </div>
      </div>
      <div class="m-0 row my-3 justify-content-end">
            <div class="col-6">
                <button type="submit" class="w-100 btn btn-primary fw-bold">
                  SIMPAN & LANJUT
                </button>
            </div>
        </div>
    </div>
  </form>
</template>
<script>
import { mapStores } from 'pinia'
import { useTeamStore } from "../stores/team"
import http from "../http-common"
export default {
  name: "Biodata",
  data() {
    return {

    }
  },
  computed: {
    ...mapStores(useTeamStore),
    // ...mapWritableState(useTeamStore, ['teamStore.selectedCategory']),
    kartu_identitas() {
      return this.teamStore.selectedCategory == "MHS" ? "KTM" : "KARTU PELAJAR";
    }
  },
  methods: {
    simpan() {
      let formData = new FormData(this.$refs.form_biodata)
      formData.append("category", this.teamStore.selectedCategory)
      http.put('/team/biodata', formData, {
        headers: {
          Authorization: "Bearer " + localStorage.PLAYBOX_TOKEN
        }
      }).then(response => {
        if(!response.data.error){
          this.$swal.fire({
            icon: "success",
            title: "Berhasil",
            text: 'Berhasil menyimpan biodata',
            confirmButtonText: 'Lanjut',
          }).then((result) => {
            if (result.isConfirmed && this.teamStore.isComplete) {
              window.location.href="#pembayaran"
            }
          });
        }else{
          this.$swal.fire({
            icon: "error",
            title: "Gagal",
            text: 'Coba daftar kembali !',
          })
        }
      })
    }
  }
};
</script>
