<template>
  <Teleport to="body">
    <div ref="modal-backdrop" class="fixed z-10 inset-0 overflow-y-auto bg-slate-700/70">
      <div class="flex items-start justify-center min-h-screen pt-24 text-center z-11">
        <div
          class="bg-white rounded-lg text-left overflow-hidden shadow-xl w-1/2 z-12"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div @click="close">
            <MaterialSymbolsCancelOutline class="cursor-pointer m-2" />
          </div>
          <div class="p-8">
            <div class="space-between flex pb-8">
              <div class="w-1/2 text-xl">
                TODO: PREFIX | {{ task.title.toLocaleUpperCase() }}
              </div>
              <div class="w-1/2 justify-end items-end flex text-sm">
                {{ createdAtDate }}
              </div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-1/2">
                <div>
                  <div>Due date:</div>
                  <input type="text" class="bg-slate-400 rounded" />
                </div>
                <div>
                  <div>Status:</div>
                  <input type="text" class="bg-slate-400 rounded" />
                </div>
              </div>
              <div class="w-1/2">
                <div>
                  <div>Tags:</div>
                  <input type="text" class="bg-slate-400 rounded" />
                </div>
              </div>
            </div>
            <div class="border-t-2 border-slate-300 mt-4 pt-4">
              <v-textarea label="Dodaj notatkę"></v-textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import MaterialSymbolsCancelOutline from "~~/assets/icons/MaterialSymbolsCancelOutline.vue";
import type { Task } from "~~/types";
import moment from "moment";

const props = defineProps<{
  task: Task;
}>();

const createdAtDate = ref<String>(
  moment(props.task.createdAt).format("MMMM Do YYYY, h:mm:ss a")
);

const emit = defineEmits<{
  (e: "close", payload: boolean): void;
  (e: "save", payload: Task): void;
}>();

const close = () => {
  emit("close", false);
};

onKeyStroke("Escape", () => {
  emit("close", false);
});
</script>

<style scoped></style>
