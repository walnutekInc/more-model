export default {
  props: ["title"],
  setup() {},
  template: `<div class="mb-2">
  <div class="flex justify-between">
    <h4 class="pl-3 text-base font-bold border-l-4 border-l-model-orange">
      {{title}}
    </h4>
    <slot name='title-end'></slot>
  </div>
  <div class="pt-1 border-b border-b-model-gray-500"></div>
</div>`,
};
