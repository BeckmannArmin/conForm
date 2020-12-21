<template>
  <div class="container">
    <PageLoader :loaded="isLoading" />
    <h1 class="mt-4">Konzeptpapier: {{ conceptPaper.name }}</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item">
        <router-link to="/">conForm</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link to="/conceptPaperCreator"
          >Konzeptpapier Creator</router-link
        >
      </li>
      <li class="breadcrumb-item active">Konzeptpapiere</li>
    </ol>

    <div class="card mb-4">
      <div class="card-header d-flex">
        <button
          class="btn btn-info text-white copy-btn ml-auto"
          @click.stop.prevent="copyTestingCode"
        >
          Lade dein Team ein
        </button>
        <input
          type="hidden"
          id="testing-code"
          :value="conceptPaper.joinCodeDB"
        />
      </div>
      <div class="card-body">
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
                <div class="invalid-feedback" v-if="errors.course">
                  {{ errors.course[0] }}
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
                <div class="invalid-feedback" v-if="errors.currentSemester">
                  {{ errors.currentSemester[0] }}
                </div>
              </td>
            </table>
          </div>
          <div class="form-group">
            <label for="image">Logo</label>
            <div>
              <img
                :src="`${$store.state.serverPath}/storage/${editConceptPaperData.image}`"
                class="image-wd"
                ref="editConceptPaperImageDisplay"
              />
            </div>
            <input
              type="file"
              v-on:change="editAttachedImage"
              ref="editConceptPaperImage"
              class="form-control"
              id="image"
            />
            <div class="invalid-feedback" v-if="errors.image">
              {{ errors.image[0] }}
            </div>
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
            <div class="invalid-feedback" v-if="errors.idea">
              {{ errors.idea[0] }}
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
            <div class="invalid-feedback" v-if="errors.basics">
              {{ errors.basics[0] }}
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
            <div class="invalid-feedback" v-if="errors.niceToHave">
              {{ errors.niceToHave[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="technologies">Technologien</label>
            <textarea
              v-model="editConceptPaperData.technologies"
              class="form-control"
              id="technologies"
              placeholder="Technologien in Stichpunkten beschreiben."
              rows="5"
            />
            <div class="invalid-feedback" v-if="errors.technologies">
              {{ errors.technologies[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="team">Team</label>
            <textarea
              v-model="editConceptPaperData.team"
              class="form-control"
              id="team"
              placeholder="Max Mustermann (matr_Nr)"
              rows="5"
            />
            <div class="invalid-feedback" v-if="errors.team">
              {{ errors.team[0] }}
            </div>
          </div>
          <div class="text-right">
            <button class="button" @click="exportAsDOCX">Export DOCX</button>
            <button class="button" @click="exportAsPDF">Export PDF</button>
            <button type="button" class="btn btn-default">Cancel</button>
            <button class="btn btn-primary" @click="updateConceptPaper">
              <span class="fa fa-check"></span>
              Update
            </button>
          </div>
        </div>
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

import { saveAs } from "file-saver";
import { Packer } from "docx";

import { DocumentCreatorDOCX } from "../services/conceptPaperDOCXGenerator_service";

import { DocumentCreatorPDF } from "../services/conceptPaperPDFGenerator_service";

import { jsPDF } from "jspdf";

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
    this.loadConceptPaper();
  },
  methods: {
    loadConceptPaper: async function () {
      try {
        this.isLoading = true;
        const response = await axios.get(`conceptPaper/lobby/${this.joinCode}`);
        //const responseAllPapers = await conceptPaperService.loadConceptPaper();
        //this.conceptPapers = responseAllPapers.data;

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

        this.editConceptPaperData = { ...response.data };
        console.log(this.editConceptPaperData);

        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      } catch (error) {
        this.flashMessage.error({
          message: "Oops, etwas ist schiefgelaufen. Bitte lade die Seite neu.",
          time: 5000,
        });
      }
    },
    updateConceptPaper: async function () {
      try {
        const formData = new FormData();
        formData.append("name", this.editConceptPaperData.name);
        formData.append("course", this.editConceptPaperData.course);
        formData.append(
          "currentSemester",
          this.editConceptPaperData.currentSemester
        );
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
          message: "Konzeptpapier wurde erfolgreich geupdated!",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    editAttachedImage() {
      this.editConceptPaperData.image = this.$refs.editConceptPaperImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.editConceptPaperImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.editConceptPaperData.image);
    },
    copyTestingCode() {
      let testingCodeToCopy = document.querySelector("#testing-code");
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();
      try {
        var successful = document.execCommand("copy");
        var msg = successful
          ? this.flashMessage.success({
              message: "Join Code erfolgreich generiert",
              time: 5000,
            })
          : this.flashMessage.error({
              message: "Oops, etwas ist schiefgelaufen",
              time: 5000,
            });
      } catch (err) {
        alert("Oops, kopieren nicht möglich");
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    exportAsDOCX: function () {
      const documentCreatorDOCX = new DocumentCreatorDOCX();
      const {
        name,
        course,
        currentSemester,
        idea,
        basics,
        niceToHave,
        technologies,
        team,
      } = this.editConceptPaperData;
      const document = documentCreatorDOCX.create([
        name,
        course,
        currentSemester,
        idea,
        basics,
        niceToHave,
        technologies,
        team,
      ]);

      Packer.toBlob(document).then((blob) => {
        console.log(blob);
        saveAs(
          blob,
          "Konzeptpapier_" + this.editConceptPaperData.name + ".docx"
        );
        console.log("Document created successfully");
      });
    },
    exportAsPDF: function () {
        const documentCreatorPDF = new DocumentCreatorPDF();
        const {
        name,
        course,
        currentSemester,
        idea,
        basics,
        niceToHave,
        technologies,
        team,
      } = this.editConceptPaperData;
      const document = documentCreatorPDF.create([
        name,
        course,
        currentSemester,
        idea,
        basics,
        niceToHave,
        technologies,
        team,
      ]);
      document.save("Konzeptpapier_" + name + ".pdf");
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