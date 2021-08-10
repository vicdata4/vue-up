import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue';

describe('Login form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(LoginForm);
  });

  test('Is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  });

  test('Default form tags are rendered', () => {
    expect(wrapper.findAll('input').length).toEqual(2);
    expect(wrapper.find('button').exists()).toBe(true);
  });  
});

