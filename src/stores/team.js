import { defineStore } from "pinia";
import http from "../http-common"
import {useLoginStore} from "../stores/login"

export const useTeamStore = defineStore({
  id: "team",
  state: () => ({
    loading:true,
    status: false,
    selectedCategory: "MHS",
    payment: {
      status:false
    },
    member_one:{
        name: "",
        role: "Hustler",
        email: "",
        institution: "",
        phone: "",
        id_image: "",
        profile_image: ""
    },
    member_two:{
      name: "",
      role: "Hustler",
      email: "",
      institution: "",
      phone: "",
      id_image: "",
      profile_image: ""
    },
    member_three:{
      name: "",
      role: "Hustler",
      email: "",
      institution: "",
      phone: "",
      id_image: "",
      profile_image: ""
    },
    idea: {
      title:"",
      description:""
    },
    product: {
      price: "Rp 0",
      title: ""
    }
  }),
  actions: {
    getBiodata(){
      if(localStorage.getItem("PLAYBOX_TOKEN")){
        http.get("team", {
          headers: {
            Authorization: "Bearer " + localStorage.PLAYBOX_TOKEN
          }
        }).then(response => {
          this.member_one = response.data.data.member_one
          this.member_two = response.data.data.member_two
          this.member_three = response.data.data.member_three
          if(response.data.data.category.trim() != ""){
            this.selectedCategory = response.data.data.category
          } else {
            this.selectedCategory = "MHS"
          }
          this.status = response.data.data.status
          this.payment = response.data.data.payment
          this.idea = response.data.data.idea
          this.product = response.data.product
          this.loading = false
        }).catch(e => {
          this.loading = false
          if(e.response.data.status == 4000) {
            const loginStore = useLoginStore()
            loginStore.logout()
          }
        })
      }
    }
  },
  getters: {
    isComplete(state){
      return state.member_one.name.trim() != ""
    }
  }
});
