<template>
  <div class="flex gap-4 items-center">
    <p class="text-2xl">{{ props.text }}</p>
    <input
      class="w-48"
      type="range"
      :min="props.min"
      :max="props.max"
      :step="props.step"
      :value="props.value"
      @change="($event) => onValueChange($event)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";

interface RangeSettingProps {
  text: string;
  min?: number;
  max?: number;
  step?: number;
  modelValue?: number;
}

const props = withDefaults(defineProps<RangeSettingProps>(), {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
});
const emit = defineEmits(["update:modelValue"]);

const onValueChange = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped></style>
