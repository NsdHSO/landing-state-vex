import { beforeEach, describe, assert, it } from 'vitest'

import { mount } from '@vue/test-utils'
import YoungList from '../dahsboard-components/YoungList.vue'
import DataTable from '../table/DataTable.vue'
import { useYoungList } from '../../stores/youngList'
import { createPinia, setActivePinia } from 'pinia'

describe('YoungList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders properly', async () => {
    const youngList = useYoungList()

    // Create a mock event object
    const mockEvent = {
      group: '7',
      count: '40'
    }

    const wrapper = mount(YoungList, {})
    wrapper.findComponent(DataTable).vm.$emit('press-on-the-row', mockEvent)
    await wrapper.vm.$nextTick()

    // Check if modifiedCountNumber was called with the correct arguments
    assert.equal(youngList.young.find((v) => +v.group === 7).count, '20')
  })
})
