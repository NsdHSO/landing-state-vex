import { defineStore } from 'pinia'

export const useYoungList = defineStore(
  'young-list',

  {
    state: () => ({
      young: [
        {
          group: '7',
          count: 10,
          leader: 'Ivan'
        },
        {
          group: '3',
          count: 50,
          leader: 'Baci'
        }
      ]
    }),
    getters: {},
    actions: {
      modifiedCountNumber(group: number, payload: any) {
        this.young.find((young) => +young.group === +group).count = payload
      }
    }
  }
)
