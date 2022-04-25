<template>
    <div class="card mt-3">
        <div class="card-body">
            <h4 class="text-center fs-4 mb-3 fw-bold">KATEGORI</h4>
            <div class="d-flex justify-content-center row">
                <div class="col-sm-5 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top" @click="selectedCategory='sma'" :class="selectedCategory == 'sma' ? 'text-white bg-primary' : 'border'" style="cursor:pointer; min-height:80px;">SMA/SMK</div>
                <div class="col-sm-5 mt-2 d-flex justify-content-center align-items-center mx-2 fs-4 rounded-top" @click="selectedCategory='mahasiswa'" :class="selectedCategory == 'mahasiswa' ? 'text-white bg-primary' : 'border'" style="cursor:pointer; min-height:80px;">Mahasiswa</div>
            </div>
            <div class="row pb-3">
                <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
                    <span class="text-primary fw-bold">HIPSTER</span>
                    <div class="card p-3">
                        <form action="" class="form">
                            <!-- <input type="file" name="profile" class="form-control"> -->
                            <div class="form-group">
                                <label for="nama">Nama</label>
                                <input type="text" name="nama_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="no_telp">No Telepon</label>
                                <input type="tel" name="no_telp_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="institusi">Asal Institusi</label>
                                <input type="text" name="institusi_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="kartu_identitas">{{kartu_identitas}}</label>
                                <input type="file" name="kartu_identitas" class="form-control mb-3">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
                    <span class="text-warning fw-bold">HACKER</span>
                    <div class="card p-3">
                        <form action="" class="form">
                            <!-- <input type="file" name="profile" class="form-control"> -->
                            <div class="form-group">
                                <label for="nama">Nama</label>
                                <input type="text" name="nama_hipster" class="form-control mb-2">
                            </div>
                             <div class="form-group">
                                <label for="no_telp">No Telepon</label>
                                <input type="tel" name="no_telp_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="institusi">Asal Institusi</label>
                                <input type="text" name="institusi_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="kartu_identitas">{{kartu_identitas}}</label>
                                <input type="file" name="kartu_identitas" class="form-control mb-3">
                            </div>
                            <!-- <input type="file" name="kartu_identitas" class="form-control"> -->
                        </form>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
                    <span class="text-danger fw-bold">HACKER</span>
                    <div class="card p-3">
                        <form action="" class="form">
                            <div class="form-group">
                                <label for="nama">Nama</label>
                                <input type="text" name="nama_hipster" class="form-control mb-2">
                            </div>
                             <div class="form-group">
                                <label for="no_telp">No Telepon</label>
                                <input type="tel" name="no_telp_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="institusi">Asal Institusi</label>
                                <input type="text" name="institusi_hipster" class="form-control mb-2">
                            </div>
                            <div class="form-group">
                                <label for="kartu_identitas">{{kartu_identitas}}</label>
                                <input type="file" name="kartu_identitas" class="form-control mb-3">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button class="w-25 btn btn-primary fw-bold disabled">SIMPAN & LANJUT</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Biodata",
    data(){
        return {
            selectedCategory:"mahasiswa"
        }
    },
    computed:{
        kartu_identitas(){
            return this.selectedCategory=="mahasiswa" ? "KTM" : "KARTU PELAJAR"
        }
    }
}
</script>