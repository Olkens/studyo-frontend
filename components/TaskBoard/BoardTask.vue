<template>
  <div
    :title="task.createdAt.toLocaleDateString()"
    class="task bg-white p-2 pr-4 mb-2 rounded shadow-sm max-w-[250px] flex"
    @focus="focused = true"
    @blur="focused = false"
    tabindex="0"
  >
    <DragHandle /> <span @click="showModal = !showModal">{{ task.title }}</span>
    <SingleTaskDetails
      @close="showModal = $event"
      v-if="showModal"
      :task="task"
    ></SingleTaskDetails>
  </div>
</template>

<script setup lang="ts">
import type { Task, ID } from "~~/types";

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "delete", payload: ID): void;
}>();

const focused = ref(false);
onKeyStroke("Backspace", (e) => {
  if (focused.value) {
    emit("delete", props.task.id);
  }
});

const showModal = ref(false);
</script>

<style>
.sortable-drag .task {
  transform: rotate(3deg);
}

.sortable-ghost .task {
  position: relative;
}

.sortable-ghost .task::after {
  content: "";
  @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
}

.task:focus,
.task:focus-visible {
  @apply outline-gray-700 !important;
  outline: gray auto 1px;
}
</style>
