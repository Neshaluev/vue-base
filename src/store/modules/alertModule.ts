import { testAuthFn, stop } from "@/utils/test";

type TAlertMessage = EnumAlertMessage;

export enum EnumAlertMessage {
  ALERT_PRIMARY = "ALERT_PRIMARY",
  ALERT_SUCCESS = "ALERT_SUCCESS",
  ALERT_ERROR = "ALERT_ERROR",
  ALERT_DEFAULT = "ALERT_DEFAULT",
}

type TState = {
  isShow: boolean;
  type: TAlertMessage;
  message: string;
};

export const alertModule = {
  state: (): TState => ({
    isShow: false,
    type: EnumAlertMessage.ALERT_DEFAULT,
    message: "",
  }),
  getters: {},
  mutations: {
    setShow(state: TState, payload: any) {
      state.isShow = true;
      state.type = payload.type;
      state.message = payload.message;
    },
    clearAlert(state: TState) {
      state.isShow = false;
      state.message = "";
      state.type = EnumAlertMessage.ALERT_DEFAULT;
    },
  },
  actions: {
    showAlert({ state, commit, dispatch }: any, payload: any) {
      commit("setShow", payload);
      setTimeout(() => {
        commit("setShow", false);
        commit("clearAlert");
      }, 2000);
    },
  },
  namespaced: true,
};
