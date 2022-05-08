<template>
    <div class="card mt-3" v-if="!teamStore.loading">
        <div v-if="!teamStore.status">
            <div class="bg-primary rounded text-white p-5" style="min-height: 400px;">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="fw-bold mb-2">Akun anda belum diverifikasi oleh admin</h1>
                        <p class="col-sm-12 col-md-8">Lengkapi biodata dan ide agar dapat di verifikasi oleh admin serta lanjut ke tahap pembayaran uang pendaftaran.</p>
                    </div>
                </div>
            </div>
            <div class="row m-0 my-4">
                <div class="mb-2 col-xs-12 col-sm-12 col-md-6">
                    <button type="button" @click="back" class="w-100 btn btn-outline-primary fw-bold">KEMBALI</button>
                </div>
                <div class="mb-2 col-xs-12 col-sm-12 col-md-6">
                    <button disabled type="button" class="w-100 btn btn-primary fw-bold disabled">LANJUT</button>
                </div>
            </div>
        </div>
        <div class="card-body" v-if="teamStore.status && !teamStore.payment.status">
            <form @submit.prevent="bayar" class="form">
                 <div class="row m-0">
                    <div class="col-sm-12">
                        <h1 class="fw-normal fs-2 border-bottom border-3 border-white fw-bolder">Metode Pembayaran</h1>
                        <div class="row justify-content-between m-0">
                            <div class="payment-method mb-2 p-3 col-xs-12 col-sm-12 col-md-3 rounded text-center d-flex align-items-center justify-content-center" @click="payment_method='va'" :class="payment_method == 'va' ? 'bg-primary text-white' : 'border'">Virtual Account</div>
                            <!-- <div class="payment-method mb-2 p-3 col-xs-12 col-sm-12 col-md-3 rounded border text-center d-flex align-items-center justify-content-center" @click="payment_method='banktransfer'" :class="payment_method == 'banktransfer' ? 'bg-primary text-white' : 'border'">Bank Transfer</div>
                            <div class="payment-method mb-2 p-3 col-xs-12 col-sm-12 col-md-3 rounded border text-center d-flex align-items-center justify-content-center" @click="payment_method='cstore'" :class="payment_method == 'cstore' ? 'bg-primary text-white' : 'border'">Alfamart / Indomaret</div>
                            <div class="payment-method mb-2 p-3 col-xs-12 col-sm-12 col-md-3 rounded border text-center d-flex align-items-center justify-content-center" @click="payment_method='qris'" :class="payment_method == 'qris' ? 'bg-primary text-white' : 'border'">QRIS</div> -->
                            <div class="payment-method mb-2 p-3 col-xs-12 col-sm-12 col-md-3 rounded border text-center d-flex align-items-center justify-content-center disabled" :class="payment_method == 'banktransfer' ? 'bg-primary text-white' : 'border'">Bank Transfer</div>
                            <div class="payment-method mb-2 p-3 col-xs-12 col-sm-12 col-md-3 rounded border text-center d-flex align-items-center justify-content-center disabled" :class="payment_method == 'cstore' ? 'bg-primary text-white' : 'border'">Alfamart / Indomaret</div>
                            <div class="payment-method mb-2 p-3 col-xs-12 col-sm-12 col-md-3 rounded border text-center d-flex align-items-center justify-content-center disabled" :class="payment_method == 'qris' ? 'bg-primary text-white' : 'border'">QRIS</div>
                        </div>
                        <h1 class="fs-3 my-4">{{teamStore.product.title}}</h1>
                        <h1 class="fs-1 fw-bold mt-4 mb-0">{{toRupiah(teamStore.product.price)}}</h1>
                        <small>/ Include Fee Rp. 5.000</small>
                    </div>
                </div>
                <div class="row m-0 my-4">
                    <div class="mb-2 col-xs-12 col-sm-12 col-md-6">
                        <button @click="back" type="button" class="w-100 btn btn-outline-primary fw-bold">KEMBALI</button>
                    </div>
                    <div class="mb-2 col-xs-12 col-sm-12 col-md-6">
                        <button type="submit" class="w-100 btn btn-primary fw-bold">BAYAR PENDAFTARAN</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="card-body" v-if="teamStore.status && teamStore.payment.status">
            <div class="card border-0">
                <div class="card-body bg-primary rounded text-white p-5" style="min-height: 400px;">
                    <div class="row p-5">
                        <div class="col-sm-12">
                            <h1 class="text-center fw-bold">Anda telah melunasi biaya pendaftaran di kategori mahasiswa</h1>
                        </div>
                    </div>
                    <div class="row m-0 my-4">
                        <div class="mb-2 col-xs-12 col-sm-12 col-md-6">
                            <button type="button" @click="back" class="w-100 btn btn-outline-primary fw-bold">KEMBALI</button>
                        </div>
                        <div class="mb-2 col-xs-12 col-sm-12 col-md-6">
                            <button @click="next" type="button" class="w-100 btn btn-primary fw-bold">LANJUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    data(){
        return {
            payment_method:"va"
        }
    },
    methods:{
        toRupiah(x) {
            return "Rp. " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        back(){
            window.location.href='#biodata'
        },
        next(){
            window.location.href='#ide'
        },
        bayar(){
            http.post("team/payment?paymentMethod=" + this.payment_method, {}, {
                headers: {
                    Authorization: "Bearer " + localStorage.PLAYBOX_TOKEN
                }
            }).then(response => {
                this.$swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: 'Berhasil meminta invoice pembayaran',
                    confirmButtonText: 'Ke Halaman Pembayaran',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href=response.data.data.url
                    } else {
                        window.location.href=response.data.data.url
                    }

                });
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