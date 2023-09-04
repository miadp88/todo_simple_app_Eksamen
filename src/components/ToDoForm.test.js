import { mount } from "vitest";
import { expect, test } from "vitest";
import { sum, ToDoForm } from "./ToDoForm.vue";

test('YourComponent should not emit "todo-added" event when the form is submitted with an empty label', async () => {
  const wrapper = mount(ToDoForm);
  const form = wrapper.find("form");
  await form.trigger("submit.prevent");

  expect(wrapper.emitted("todo-added")).toBeUndefined();
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
