<template>
  <div class="container-fluid" style="margin-top: 160px !important">
    <PageLoader :loaded="isLoading" />
    <h1 class="mt-4"></h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item">
        <router-link to="/">conForm</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link to="/conceptPaperCreator"
          >Konzeptpapier Creator</router-link
        >
      </li>
      <li class="breadcrumb-item active">
        {{ $t("conceptPaper.conceptPaper") }}
      </li>
    </ol>
    <RightSideBar />
    <div class="container">
      <h1 class="mt-4">
        {{ $t("conceptPaper.conceptPaper") }}: {{ conceptPaper.name }}
      </h1>
      <div class="card mb-4">
        <div class="card-header d-flex">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#inviteModal">
         {{ $t("conceptPaper.inviteTeam") }}
        </button>
        </div>
        <div class="card-body">
          <div>
            <div class="form-group">
              <table class="table">
                <td>
                  <label for="name">{{ $t("conceptPaper.projectName") }}</label>
                  <input
                    type="text"
                    v-model="editConceptPaperData.name"
                    class="form-control"
                    id="name"
                    :placeholder="$t('conceptPaper.placeholders.name')"
                  />
                  <div class="invalid-feedback" v-if="errors.name">
                    {{ errors.name[0] }}
                  </div>
                </td>
                <td>
                  <label for="course">{{
                    $t("conceptPaper.courseName")
                  }}</label>
                  <input
                    type="text"
                    v-model="editConceptPaperData.course"
                    class="form-control"
                    id="course"
                    :placeholder="$t('conceptPaper.placeholders.course')"
                  />
                  <div class="invalid-feedback" v-if="errors.course">
                    {{ errors.course[0] }}
                  </div>
                </td>
                <td>
                  <label for="currentSemester">{{
                    $t("conceptPaper.semester")
                  }}</label>
                  <input
                    type="text"
                    v-model="editConceptPaperData.currentSemester"
                    class="form-control"
                    id="currentSemester"
                    :placeholder="$t('conceptPaper.placeholders.semester')"
                  />
                  <div class="invalid-feedback" v-if="errors.currentSemester">
                    {{ errors.currentSemester[0] }}
                  </div>
                </td>
              </table>
            </div>
            <div class="form-group">
              <label for="image">{{ $t("conceptPaper.logo") }}</label>
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
              <label for="idea">{{ $t("conceptPaper.idea") }}</label>
              <textarea
                v-model="editConceptPaperData.idea"
                class="form-control"
                id="idea"
                :placeholder="$t('conceptPaper.placeholders.idea')"
                rows="6"
              />
              <div class="invalid-feedback" v-if="errors.idea">
                {{ errors.idea[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="basics">{{ $t("conceptPaper.mustHave") }}</label>
              <textarea
                v-model="editConceptPaperData.basics"
                class="form-control"
                id="basics"
                :placeholder="$t('conceptPaper.placeholders.basics')"
                rows="8"
              />
              <div class="invalid-feedback" v-if="errors.basics">
                {{ errors.basics[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="niceToHave">{{
                $t("conceptPaper.niceToHave")
              }}</label>
              <textarea
                v-model="editConceptPaperData.niceToHave"
                class="form-control"
                id="niceToHave"
                :placeholder="$t('conceptPaper.placeholders.niceToHave')"
                rows="8"
              />
              <div class="invalid-feedback" v-if="errors.niceToHave">
                {{ errors.niceToHave[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="technologies">{{
                $t("conceptPaper.technologies")
              }}</label>
              <textarea
                v-model="editConceptPaperData.technologies"
                class="form-control"
                id="technologies"
                :placeholder="$t('conceptPaper.placeholders.tech')"
                rows="5"
              />
              <div class="invalid-feedback" v-if="errors.technologies">
                {{ errors.technologies[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="team">{{ $t("conceptPaper.team") }}</label>
              <textarea
                v-model="editConceptPaperData.team"
                class="form-control"
                id="team"
                :placeholder="$t('conceptPaper.placeholders.team')"
                rows="5"
              />
              <div class="invalid-feedback" v-if="errors.team">
                {{ errors.team[0] }}
              </div>
            </div>
            <div class="text-right">
               <button class="button" @click="exportAsPDF">
                {{ $t("conceptPaper.pdfExport") }}
              </button>
              <button class="button" @click="exportAsDOCX">
                {{ $t("conceptPaper.exportDocx") }}
              </button>
              <button type="button" class="btn btn-default">
                {{ $t("conceptPaper.cancel") }}
              </button>
              <button
                id="notifyBtn"
                class="btn btn-primary"
                @click="updateConceptPaper"
              >
                <span class="fa fa-check"></span>
                {{ $t("conceptPaper.update") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InviteTeam :joinCode="conceptPaper.joinCodeDB"/>
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
import RingBell from "../components/RingBell.vue";
import RightSideBar from "../components/RightSidebar.vue";
import InviteTeam from "../components/modals/InviteYourTeam.vue";

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
    RingBell,
    RightSideBar,
    InviteTeam
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
        formData.append('name', this.editConceptPaperData.name);
        formData.append('course', this.editConceptPaperData.course);
        formData.append(
          'currentSemester',
          this.editConceptPaperData.currentSemester
        );
        formData.append('image', this.editConceptPaperData.image);
        formData.append('idea', this.editConceptPaperData.idea);
        formData.append('basics', this.editConceptPaperData.basics);
        formData.append('niceToHave', this.editConceptPaperData.niceToHave);
        formData.append('technologies', this.editConceptPaperData.technologies);
        formData.append('team', this.editConceptPaperData.team);
        formData.append('join_code', this.conceptPaper.joinCodeDB);
        formData.append('user_id', this.conceptPaper.userID);
        formData.append('_method', "put");

        const response = await conceptPaperService.updateConceptPaper(
          this.editConceptPaperData.id,
          formData
        );
        /**
        this.conceptPapers.map((conceptPaper) => {
          if (conceptPaper.id == response.data.id) {
            for (let key in response.data) {
              conceptPaper[key] = response.data[key];
            }
          }
        }); */

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
      this.notify();
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
      const documentCreator = new DocumentCreator();
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
      const document = documentCreator.create([
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
    notify() {
      const $button = document.getElementById("notifyBtn");
      const $bell = document.getElementById("notification");

      $button.addEventListener("click", function (event) {
        const count = Number($bell.getAttribute("data-count")) || 0;

        $bell.setAttribute("data-count", count + 1);
        $bell.classList.add("show-count");
        $bell.classList.add("notify");
      });

      $bell.addEventListener("animationend", function (event) {
        $bell.classList.remove("notify");
      });
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