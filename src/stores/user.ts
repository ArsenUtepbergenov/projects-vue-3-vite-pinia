import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      name: 'Arsen',
    }
  },
  actions: {
    saveName(payload: string) {
      this.setName(payload)
    },
    setName(payload: string) {
      this.name = payload
    },
    clearUser() {
      this.$reset()
    },
  },
  getters: {
    firstAndLastName: (state) => `${state.name} Utepbergenov`,
  },
})
