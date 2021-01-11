<template>
  <div v-if="statuses.length" class="p-2 kanban-container">
    <!-- Columns (Statuses) -->
    <div
      v-for="status in statuses"
      :key="status.slug"
      class="mr-6 w-4/5 max-w-xs flex-1 flex-shrink-0"
    >
      <div class="rounded-md shadow-md overflow-hidden">
        <div class="p-3 flex justify-between items-baseline">
          <h4 class="font-medium text-white">
            {{ status.title }}
          </h4>
          <button
            @click="openAddTaskForm(status.id)"
            class="btn-wrapper btn btn-outline-light btn-sm hover:underline px-2 py-1 text-sm"
          >
            {{ $t('kanban.addTask') }}
          </button>
        </div>
        <div
          class="p-2 flex-1 flex flex-col h-full overflow-x-hidden overflow-y-auto task-body-bg-dark"
        >
          <!-- Tasks -->

          <AddTaskForm
            v-if="newTaskForStatus === status.id"
            :status-id="status.id"
            v-on:task-added="handleTaskAdded"
            v-on:task-canceled="closeAddTaskForm"
          />
          <!-- Tasks -->

          <draggable
            class="flex-1 overflow-hidden"
            v-model="status.tasks"
            v-bind="taskDragOptions"
            @end="handleTaskMoved"
          >
            <transition-group
              class="flex-1 flex flex-col h-full overflow-x-hidden overflow-y-auto rounded shadow-xs"
              tag="div"
            >
              <div
                v-for="task in status.tasks"
                :key="task.id"
                class="mb-3 p-3 h-24 flex flex-col bg-white rounded-md shadow transform hover:shadow-md cursor-pointer task-card"
                style="height: auto"
              >
                <span class="block delete-tasks">
                  <button
                    class="btn btn-sm btn-danger"
                    @click="deleteTask(task)"
                  >
                   <span class="fa fa-trash"></span>
                  </button>
                </span>
                <span class="block mb-2 text-xl text-gray-900">
                  {{ task.title }}
                </span>
                <p class="text-gray-700">
                  {{ task.description }}
                </p>
              </div>
              <!-- ./Tasks -->
            </transition-group>
          </draggable>

          <!-- No Tasks -->
          <div
            v-show="!status.tasks.length && newTaskForStatus !== status.id"
            class="flex-1 p-4 flex flex-col items-center justify-center"
          >
            <span class="text-gray-600">{{ $t('kanban.notasks') }}</span>
            <button
              class="mt-1 text-sm text-orange-600 hover:underline"
              @click="openAddTaskForm(status.id)"
            >
              {{ $t('kanban.addTask') }}
            </button>
          </div>
          <!-- No Tasks -->
        </div>
      </div>
    </div>
    <!-- Columns -->
  </div>
</template>

<script>
import draggable from "vuedraggable";
import AddTaskForm from "../components/AddTaskForm.vue";
import { http } from "../services/http_service";

export default {
  props: ["mode"],
  components: {
    AddTaskForm,
    draggable,
  },
  computed: {
    taskDragOptions() {
      return {
        animation: 200,
        group: "task-list",
        dragClass: "status-drag",
      };
    },
  },
  props: {
    initialData: Array,
  },
  data() {
    return {
      statuses: [],
      newTaskForStatus: 0,
    };
  },
  methods: {
    openAddTaskForm(statusId) {
      this.newTaskForStatus = statusId;
    },
    closeAddTaskForm() {
      this.newTaskForStatus = 0;
    },
    handleTaskAdded(newTask) {
      const statusIndex = this.statuses.findIndex(
        (status) => status.id === newTask.status_id
      );

      this.statuses[statusIndex].tasks.push(newTask);

      this.closeAddTaskForm();
    },
    handleTaskMoved() {
      // Send the entire list of statuses to the server
      http()
        .put("/tasks/sync", { columns: this.statuses })
        .catch((err) => {
          console.log(err.response);
        });
    },
    deleteTask: async function (task) {
      const statusIndex = this.statuses.findIndex(
        (status) => status.id === task.status_id
      );

       const taskIndex = this.statuses[statusIndex].tasks.findIndex(
          (taskIndex) => taskIndex.id === task.id
        )

      if (
        !window.confirm(
          `Bist du sicher, dass du den Task ${task.title} löschen willst?`
        )
      ) {
        return;
      }

      try {
        await http().delete(`tasks/${task.id}`);

        this.statuses[statusIndex].tasks.splice(taskIndex, 1);

        this.flashMessage.success({
          message: "Task erfolgreich gelöscht!",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
  },
  mounted() {
    // 'clone' the statuses so we don't alter the prop when making changes
    http()
      .get("tasks")
      .then((response) => (this.statuses = response.data.tasks))
      .catch((error) => this.$router.push({ name: "login" }));
  },
};
</script>

<style lang="scss" scoped>
  .dark {
    .p-3 {
      background-color: #5c55ba !important;
    }

    .form-text-dark {
      color: black;
    }

    .task-body-bg-dark {
      background-color: #f3f3f3 !important;
    }

    .text-sm {
      color: black;
    }

    .btn-wrapper {
      color: white;
    }
  }
.p-2.kanban-container {
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 160px !important;

  .delete-tasks {
    align-self: flex-end;
  }

  .task-card {
    border: 0.5px solid rgba(0, 0, 0, 0.2);
  }

  .p-3 {
    background-color: #6a77c4;
  }

  .status-drag {
    transition: transform 0.5s;
    transition-property: all;
  }
}
</style>
