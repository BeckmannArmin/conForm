<template>
  <div class="container">
    <PageLoader :loaded="isLoading"/>
    <h2>The id is: {{ $route.params.joincode }}</h2>
    <h2>The name is: {{ conceptPaper.name }}</h2>
  </div>
</template>

<script>
import axios from "axios";
import PageLoader from "../components/PageLoader/PageLoader.vue";
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
      isLoading: false
    };
  },
  components: {
    PageLoader
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

.container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column;
}
</style>