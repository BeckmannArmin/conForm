<template>
  <div class="container">
    <PageLoader :loaded="isLoading" />
    <h2>Konzeptpapier mit der ID: {{ conceptPaper.joinCodeDB }}</h2>
    <div>
      <div class="form-group">
        <table class="table">
          <td>
            <label for="name">Projektname eingeben</label>
            <input
              type="text"
              v-model="editConceptPaperData.name"
              class="form-control"
              id="name"
              placeholder="Name"
            />
            <div class="invalid-feedback" v-if="errors.name">
              {{ errors.name[0] }}
            </div>
          </td>
          <td>
            <label for="course">Kurs eingeben</label>
            <input
              type="text"
              v-model="editConceptPaperData.course"
              class="form-control"
              id="course"
              placeholder="Kurs"
            />
            <div class="invalid-feedback" v-if="errors.name">
              {{ errors.name[0] }}
            </div>
          </td>
          <td>
            <label for="currentSemester">Aktuelles Semester eingeben</label>
            <input
              type="text"
              v-model="editConceptPaperData.currentSemester"
              class="form-control"
              id="currentSemester"
              placeholder="Bsp.: WS20/21"
            />
            <div class="invalid-feedback" v-if="errors.name">
              {{ errors.name[0] }}
            </div>
          </td>
        </table>
      </div>
      <div class="form-group">
        <label for="idea">Grundidee</label>
        <textarea
          v-model="editConceptPaperData.idea"
          class="form-control"
          id="idea"
          placeholder="Grundidee in ganzen Sätzen beschreiben."
          rows="6"
        />
        <div class="invalid-feedback" v-if="errors.name">
          {{ errors.name[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="basics">Grundfunktionalitäten (Must-Have)</label>
        <textarea
          v-model="editConceptPaperData.basics"
          class="form-control"
          id="basics"
          placeholder="Grundfunktionalitäten in Stichpunkten beschreiben."
          rows="8"
        />
        <div class="invalid-feedback" v-if="errors.name">
          {{ errors.name[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="niceToHave">Nice-To-Have Features</label>
        <textarea
          v-model="editConceptPaperData.niceToHave"
          class="form-control"
          id="niceToHave"
          placeholder="Nice-To-Have Features in Stichpunkten beschreiben."
          rows="8"
        />
        <div class="invalid-feedback" v-if="errors.name">
          {{ errors.name[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="technologies">Technologien</label>
        <textarea
          v-model="editConceptPaperData.technologies"
          class="form-control"
          id="technologien"
          placeholder="Technologien in Stichpunkten beschreiben."
          rows="5"
        />
        <div class="invalid-feedback" v-if="errors.name">
          {{ errors.name[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="team">Team</label>
        <textarea
          v-model="editConceptPaperData.team"
          class="form-control"
          id="team"
          :placeholder="`${conceptPaper.team}`"
          rows="5"
        />
        <div class="invalid-feedback" v-if="errors.name">
          {{ errors.name[0] }}
        </div>
      </div>
      <div class="text-right">
        <button type="button" class="btn btn-default">Cancel</button>
        <button class="btn btn-primary" v-on:click="updateConceptPaper">
          <span class="fa fa-check"></span>
          Save
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import PageLoader from "../components/PageLoader/PageLoader.vue";
import * as conceptPaperService from "../services/conceptPaper_service";
import { uuid } from "vue-uuid";
import { http } from "../services/http_service";
export default {
  data() {
    return {
      joinCode: this.$route.params.joincode,
      conceptPapers: [],
      conceptPaper: {
        name: "",
        course: "",
        currentSemester: "",
        idea: "",
        basics: "",
        niceToHave: "",
        technologies: "",
        team: "",
        joinCodeDB: "",
        userID: "",
      },
      isLoading: false,
      editConceptPaperData: {},
      errors: {},
    };
  },
  components: {
    PageLoader,
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
        //const responseAllPapers = await conceptPaperService.loadConceptPaper();
        //this.conceptPapers = responseAllPapers.data;

        console.log(response.data.name);
        this.conceptPaper.name = response.data.name;
        this.conceptPaper.course = response.data.course;
        this.conceptPaper.currentSemester = response.data.currentSemester;
        this.conceptPaper.image = response.data.image;
        this.conceptPaper.idea = response.data.idea;
        this.conceptPaper.basics = response.data.basics;
        this.conceptPaper.niceToHave = response.data.niceToHave;
        this.conceptPaper.technologies = response.data.technologies;
        this.conceptPaper.team = response.data.team;
        this.conceptPaper.joinCodeDB = response.data.join_code;
        this.conceptPaper.userID = response.data.user_id;

        this.conceptPapers = response.data;

        this.editConceptPaperData = {...response.data};
        console.log(this.editConceptPaperData);

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
    updateConceptPaper: async function () {
      try {
        const formData = new FormData();
        formData.append("name", this.editConceptPaperData.name);
        formData.append("course", this.editConceptPaperData.course);
        formData.append("currentSemester", this.editConceptPaperData.currentSemester);
        formData.append("image", this.editConceptPaperData.image);
        formData.append("idea", this.editConceptPaperData.idea);
        formData.append("basics", this.editConceptPaperData.basics);
        formData.append("niceToHave", this.editConceptPaperData.niceToHave);
        formData.append("technologies", this.editConceptPaperData.technologies);
        formData.append("team", this.editConceptPaperData.team);
        formData.append("join_code", this.conceptPaper.joinCodeDB);
        formData.append("user_id", this.conceptPaper.userID);
        formData.append("_method", "put");

        //const response = await axios.post(`conceptPaper/lobby/${this.conceptPaper.joinCodeDB}`, formData);
        const response = await conceptPaperService.updateConceptPaper(
          this.editConceptPaperData.id,
          formData
        );

        this.conceptPapers.map((conceptPaper) => {
          if (conceptPaper.id == response.data.id) {
            for (let key in response.data) {
              conceptPaper[key] = response.data[key];
            }
          }
        });
        this.flashMessage.success({
          message: "conceptPaper updated succesfully!",
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