import axios from '@/core/axios'

import { testAuthFn, stop } from '@/utils/test'

type TState = {
    items: any
    isLoading: boolean
    error: string
    page: any
}

export const postsModule = {
    state: (): TState => ({
        items: [],
        isLoading: false,
        error: '',
        page: 1,
    }),
    getters: {},
    mutations: {
        setLoading(state: TState, bool: boolean) {
            state.isLoading = bool
        },
        setItems(state: TState, items: any) {
            state.items = [...state.items, ...items]
        },
        setPage(state: TState, page: any) {
            state.page = page
        },
    },
    actions: {
        async fetchItems({ state, commit, dispatch }: any) {
            console.log('fetch payload')
            try {
                commit('setPage', state.page + 1)
                commit('setLoading', true)
                await stop(1000)
                const { data } = await axios.get(
                    `/posts?_limit=5&_page=${state.page}`
                )
                commit('setItems', data)
            } catch (error) {
                console.log('ERROR')
            } finally {
                // dispatch(
                //   "alert/showAlert",
                //   {
                //     type: "ALERT_SUCCESS",
                //     message: "Success message",
                //   },
                //   { root: true }
                // );
                commit('setLoading', false)
            }

            console.log('End fetch ------------->', state)
        },
    },
    namespaced: true,
}
