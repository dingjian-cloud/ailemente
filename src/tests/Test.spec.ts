import { shallowMount } from '@vue/test-utils';
import Demo from '@/components/Test.vue';
import { test, expect } from 'vitest';

test('Test.vue', async () => {
  const wrapper = shallowMount(Demo);
  expect(wrapper.html()).toContain('Unit Test Page');
  expect(wrapper.html()).toContain('count is: 0');
  await wrapper.find('button').trigger('click');
  expect(wrapper.html()).toContain('count is: 1');
  expect(wrapper.html()).toMatchSnapshot();
});
