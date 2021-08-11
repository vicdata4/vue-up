import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex';
import Header from '@/components/common/Header.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const stubs = {
  NuxtLink: RouterLinkStub
};

describe('Logged user header', () => {
  let wrapper;
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      isLogged: () => false,
    };

    store = new Vuex.Store({
      getters
    });

    wrapper = shallowMount(Header, { store, localVue, stubs });
  });

  test('Is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('Logout and app buttons are nos visible', () => {
    expect(wrapper.find('#logout').exists()).toBe(false);
    expect(wrapper.find('.menu-link').exists()).toBe(false);
  });
});

describe('Not Logged user header', () => {
  let wrapper;
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      isLogged: () => true,
    };

    store = new Vuex.Store({
      getters
    });

    wrapper = shallowMount(Header, { store, localVue, stubs });
  });

  test('Is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('Logout and app buttons are nos visible', () => {
    expect(wrapper.find('#logout').exists()).toBe(true);
    expect(wrapper.find('.menu-link').exists()).toBe(true);
  });

  test('Logout button is clickeable', async () => {
    wrapper.find('#logout').trigger('click');
  });
});

