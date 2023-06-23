import { defineStore } from 'pinia'
import { db } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'

export interface Young {
  group: string
  count: number
  leader: string
}

const young = collection(db, 'youngList')
const docs = await getDocs(young)
export const useYoungList = defineStore(
  'young-list',

  {
    state: () => ({
      young: [] as Young[]
    }),
    getters: {},
    actions: {
      async getYoung() {
        if (docs) {
          docs.forEach((doc) => {
            this.young.push(doc.data() as any)
          })
        }
      },
      pickOneYoung(idxGroup: number) {
        return this.young.find((young: Young) => +young.group === idxGroup)
      },
      changeOneEntry(idxGroup: number, payload: Young) {
        const index = this.young.findIndex((young) => young.group === payload.group)
        if (index !== -1) {
          this.young[index] = payload
        }
      },
      addOneEntry(payload: Young) {
        this.young.push({ ...payload })
      }
    }
  }
)
