import { defineStore } from "pinia";
import http from "../http-common"

export const useTeamStore = defineStore({
  id: "team",
  state: () => ({
    status: false,
    selectedCategory: "MHS",
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
  }),
  actions: {
    getBiodata(){
      http.get("team", {
        headers: {
          Authorization: "Bearer " + localStorage.PLAYBOX_TOKEN
        }
      }).then(response => {
        this.member_one = response.data.data.member_one
        this.member_two = response.data.data.member_two
        this.member_three = response.data.data.member_three
        this.selectedCategory = response.data.data.category
        this.status = response.data.data.status
      })
    }
  },
  getters: {
    isComplete(state){
      return state.member_one.name.trim() != ""
    }
  }
});
