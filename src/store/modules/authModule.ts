import { testAuthFn, stop } from "@/utils/test";

type TState = {
  isAuth: boolean;
  isLoading: boolean;
  error: string;
};

export const authModule = {
  state: (): TState => ({
    isAuth: false,
    isLoading: false,
    error: "",
  }),
  getters: {},
  mutations: {
    setLoading(state: TState, bool: boolean) {
      state.isLoading = bool;
    },
    setAuth(state: TState, bool: boolean) {
      state.isAuth = bool;
    },
    clear(state: TState) {
      state.isAuth = false;
      state.isLoading = false;
      state.error = "";
    },
  },
  actions: {
    async login({ state, commit, dispatch }: any, payload: any) {
      console.log("payload", payload);
      try {
        commit("setLoading", true);
        console.log("Start login", state);
        await stop(3000);
        commit("setAuth", true);
      } catch (error) {
        console.log("ERROR");
      } finally {
        dispatch(
          "alert/showAlert",
          {
            type: "ALERT_SUCCESS",
            message: "Success message",
          },
          { root: true }
        );
        commit("setLoading", false);
      }

      console.log("End  login", state);
    },
    async logout({ commit }: any) {
      commit("clear");
      localStorage.clear();
    },
  },
  namespaced: true,
};
