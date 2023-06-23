import { defineStore } from 'pinia'
import { db } from '../../firebase/firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

export interface Young {
  group: string
  count: number
  leader: string
  uid: string
}

const youngCollection = collection(db, 'youngList')
const docs = await getDocs(youngCollection)
export const useYoungList = defineStore(
  'youngCollection',

  {
    state: () => ({
      young: [] as Young[]
    }),
    getters: {
      groups: (state) => {
        return state.young.map((value) => value.group) // Modify this logic as needed
      }
    },
    actions: {
      async getYoung() {
        if (docs) {
          docs.forEach((doc) => {
            this.young.push({
              ...doc.data(),
              uid: doc.id
            } as any)
          })
        }
      },
      pickOneYoung(idxGroup: number) {
        return this.young.find((young: Young) => +young.group === idxGroup)
      },
      async changeOneEntry(idxGroup: number, payload: Young) {
        const index = this.young.findIndex((young) => young.group === payload.group)
        if (index !== -1) {
          await updateDoc(doc(db, 'youngList', this.young[index].uid), {
            ...this.young[index],
            ...payload
          })
            .then((v) => {
              this.young[index] = {
                ...this.young[index],
                ...payload
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      },
      async addOneEntry(payload: Young) {
        await addDoc(youngCollection, { ...payload })
          .then((v) => {
            this.young.push({
              ...payload,
              uid: v.id
            })
          })
          .catch((err) => {
            console.log(err)
          })
      },
      async deleteOneYoung(idx: string) {
        await deleteDoc(doc(db, 'youngList', idx))
          .then((success) => {
            this.young = this.young.filter((value) => value.uid !== idx)
          })
          .catch((err) => console.log(err))
      }
    },

    persist: false
  }
)
