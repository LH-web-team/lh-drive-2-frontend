import axios from "axios";
import { useAuthStore } from "~/stores/auth";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { router } from "~/router";

const API_BASE = import.meta.env.VITE_API_BASEURL;

const instance = axios.create({ baseURL: API_BASE });

const refreshAuthLogic = async (failedRequest: any) => {
  const authStore = useAuthStore();
  if (!authStore.token) return;
  try {
    const resp = await axios.post(`${API_BASE}token/refresh`, {
      refresh: authStore.token.refresh,
    });
    authStore.token.access = resp.data.access;
  } catch (err) {
    authStore.logout();
    router.push("/login");
  }
};

createAuthRefreshInterceptor(instance, refreshAuthLogic);

instance.interceptors.request.use(function (config) {
  const authStore = useAuthStore();
  if (!authStore.token) return config;
  config.headers!["Authorization"] = `Bearer ${authStore.token!.access}`;
  return config;
});

export default instance;
