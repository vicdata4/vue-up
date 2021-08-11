import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex';
import index from '@/pages/index.vue';
import Modal from '@/components/common/Modal.vue';
import LoginForm from '@/components/LoginForm.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const stubs = {
    NuxtLink: RouterLinkStub,
    Modal,
    LoginForm
};

describe('Form is visible if user is not logged', () => {
    let wrapper;
    let store;
    let getters;

    beforeEach(() => {
        getters = {
            isLogged: () => false,
        };

        store = new Vuex.Store({ getters });

        wrapper = shallowMount(index, { store, localVue, stubs });
    });

    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    test('Form is not visible', () => {
        expect(wrapper.find('.login-case').exists()).toBe(true);
    });
});

describe('Form is visible if user is logged', () => {
    let wrapper;
    let store;
    let getters;

    beforeEach(() => {
        getters = {
            isLogged: () => true,
        };

        store = new Vuex.Store({ getters });

        wrapper = shallowMount(index, { store, localVue, stubs });
    });

    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    test('Form is not visible', () => {
        expect(wrapper.find('.login-case').exists()).toBe(false);
    });
});


describe('Fetch if suubmit-form event is dispatched', () => {
    let wrapper;
    let store;
    let getters;
    const submitForm = jest.fn()

    window.alert = jest.fn();

    beforeEach(() => {
        getters = {
            isLogged: () => false,
        };

        store = new Vuex.Store({ getters });

        wrapper = shallowMount(index, { store, localVue, stubs });
    });

    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    test('Dispatch submit-form event', () => {
        wrapper.vm.$refs.loginForm.$emit('submit-form', {});
        window.alert.mockClear();
        //expect(submitForm).toBeCalled();
    });
});


