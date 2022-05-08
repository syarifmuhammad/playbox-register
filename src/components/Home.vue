<template>
    <div class="row">
        <div class="col-lg-9 mx-auto">
            <header class="w-100 mt-4 d-flex flex-column">
                <div class="text-center">
                    <img src="@/assets/images/logo-playbox-s3.png" style="max-height: 60px;" class="img-fluid mb-4" alt="">
                    <h1 class="fs-1 fw-bolder">Pendaftaran Playbox</h1>
                </div>
            </header>
            <main class="container mt-4" id="main-content" style="height:100%;">
                <div class="row">
                    <a href="#biodata" class="mb-2 col-xs-12 col-sm-12 col-md-4 d-flex flex-column" style="cursor:pointer;">
                        <span class="mb-2 text-primary">1. Biodata</span>
                        <span class="w-100" :style="currentView=='biodata' || currentView=='pembayaran' || currentView=='ide' ? 'border-bottom: 6px solid #1F89C5;' : 'border-bottom: 6px solid black'"></span>
                    </a>
                    <a href="#pembayaran" class="mb-2 col-xs-12 col-sm-12 col-md-4 d-flex flex-column" style="cursor:pointer;">
                        <span class="mb-2 text-primary">2. Pembayaran</span>
                        <span class="w-100" :style="currentView=='pembayaran' || currentView=='ide' ? 'border-bottom: 6px solid #1F89C5;' : 'border-bottom: 6px solid black'"></span>
                    </a>
                    <a href="#ide" class="mb-2 col-xs-12 col-sm-12 col-md-4 d-flex flex-column" style="cursor:pointer;">
                        <span class="mb-2 text-secondary">3. IDE</span>
                        <span class="w-100" :style="currentView=='ide' ? 'border-bottom: 6px solid #1F89C5;' : 'border-bottom: 6px solid black'"></span>
                    </a>
                </div>
                <component :is="currentView"></component>
            </main>
        </div>
    </div>
</template>



<script>
import Biodata from './Biodata.vue'
import Pembayaran from './Pembayaran.vue'
import Ide from './Idea.vue'

export default {
    name:"Home",
    components:{
        Biodata,
        Pembayaran,
        Ide
    },
    data(){
        return {
            currentPath: window.location.hash
        }
    },
    computed:{
        currentView() {
            return this.currentPath != '' ? this.currentPath.slice(1) : "biodata" 
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}
</script>