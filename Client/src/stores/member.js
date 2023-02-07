import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
// let baseUrl = " https://jkt48-production.up.railway.app";
// let baseUrl = "http://localhost:3000"
let baseUrl = "https://jkt48server.adrianlie.site"


export const useMemberStore = defineStore("member", {
  state: () => ({
    members: [],
    perMember: {},
    isLogin: false,
    isLoading: false,
    userData: {},
    oshi: {},
    official: false,
  }),
  actions: {
    async login(input) {
      try {
      
        const { data } = await axios({
          method: "POST",
          url: baseUrl + "/users/login",
          data: input,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        toast.success("Hai Wota");
        this.router.push("/");
      
      } catch (error) {
        toast.error(error.response.data.message);
        //toast.error(error);
      }
    },
    
    async register(input) {
      try {
        console.log(input);
        const multerData = new FormData();
        multerData.append("profilePicture", input.profilePicture);
        multerData.append("username", input.username);
        multerData.append("email", input.email);
        multerData.append("password", input.password);

        await axios({
          method: "POST",
          url: baseUrl + "/users/register",
          data: multerData,
        });
        this.router.push("/login");
        toast.success("Your account successfully registered");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    async googleLogin(resp) {
      try {
        let { data } = await axios({
          method: "POST",
          url: baseUrl + "/users/googlelogin",
          headers: {
            google_token: resp.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);

        toast.success(`Welcome ${data.email}`);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        // toast.error('Cannot login with your google account'
       toast.error(error.response.data.message);
      }
    },
    async fetchMember() {
      try {
       
        const { data } = await axios({
          method: "GET",
          url: baseUrl + "/members",
          onUploadProgress: this.isLoading = true
        });
        this.members = data;
  
      } catch (error) {
        toast.error("cannot get members");
      } finally {
        this.isLoading = false
      }
    },
    async memberProfile(nickName) {
      try {
        const { data } = await axios({
          method: "GET",
          url: baseUrl + `/members/${nickName}`,
        });
        this.perMember = data;
      } catch (error) {
        toast.error(error.response.data.message)
      }
    },
    async userProfile(username) {
      try {
        const { data } = await axios({
          method: "GET",
          url: baseUrl + `/users/${username}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        if (data.status == "Official") {
          this.official = true;
        }

        this.userData = data;
      } catch (error) {
       toast.error(error.response.data.message);
      }
    },

    async addOshi(MemberId) {
      try {
        await axios({
          method: "POST",
          url: baseUrl + `/users/${MemberId}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        toast.success("Added To Your Oshi");
      } catch (error) {
        toast.error("Gaboleh oleng bro");
        //toast.error(error);
      }
    },

    async getOshi(username) {
      try {
        const { data } = await axios({
          method: "GET",
          url: baseUrl + `/users/${username}/oshi`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.oshi = data;
      } catch (error) {
       toast.error(error.response.data.message);
      }
    },

    async updateStatus() {
      try {
        const { data } = await axios({
          method: "PATCH",
          url: baseUrl + "/users/status",
          data: {
            status: "Official",
          },
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.official = true;
        this.userProfile();
      } catch (error) {
       toast.error(error.response.data.message);
      }
    },

    async upgradeOfficialFans() {
      try {
        const { data } = await axios({
          method: "POST",
          url: baseUrl + "/users/MidtransToken",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const cb = this.updateStatus;
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            toast.success("Payment Success");
            cb();
          },
        });
      } catch (error) {
       toast.error(error.response.data.message);
      }
    },

    async logout() {
      try {
        Swal.fire({
          title: "Are you sure?",
          text: "You want to logout?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes!",
        }).then((result) => {
          if (result.isConfirmed) {
            toast.success(`You're logged out`);
            localStorage.clear();
            this.isLogin = false;
            this.router.push("/");
          }
        });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  },
});
