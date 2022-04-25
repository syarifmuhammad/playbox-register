<template>
    <div class="card mt-3">
        <div class="card-body">
            <form action="" class="form">
                <!-- <div class="d-flex justify-content-center">
                    <div class="col-4 d-flex justify-content-center align-items-center text-white bg-primary mx-2 fs-4 rounded-top" style="min-height:80px;">SMA/SMK</div>
                    <div class="col-4 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top" style="min-height:80px;">Mahasiswa</div>
                </div> -->
                <div class="card border-0">
                    <div class="card-body bg-primary rounded text-white p-5" style="min-height: 400px;">
                        <div class="row p-5">
                            <div class="col-sm-12">
                                <h1 class="fw-normal fs-2">Biaya Pendaftaran</h1>
                                <div class="row">
                                    <div class="col-4">Virtual Account / Bank Transfer</div>
                                    <div class="col-4">QRIS</div>
                                    <div class="col-4">Alfamart/Indomaret</div>
                                </div>
                                <h1 class="fs-1 fw-bold mt-2">Rp 33.000</h1>
                                <button class="btn bg-white text-primary mt-2 fw-bolder px-5 py-2">Bayar Pendaftaran</button>
                            </div>
                        </div>
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
        <div class="d-flex justify-content-between mb-3" style="padding-left:1rem; padding-right:1rem;">
            <button class="w-25 btn btn-outline-primary fw-bold">KEMBALI</button>
            <button class="w-25 btn btn-primary fw-bold disabled">LANJUT</button>
        </div>
    </div>
</template>