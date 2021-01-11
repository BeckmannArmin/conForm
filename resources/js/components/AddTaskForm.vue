<template>
  <form
    class="form-text-dark relative mb-3 flex flex-col justify-between bg-white rounded-md shadow overflow-hidden"
    @submit.prevent="handleAddNewTask"
  >
    <div class="p-3 flex-1">
      <input
        class="block w-full px-2 py-1 text-lg border-b border-blue-800 rounded"
        type="text"
        :placeholder="$t('kanban.title')"
        v-model.trim="newTask.title"
      />
      <textarea
        class="mt-3 p-2 block w-full p-1 border text-sm rounded"
        rows="2"
        :placeholder="$t('kanban.description')"
        v-model.trim="newTask.description"
      ></textarea>
      <div v-show="errorMessage">
        <span class="text-xs text-red-500">
          {{ errorMessage }}
        </span>
      </div>
    </div>
    <div class="p-3 flex justify-between items-end text-sm bg-gray-100">
      <button
        @click="$emit('task-canceled')"
        type="reset"
        class="py-1 leading-5 text-gray-600 hover:text-gray-700"
      >
        {{ $t('kanban.cancel') }}
      </button>
      <button
        type="submit"
        class="btn btn-outline-dark btn-sm leading-5 px-3 py-1 rounded"
      >
       {{$t('kanban.add')}}
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import {http} from "../services/http_service";
export default {
  props: {
    statusId: Number
  },
  data() {
    return {
      newTask: {
        title: "",
        description: "",
        status_id: null
      },
      errorMessage: ""
    };
  },
  mounted() {
    this.newTask.status_id = this.statusId;
  },
  methods: {
    handleAddNewTask() {
      // Basic validation so we don't send an empty task to the server
      if (!this.newTask.title) {
        this.errorMessage = "The title field is required";
        return;
      }

      // Send new task to server
      http()
        .post("/tasks", this.newTask)
        .then(res => {
          // Tell the parent component we've added a new task and include it
          this.$emit("task-added", res.data);
        })
        .catch(err => {
          // Handle the error returned from our request
          this.handleErrors(err);
        });
    },
    handleErrors(err) {
      if (err.response && err.response.status === 422) {
        // We have a validation error
        const errorBag = err.response.data.errors;
        if (errorBag.title) {
          this.errorMessage = errorBag.title[0];
        } else if (errorBag.description) {
          this.errorMessage = errorBag.description[0];
        } else {
          this.errorMessage = err.response.message;
        }
      } else {
        // We have bigger problems
        console.log(err.response);
      }
    }
  }
};
</script>
