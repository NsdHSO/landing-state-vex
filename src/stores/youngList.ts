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
          leader: 'Ivan'
        },
        {
          group: '3',
          count: 50,
          leader: 'Baci'
        }
      ] as Young[]
    }),
    getters: {},
    actions: {
      modifiedCountNumber(group: number, payload: any) {
        this.young.find((young) => +young.group === +group).count = payload
      },

      pickOneYoung(idx: number) {
        console.log(idx)
        return this.young.find((young: Young) => {
          return +young.group === idx
        })
      }
    }
  }
)
