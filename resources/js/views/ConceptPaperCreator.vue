<template>
  <main>
    <div class="container-fluid" style="margin-top: 160px !important">
      <h1 class="mt-4">Dashboard</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item">
          <router-link to="/">conForm</router-link>
        </li>
        <li class="breadcrumb-item active">Konzeptpapiere</li>
      </ol>

      <div class="card mb-4">
        <div class="card-header d-flex">
          <span>
            <i class="fas fa-chart-area mr-1"></i>
            Übersicht
          </span>
          <button
            class="btn btn-primary btn-sm ml-auto"
            v-on:click="showNewconceptPaperModal"
          >
            <span>
              <i class="fa fa-plus" />
            </span>
            Hinzufügen
          </button>
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <td>#id</td>
                <td>Name</td>
                <td>Kurs</td>
                <td>Aktuelles currentSemester</td>
                <td>Image</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(conceptPaper, index) in conceptPapers" :key="index">
                <td>{{ conceptPaper.id }}</td>
                <td>{{ conceptPaper.name }}</td>
                <td>{{ conceptPaper.course }}</td>
                <td>{{ conceptPaper.currentSemester }}</td>
                <td>
                  <img
                    :src="`${$store.state.serverPath}/storage/${conceptPaper.image}`"
                    class="image-wd"
                  />
                </td>
                <td>
                  <button
                    class="btn btn-primary btn-sm"
                    v-on:click="showPaper(conceptPaper)"
                  >
                    <span class="far fa-eye"></span>
                  </button>
                  <button
                    class="btn btn-primary btn-sm"
                    v-on:click="editconceptPaper(conceptPaper)"
                  >
                    <span class="fa fa-edit"></span>
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    v-on:click="deleteConceptPaper(conceptPaper)"
                  >
                    <span class="fa fa-trash"></span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-center" v-show="moreExists">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              v-on:click="loadMore"
            >
              <span class="fa fa-arrow-down"></span>Load more
            </button>
          </div>
        </div>
      </div>

      <b-modal
        ref="newconceptPaperModal"
        hide-footer
        title="Add new concept paper"
      >
        <div class="d-block">
          <form v-on:submit.prevent="createConceptPaper">
            <div class="form-group">
              <label for="name">Projektname eingeben</label>
              <input
                type="text"
                v-model="conceptPaperData.name"
                class="form-control"
                id="name"
                placeholder="Name des Projektes"
              />
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="name">Kurs eingeben</label>
              <input
                type="text"
                v-model="conceptPaperData.course"
                class="form-control"
                id="course"
                placeholder="Kurs"
              />
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="name">Aktuelles Semester eingeben</label>
              <input
                type="text"
                v-model="conceptPaperData.currentSemester"
                class="form-control"
                id="currentSemester"
                placeholder="Bsp.: WS20/21"
              />
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="image">Logo hochladen (Optional)</label>
              <div v-if="conceptPaperData.image.name">
                <img
                  src=""
                  ref="newconceptPaperImageDisplay"
                  class="image-wd"
                />
              </div>
              <input
                type="file"
                v-on:change="attachImage"
                ref="newconceptPaperImage"
                class="form-control"
                id="image"
              />
            </div>
            <div class="form-group">
              <label for="name">UUID</label>
              <input
                type="text"
                v-model="conceptPaperData.uuid"
                class="form-control"
                id="uuid"
                readonly
              />
            </div>

            <hr />
            <div class="text-right">
              <button
                type="button"
                class="btn btn-default"
                v-on:click="hideNewconceptPaperModal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">
                <span class="fa fa-check"></span>Save
              </button>
            </div>
          </form>
        </div>
      </b-modal>

      <b-modal
        ref="editconceptPaperModal"
        hide-footer
        title="Edit conceptPaper"
      >
        <div class="d-block">
          <form v-on:submit.prevent="updateConceptPaper">
            <div class="form-group">
              <label for="name">Projektname eingeben</label>
              <input
                type="text"
                v-model="editConceptPaperData.name"
                class="form-control"
                id="name"
                placeholder="Name des Projektes"
              />
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="name">Kurs eingeben</label>
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
            </div>
            <div class="form-group">
              <label for="name">Aktuelles currentSemester eingeben</label>
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
            </div>
            <div class="form-group">
              <label for="image">Choose an image</label>
              <div>
                <img
                  :src="`${$store.state.serverPath}/storage/${editConceptPaperData.image}`"
                  ref="editconceptPaperImageDisplay"
                  class="image-wd"
                />
              </div>
              <input
                type="file"
                v-on:change="editAttachedImage"
                ref="editconceptPaperImage"
                class="form-control"
                id="image"
              />
            </div>

            <hr />
            <div class="text-right">
              <button
                type="button"
                class="btn btn-default"
                v-on:click="hideEditconceptPaperModal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">
                <span class="fa fa-check"></span>Update
              </button>
            </div>
          </form>
        </div>
      </b-modal>
    </div>
  </main>
</template>

<script>
import * as conceptPaperService from "../services/conceptPaper_service";
import { uuid } from "vue-uuid";
import { http } from "../services/http_service";
export default {
  name: "conceptPaper",
  data() {
    return {
      conceptPapers: [],
      conceptPaperData: {
        name: "",
        course: "",
        currentSemester: "",
        image: "",
        uuid: "",
      },
      moreExists: false,
      nextPage: 0,
      editConceptPaperData: {},
      errors: {},
    };
  },
  mounted() {
    this.loadConceptPaper();
  },
  methods: {
    generateUUID() {
      this.conceptPaperData.uuid = uuid.v1();
      console.log(this.conceptPaperData.uuid);
    },

    loadConceptPaper: async function () {
      try {
        const response = await conceptPaperService.loadConceptPaper();
        console.log(response);
        this.conceptPapers = response.data;
        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.moreExists = false;
        }
      } catch (error) {
        this.flashMessage.error({
          message: "Some error occured. Please refresh the page!",
          time: 5000,
        });
      }
    },
    attachImage() {
      this.conceptPaperData.image = this.$refs.newconceptPaperImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newconceptPaperImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.conceptPaperData.image);
    },
    hideNewconceptPaperModal() {
      this.$refs.newconceptPaperModal.hide();
    },
    showNewconceptPaperModal() {
      this.generateUUID();
      this.$refs.newconceptPaperModal.show();
    },
    createConceptPaper: async function () {
      let formData = new FormData();
      formData.append("name", this.conceptPaperData.name);
      formData.append("course", this.conceptPaperData.course);
      formData.append("currentSemester", this.conceptPaperData.currentSemester);
      formData.append("image", this.conceptPaperData.image);
      formData.append("uuid", this.conceptPaperData.uuid);

      try {
        const response = await conceptPaperService.createConceptPaper(formData);
        this.conceptPapers.unshift(response.data);
        this.hideNewconceptPaperModal();
        this.flashMessage.success({
          message: "Paper stored succesfully!",
          time: 5000,
        });
        this.conceptPaperData = {
          name: "",
          course: "",
          currentSemester: "",
          image: "",
        };
      } catch (error) {
        console.log(error.response.status);
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;

          default:
            this.flashMessage.error({
              message: "Some error occured. Please try again!",
              time: 5000,
            });
            break;
        }
      }
    },
    deleteConceptPaper: async function (conceptPaper) {
      if (
        !window.confirm(`Bist du sicher, dass du das Paper ${conceptPaper.name} löschen willst?`)
      ) {
        return;
      }

      try {
        await conceptPaperService.deleteConceptPaper(conceptPaper.id);

        /**
         * filtr the conceptPapers array and match the id of each conceptPaper
         */
        this.conceptPapers = this.conceptPapers.filter((obj) => {
          return obj.id != conceptPaper.id;
        });

        this.flashMessage.success({
          message: "Paper erfolgreich gelöscht!",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000,
        });
      }
    },
    hideEditconceptPaperModal() {
      this.$refs.editconceptPaperModal.hide();
    },
    showEditconceptPaperModal() {
      this.$refs.editconceptPaperModal.show();
    },
    editAttachedImage() {
      this.editConceptPaperData.image = this.$refs.editconceptPaperImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.editconceptPaperImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.editConceptPaperData.image);
    },
    updateConceptPaper: async function () {
      try {
        const formData = new FormData();
        formData.append("name", this.editConceptPaperData.name);
        formData.append("image", this.editConceptPaperData.image);
        formData.append("course", this.editConceptPaperData.course);
        formData.append("currentSemester", this.editConceptPaperData.currentSemester);
        formData.append("idea", "");
        formData.append("basics", "");
        formData.append("niceToHave", "");
        formData.append("technologies", "");
        formData.append("team", "");
        //formData.append('uuid', this.editConceptPaperData.uuid);
        formData.append("_method", "put");

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
        this.hideEditconceptPaperModal();
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
    editconceptPaper(conceptPaper) {
      this.editConceptPaperData = { ...conceptPaper };
      this.showEditconceptPaperModal();
    },
    showPaper(conceptPaper) {
      const joinCode = conceptPaper.join_code;
      //this.$router.push({ path: `/conceptPaper/lobby/${joinCode}` })
      this.$router.push({
        name: "conceptPaper",
        params: { joincode: joinCode },
      });
    },
    loadMore: async function () {
      try {
        const response = await conceptPaperService.loadMore(this.nextPage);
        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.moreExists = false;
        }

        response.data.data.forEach((data) => {
          this.conceptPapers.push(data);
        });
      } catch (error) {
        this.flashMessage.error({
          message: "Some error occurred during loading more conceptPapers",
          time: 5000,
        });
      }
    },
  },
};
</script>

