import { shallowMount } from '@vue/test-utils'
import Modal from '@/components/common/Modal.vue';

describe('Modal without slots', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Modal);
    });

    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    });

    test('Slotted button doesnt exist', () => {
        expect(wrapper.find('button').exists()).toBe(false);
        expect(wrapper.find('content').exists()).toBe(false);
    });

    test('Modal is closed by default', () => {
        expect(wrapper.find('.modal').classes('open')).toBe(false);
    });
});

describe('Modal with slots', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Modal, {
            slots: {
                button: '<button>Modal Example</button>',
                content: '<div class="content">Content<button class="close">Close</button></div>'
            }
        });
    });

    test('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    });

    test('Slotted button and content do exist', () => {
        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('.content').exists()).toBe(true);
    });

    test('Modal is closed by default', () => {
        expect(wrapper.classes('open')).toBe(false);
    });

    test('Open modal', () => {
        wrapper.find('button').trigger('click');
        expect(wrapper.find('.modal').classes('open')).toBe(true);
    });

    test('Close modal', () => {
        wrapper.find('.close').trigger('click');

        setTimeout(() => {
            expect(wrapper.find('.modal').classes('open')).toBe(false);
        }, 300);
    });
});

