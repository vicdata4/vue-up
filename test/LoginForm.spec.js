import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue';

const mock = { email: 'email@email.com', password: '123123' };

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
    expect(wrapper.find('button[type=submit]').exists()).toBe(true);
  });
  
  
  test('No submit passing an invalid email', async() => {
    await wrapper.find('input[type=text]').setValue('email@em');
    await wrapper.find('input[type=password]').setValue(mock.password)
    wrapper.find('form').trigger('submit');

    expect(JSON.stringify(wrapper.emitted()['submit-form'])).toBe(undefined);

  });

  test('Submit passin valid data', async() => {
    await wrapper.find('input[type=text]').setValue(mock.email);
    await wrapper.find('input[type=password]').setValue(mock.password);
    wrapper.find('form').trigger('submit');

    const expected = JSON.stringify([[mock]]);
    expect(JSON.stringify(wrapper.emitted()['submit-form'])).toBe(expected);

  });
});

