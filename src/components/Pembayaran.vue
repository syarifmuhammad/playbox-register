<template>
    <div class="card mt-3">
        <div class="card-body p-0">
            <form action="" class="form">
                <!-- <div class="d-flex justify-content-center">
                    <div class="col-4 d-flex justify-content-center align-items-center text-white bg-primary mx-2 fs-4 rounded-top" style="min-height:80px;">SMA/SMK</div>
                    <div class="col-4 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top" style="min-height:80px;">Mahasiswa</div>
                </div> -->
                 <div class="row m-0 p-5 bg-primary text-white rounded">
                    <div class="col-sm-12">
                        <h1 class="fw-normal fs-2 border-bottom border-3 border-white fw-bolder">Metode Pembayaran</h1>
                        <div class="row justify-content-around">
                            <div class="col-xs-12 col-sm-12 col-md-3 bg-white rounded text-primary text-center">Virtual Account / Bank Transfer</div>
                            <div class="col-xs-12 col-sm-12 col-md-3 bg-white rounded text-primary text-center">QRIS</div>
                            <div class="col-xs-12 col-sm-12 col-md-3 bg-white rounded text-primary text-center">Alfamart/Indomaret</div>
                        </div>
                        <h1 class="fs-1 fw-bold mt-2">Rp 33.000</h1>
                        <button class="btn bg-white text-primary mt-2 fw-bolder px-5 py-2">Bayar Pendaftaran</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="card-body d-none">
            <div class="card border-0">
                <div class="card-body bg-primary rounded text-white p-5" style="min-height: 400px;">
                    <div class="row p-5">
                        <div class="col-sm-12">
                            <h1 class="text-center fw-bold">Anda telah melunasi biaya pendaftaran di kategori mahasiswa</h1>
                            <button class="btn bg-white fw-bolder text-primary m-auto">Lanjut Pengisian Biodata</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-0 row my-3">
            <div class="col-6">
                <button @click="back" class="w-100 btn btn-outline-primary fw-bold">KEMBALI</button>
            </div>
            <div class="col-6">
                <button class="w-100 btn btn-primary fw-bold disabled">LANJUT</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            window.location.href='#biodata'
        }
    }
}
</script>