import { mount } from 'vitest';
import ToDoItem from './ToDoItem.vue';
import { expect, test } from "vitest";

test('YourComponent renders correctly', () => {

  const wrapper = mount(ToDoItem, {
    props: {
      label: 'Test Label',
      done: false,
      id: 'testId',
    },
  });

  expect(wrapper.html()).toContain('Test Label');
  expect(wrapper.html()).not.toContain('Edit');
});

test('YourComponent toggles to edit form when edit button is clicked', async () => {

  const wrapper = mount(ToDoItem, {
    props: {
      label: 'Test Label',
      done: false,
      id: 'testId',
    },
  });

  const editButton = wrapper.find('button');
  await editButton.trigger('click');

  expect(wrapper.vm.isEditing).toBe(true);
});

