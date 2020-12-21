<template>
    <div class="right-sidebar-mini" :class="{ rightSidebar: rightToggled }">
      <div class="right-sidebar-panel p-0">
        <div class="iq-card shadow-none">
          <div class="iq-card-body p-0">
            <!-- users -->
            <div class="media-height p-3">
              <ActiveUsers />
            </div>
            <!-- the toggle -->
            <div class="right-sidebar-toggle bg-primary mt-3">
              <i
                class="fas fa-chevron-left"
                v-if="leftToggled"
                @click="toggleLeft"
              ></i>
              <i
                class="fas fa-chevron-right"
                v-if="rightToggled"
                @click="toggleRight"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ActiveUsers from "../components/ActiveUsers.vue";
export default {
    data() {
        return {
              leftToggled: true,
            rightToggled: false,
        }
    },
    components: {
        ActiveUsers
    },
    methods: {
        toggleLeft() {
      this.leftToggled = false;
      this.rightToggled = true;
    },
    toggleRight() {
      this.leftToggled = true;
      this.rightToggled = false;
    },
    }
}
</script>

<style scoped>
.mt-3 {
  margin-top: 1rem !important;
}
.right-sidebar-toggle {
  position: absolute;
  margin-left: -44px;
  background: #fff;
  padding: 15px;
  display: inline;
  top: 0;
  z-index: 99;
  border-radius: 30px 0px 0px 30px;
  box-shadow: -10px 5px 20px rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
.bg-primary {
  color: #fff;
  background: #6c72ae !important;
}
.iq-card-body {
  padding: 15px;
}
.shadow-none {
  box-shadow: none !important;
}
.iq-card {
  background: #fff;
  -webkit-border-radius: 15px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: none;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(44, 101, 144, 0.1);
  box-shadow: 0px 0px 20px 0px rgba(44, 101, 144, 0.1);
}
.p-0 {
  padding: 0 !important;
}
.right-sidebar-panel {
  background-color: #fff;
  box-shadow: 0px 0px 25px 0px rgba(45, 69, 95, 0.1);
  height: 91vh;
  padding: 15px;
  overflow-y: scroll;
}
.rightSidebar {
  transform: translateX(calc(10% + -1em)) !important;
}
.right-sidebar-mini {
  z-index: 100;
  position: fixed;
  width: 260px;
  right: 0;
  transform: translateX(calc(111% + -2em));
  transition: all 0.5s ease;
}
</style>
