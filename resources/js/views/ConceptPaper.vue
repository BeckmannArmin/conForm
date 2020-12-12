<template>
  <div class="container">
    <div class="loader" v-if="isLoading">
      <circle9></circle9>
    </div>
    <h2>The id is: {{ $route.params.joincode }}</h2>
    <h2>The name is: {{ conceptPaper.name }}</h2>
  </div>
</template>

<script>
import axios from "axios";
import { Circle9 } from "vue-loading-spinner";
export default {
  data() {
    return {
      joinCode: this.$route.params.joincode,
      conceptPaper: {
        name: "",
        course: "",
        currentSemester: "",
        idea: "",
        basics: "",
        niceToHave: "",
        technologies: "",
        team: "",
      },
      isLoading: false,
    };
  },
  components: {
    Circle9,
  },
  mounted() {
    console.log(this.joinCode);
    this.loadConceptPaper();
  },
  methods: {
    loadConceptPaper: async function () {
      try {
        this.isLoading = true;
        const response = await axios.get(`conceptPaper/lobby/${this.joinCode}`);
        console.log(response.data.name);
        this.conceptPaper.name = response.data.name;
        this.conceptPaper.course = response.data.course;
        this.conceptPaper.currentSemester = response.data.currentSemester;
        this.conceptPaper.idea = response.data.idea;
        this.conceptPaper.basics = response.data.bscis;
        this.conceptPaper.niceToHave = response.data.niceToHave;
        this.conceptPaper.technologies = response.data.technologies;
        this.conceptPaper.team = response.data.team;

        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      } catch (error) {
        this.flashMessage.error({
          message: "Some error occured. Please refresh the page!",
          time: 5000,
        });
      }
    },
  },
};
</script>

<style scoped>
.loader {
  position: absolute;
  top: 0;
  right: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10000000;
  justify-content: center;
  display: flex;
  align-items: center;
}
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column;
}
</style>