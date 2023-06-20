import { defineStore } from 'pinia'

export interface Young {
  group: string
  count: number
  leader: string
}

export const useYoungList = defineStore(
  'young-list',

  {
    state: () => ({
      young: [
        {
          group: '7',
          count: 10,
          leader: 'Raul C'
        },
        {
          group: '3',
          count: 50,
          leader: 'Emanuel A'
        }
      ] as Young[]
    }),
    getters: {},
    actions: {
      pickOneYoung(idxGroup: number) {
        return this.young.find((young: Young) => +young.group === idxGroup)
      },
      changeOneEntry(idxGroup: number, payload: Young) {
        const index = this.young.findIndex((young) => young.group === payload.group)
        if (index !== -1) {
          this.young[index] = payload
        }
      }
    }
  }
)
