import { defineStore } from 'pinia'
import { db } from '../../firebase/firebase'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc
} from 'firebase/firestore'
import type { DataTable } from '@/components/table/DataTable.vue'

export interface Young {
  group: Cell<string>
  count: Cell<number>
  leader: Cell<string>
  uid: Cell<string>
  editable: boolean
}

export interface Cell<T> {
  dataCell: T
  editable: boolean
}

const youngCollection = collection(db, 'youngList')
export const useYoungList = defineStore(
  'youngCollection',

  {
    state: () => ({
      young: [] as Young[]
    }),
    getters: {
      groups: (state) => {
        return state.young.map((value) => value.group.dataCell) // Modify this logic as needed
      }, // ReMap Array like interface
      reMappedYoung: (state) => {
        state.young = state.young.map((value, idx) => ({
          group: {
            dataCell: value.group,
            editable: false
          },
          count: {
            dataCell: value.count,
            editable: false
          },
          leader: {
            dataCell: value.leader,
            editable: true
          },
          uid: {
            dataCell: value.uid,
            editable: false
          },
          editable: false
        }))
      }
    },
    actions: {
      async getYoung() {
        const docs = await getDocs(youngCollection)
        docs?.forEach((doc) => {
          this.young.push({
            ...doc.data(),
            uid: doc.id
          } as any)
        })
      },
      pickOneYoung(idxGroup: number) {
        return this.young.find((young: Young) => +young.group === idxGroup)
      },
      async changeOneEntry(idxGroup: number, payload: Young) {
        const index = this.young.findIndex(
          (young) => young.group === payload.group
        )
        if (index !== -1) {
          await updateDoc(
            doc(db, 'youngList', this.young[index].uid.dataCell),
            {
              ...this.young[index],
              ...payload
            }
          )
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
      },

      setARowLikeEdit(index: number, cell: string) {
        this.young[index].editable = !this.young[index].editable
      }
    },

    persist: false
  }
)
