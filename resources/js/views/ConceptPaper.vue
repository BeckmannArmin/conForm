<template>
  <div>
    <h2>The id is: {{ $route.params.joincode }}</h2>
    <h2>The name is: {{ conceptPaper.name }}</h2>
  </div>
</template>

<script>
import axios from "axios";
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
    };
  },
  mounted() {
    console.log(this.joinCode);
    this.loadConceptPaper();
  },
  methods: {
    loadConceptPaper: async function () {
      try {
        const response = await axios.get(`${this.joinCode}`);
        console.log(response.data.name);
        this.conceptPaper.name = response.data.name;
        this.conceptPaper.course = response.data.course;
        this.conceptPaper.currentSemester = response.data.currentSemester;
        this.conceptPaper.idea = response.data.idea;
        this.conceptPaper.basics = response.data.bscis;
        this.conceptPaper.niceToHave = response.data.niceToHave;
        this.conceptPaper.technologies = response.data.technologies;
        this.conceptPaper.team = response.data.team;
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