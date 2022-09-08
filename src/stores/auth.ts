import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "~/utils/axios";
interface Token {
  refresh: string;
  access: string;
}

export const useAuthStore = defineStore(
  "auth-store",
  () => {
    /**
     * JWT token for authentication
     */
    const token = ref<Token | null>(null);

    /**
     * attempt login to the api server
     * @param username
     * @param password
     */
    async function loginWith(username: string, password: string) {
      token.value = (
        await axios({
          method: "post",
          url: "token/",
          data: { username, password },
        })
      ).data as Token;
    }

    /**
     * refresh the JWT token
     */
    async function refreshToken() {
      if (token.value == null) return;
      let resp = await axios({
        method: "post",
        url: "token/refresh/",
        data: { refresh: token.value!.refresh },
      });
      token.value!.access = resp.data.access;
    }

    /**
     * logout
     */
    function logout() {
      token.value = null;
    }

    return {
      token,
      loginWith,
      refreshToken,
      logout,
    };
  },
  {
    persist: true,
  }
);
