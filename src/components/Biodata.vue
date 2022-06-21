<template>
  <form class="card mt-3" @submit.prevent="simpan()" ref="form_biodata">
    <div class="card-body" v-if="!teamStore.loading">
      <h4 class="text-center fs-4 mb-3 fw-bold">KATEGORI</h4>
      <div class="d-flex justify-content-center row" v-if="!teamStore.status">
        <div
          class="col-sm-3 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top text-center"
          @click="teamStore.selectedCategory = 'SMA'"
          :class="teamStore.selectedCategory == 'SMA' ? 'text-white bg-primary' : 'border'"
          style="cursor: pointer; min-height: 80px"
        >
          SMA/SMK
        </div>
        <div
          class="col-sm-3 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top text-center"
          @click="teamStore.selectedCategory = 'MHS'"
          :class="teamStore.selectedCategory == 'MHS' ? 'text-white bg-primary' : 'border'"
          style="cursor: pointer; min-height: 80px"
        >
          Mahasiswa
        </div>
        <div
          class="col-sm-3 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top text-center"
          @click="teamStore.selectedCategory = 'INT'"
          :class="teamStore.selectedCategory == 'INT' ? 'text-white bg-primary' : 'border'"
          style="cursor: pointer; min-height: 80px"
        >
          ITTelkom Surabaya
        </div>
      </div>
      <div class="d-flex justify-content-center row" v-else>
        <div
          class="col-sm-3 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top text-center"
          :class="teamStore.selectedCategory == 'SMA' ? 'text-white bg-primary' : 'border'"
          style="cursor: pointer; min-height: 80px"
        >
          SMA/SMK
        </div>
        <div
          class="col-sm-3 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top text-center"
          :class="teamStore.selectedCategory == 'MHS' ? 'text-white bg-primary' : 'border'"
          style="cursor: pointer; min-height: 80px"
        >
          Mahasiswa
        </div>
        <div
          class="col-sm-3 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top text-center"
          :class="teamStore.selectedCategory == 'INT' ? 'text-white bg-primary' : 'border'"
          style="cursor: pointer; min-height: 80px"
        >
          ITTelkom Surabaya
        </div>
      </div>
      <hr>
      <div class="row pb-3">
        <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
          <span class="text-primary fw-bold">HIPSTER</span>
          <div class="card p-3">
              <!-- <input type="file" name="profile" class="form-control"> -->
              <div class="form-group">
                <label for="nama">Nama</label>
                <input
                  type="text"
                  ref="memberOneName"
                  name="memberOneName"
                  class="form-control mb-2"
                  required
                  :value="teamStore.member_one.name"
                  :disabled="teamStore.status"
                />
              </div>
              <div class="form-group">
                <label for="no_telp">No Telepon</label>
                <input
                  type="tel"
                  ref="memberOnePhone"
                  name="memberOnePhone"
                  class="form-control mb-2"
                  required
                  :value="teamStore.member_one.phone"
                  :disabled="teamStore.status"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  ref="memberOneEmail"
                  name="memberOneEmail"
                  class="form-control mb-2"
                  required
                  :value="teamStore.member_one.email"
                  :disabled="teamStore.status"
                />
              </div>
              <div class="form-group">
                <label for="institusi">Asal Institusi</label>
                <input
                  type="text"
                  ref="memberOneInstitution"
                  name="memberOneInstitution"
                  class="form-control mb-2"
                  required
                  :readonly="teamStore.selectedCategory=='INT'"
                  :value="teamStore.selectedCategory=='INT' ? 'ITTelkom Surabaya' : teamStore.member_one.institution"
                  :disabled="teamStore.status"
                />
              </div>
              <div v-if="!teamStore.status" class="form-group">
                <label for="kartu_identitas">{{ kartu_identitas }}</label>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  ref="memberOneIdImage"
                  class="form-control mb-3 d-none"
                  @change="setMemberOneIdImage"
                />
                <div class="input-group mb-3" @click="$refs.memberOneIdImage.click()">
                  <span class="input-group-text" id="basic-addon1">Choose File</span>
                  <span class="form-control text-truncate" :class="teamStore.member_one.id_image.trim() != '' ? 'bg-success text-white' : ''" aria-describedby="basic-addon1">
                    {{teamStore.member_one.id_image.trim() != "" ? teamStore.member_one.id_image : "No file chosen"}}
                  </span>
                  <div class="w-100 px-1">
                    <small>Accepted File : JPG, JPEG, PNG</small> <br>
                    <small>Max : 2 Mb</small>
                  </div>
                </div>
              </div>
              <div v-else>
                <img :src="teamStore.member_one.id_image" class="w-100" alt="Foto Kartu Identitas">
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
                  ref="memberTwoName"
                  name="memberTwoName"
                  class="form-control mb-2"
                  required
                  :value="teamStore.member_two.name"
                  :disabled="teamStore.status"
                />
              </div>
              <div class="form-group">
                <label for="no_telp">No Telepon</label>
                <input
                  type="tel"
                  ref="memberTwoPhone"
                  name="memberTwoPhone"
                  class="form-control mb-2"
                  required
                  :value="teamStore.member_two.phone"
                  :disabled="teamStore.status"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  ref="memberTwoEmail"
                  name="memberTwoEmail"
                  class="form-control mb-2"
                  required
                  :value="teamStore.member_two.email"
                  :disabled="teamStore.status"
                />
              </div>
              <div class="form-group">
                <label for="institusi">Asal Institusi</label>
                <input
                  type="text"
                  ref="memberTwoInstitution"
                  name="memberTwoInstitution"
                  class="form-control mb-2"
                  required
                  :readonly="teamStore.selectedCategory=='INT'"
                  :value="teamStore.selectedCategory=='INT' ? 'ITTelkom Surabaya' : teamStore.member_two.institution"
                  :disabled="teamStore.status"
                />
              </div>
              <div v-if="!teamStore.status" class="form-group">
                <label for="kartu_identitas">{{ kartu_identitas }}</label>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  ref="memberTwoIdImage"
                  class="form-control mb-3 d-none"
                  @change="setMemberTwoIdImage"
                />
                <div class="input-group mb-3" @click="$refs.memberTwoIdImage.click()">
                  <span class="input-group-text" id="basic-addon1">Choose File</span>
                  <span class="form-control text-truncate" :class="teamStore.member_two.id_image.trim() != '' ? 'bg-success text-white' : ''" aria-describedby="basic-addon1">
                    {{teamStore.member_two.id_image.trim() != "" ? teamStore.member_two.id_image : "No file chosen"}}
                  </span>
                  <div class="w-100 px-1">
                    <small>Accepted File : JPG, JPEG, PNG</small> <br>
                    <small>Max : 2 Mb</small>
                  </div> 
                </div>
              </div>
              <div v-else class="form-group">
                <img :src="teamStore.member_two.id_image" class="w-100" alt="Foto Kartu Identitas">
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
                  ref="memberThreeName"
                  name="memberThreeName"
                  class="form-control mb-2"
                  required
                  :value="teamStore.member_three.name"
                  :disabled="teamStore.status"
                />
              </div>
              <div class="form-group">
                <label for="no_telp">No Telepon</label>
                <input
                  type="tel"
                  ref="memberThreePhone"
                  name="memberThreePhone"
                  class="form-control mb-2"
                  required
                  :value="teamStore.member_three.phone"
                  :disabled="teamStore.status"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  ref="memberThreeEmail"
                  name="memberThreeEmail"
                  class="form-control mb-2"
                  required
                  :value="teamStore.member_three.email"
                  :disabled="teamStore.status"
                />
              </div>
              <div class="form-group">
                <label for="institusi">Asal Institusi</label>
                <input
                  type="text"
                  ref="memberThreeInstitution"
                  name="memberThreeInstitution"
                  class="form-control mb-2"
                  required
                  :readonly="teamStore.selectedCategory=='INT'"
                  :value="teamStore.selectedCategory=='INT' ? 'ITTelkom Surabaya' : teamStore.member_three.institution"
                  :disabled="teamStore.status"
                />
              </div>
              <div v-if="!teamStore.status" class="form-group">
                <label for="kartu_identitas">{{ kartu_identitas }}</label>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  ref="memberThreeIdImage"
                  class="form-control mb-3 d-none"
                  @change="setMemberThreeIdImage"
                />
                <div class="input-group mb-3" @click="$refs.memberThreeIdImage.click()">
                  <span class="input-group-text" id="basic-addon1">Choose File</span>
                  <span class="form-control text-truncate" :class="teamStore.member_three.id_image.trim() != '' ? 'bg-success text-white' : ''" aria-describedby="basic-addon1">
                    {{teamStore.member_three.id_image.trim() != "" ? teamStore.member_three.id_image : "No file chosen"}}
                  </span>
                  <div class="w-100 px-1">
                    <small>Accepted File : JPG, JPEG, PNG</small> <br>
                    <small>Max : 2 Mb</small>
                  </div>
                </div>
              </div>
              <div v-else class="form-group">
                <img :src="teamStore.member_three.id_image" class="w-100" alt="Foto Kartu Identitas">
              </div>
          </div>
        </div>
      </div>
      <div class="m-0 row my-3 justify-content-end">
            <div class="col-xs-12 col-sm-12 col-md-6">
                <button :disabled="teamStore.status" type="submit" class="w-100 btn btn-primary fw-bold">
                  SIMPAN & LANJUT
                </button>
            </div>
        </div>
    </div>
    <div v-else>Loading...</div>
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
      loading: false
    }
  },
  computed: {
    ...mapStores(useTeamStore),
    kartu_identitas() {
      return this.teamStore.selectedCategory == "MHS" || this.teamStore.selectedCategory == "INT"  ? "KTM" : "KARTU PELAJAR";
    }
  },
  methods: {
    updateAnotherField(){
      this.teamStore.member_one.name = this.$refs.memberOneName.value
      this.teamStore.member_one.phone = this.$refs.memberOnePhone.value
      this.teamStore.member_one.email = this.$refs.memberOneEmail.value
      this.teamStore.member_one.institution = this.$refs.memberOneInstitution.value
      this.teamStore.member_two.name = this.$refs.memberTwoName.value
      this.teamStore.member_two.phone = this.$refs.memberTwoPhone.value
      this.teamStore.member_two.email = this.$refs.memberTwoEmail.value
      this.teamStore.member_two.institution = this.$refs.memberTwoInstitution.value
      this.teamStore.member_three.name = this.$refs.memberThreeName.value
      this.teamStore.member_three.phone = this.$refs.memberThreePhone.value
      this.teamStore.member_three.email = this.$refs.memberThreeEmail.value
      this.teamStore.member_three.institution = this.$refs.memberThreeInstitution.value
    },
    setMemberOneIdImage(){
      this.updateAnotherField()
      if(this.$refs.memberOneIdImage.files.length > 0) {
        let size = Math.round(this.$refs.memberOneIdImage.files[0].size/1024)
        if(size > 2048) {
          this.$swal.fire({
            icon: "error",
            title: "Upload file gagal",
            text: 'File tidak boleh lebih dari 2 Mb',
          })
        } else {
          this.teamStore.member_one.id_image = this.$refs.memberOneIdImage.files[0].name
        }
      } else {
        this.teamStore.member_one.id_image = ""
      }
    },
    setMemberTwoIdImage(){
      this.updateAnotherField()
      if(this.$refs.memberTwoIdImage.files.length > 0) {
        let size = Math.round(this.$refs.memberTwoIdImage.files[0].size/1024)
        if(size > 2048) {
          this.$swal.fire({
            icon: "error",
            title: "Upload file gagal",
            text: 'File tidak boleh lebih dari 2 Mb',
          })
        } else {
          this.teamStore.member_two.id_image = this.$refs.memberTwoIdImage.files[0].name
        }
      } else {
        this.teamStore.member_two.id_image = ""
      }
    },
    setMemberThreeIdImage(){
      this.updateAnotherField()
      if(this.$refs.memberThreeIdImage.files.length > 0) {
        let size = Math.round(this.$refs.memberThreeIdImage.files[0].size/1024)
        if(size > 2048) {
          this.$swal.fire({
            icon: "error",
            title: "Upload file gagal",
            text: 'File tidak boleh lebih dari 2 Mb',
          })
        } else {
          this.teamStore.member_three.id_image = this.$refs.memberThreeIdImage.files[0].name
        }
      } else {
        this.teamStore.member_three.id_image = ""
      }
    },
    simpan() {
      if(!this.teamStore.status){
        let d = this.$refs
        if(d.memberOneName.value.trim() == "" || d.memberOnePhone.value.trim() == "" || d.memberOneEmail.value.trim() == "" || d.memberOneInstitution.value.trim() == ""
        || d.memberTwoName.value.trim() == "" || d.memberTwoPhone.value.trim() == "" || d.memberTwoEmail.value.trim() == "" || d.memberTwoInstitution.value.trim() == ""
        || d.memberThreeName.value.trim() == "" || d.memberThreePhone.value.trim() == "" || d.memberThreeEmail.value.trim() == "" || d.memberThreeInstitution.value.trim() == ""
        || d.memberOneIdImage.files.length < 1 || d.memberTwoIdImage.files.length < 1 || d.memberThreeIdImage.files.length < 1){
          this.$swal.fire({
            icon: "error",
            title: "Ada form yang kosong",
            text: 'Semua form wajib diisi !',
          })
        }else{
          this.$swal.fire({
            html: '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>',
            showConfirmButton: false
          })
          let formData = new FormData(this.$refs.form_biodata)
          formData.append("category", this.teamStore.selectedCategory)
          formData.append("memberOneRole", "Hipster")
          formData.append("memberTwoRole", "Hacker")
          formData.append("memberThreeRole", "Hustler")
          formData.append("memberOneIdImage", this.$refs.memberOneIdImage.files[0])
          formData.append("memberTwoIdImage", this.$refs.memberTwoIdImage.files[0])
          formData.append("memberThreeIdImage", this.$refs.memberThreeIdImage.files[0])
          http.put('/team/biodata', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
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
                this.loading = false
                if (result.isConfirmed && this.teamStore.isComplete) {
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
  }
};
</script>
