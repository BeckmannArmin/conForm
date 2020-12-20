<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <button class="btn btn-primary" @click="showUsers = !showUsers">
              <i class="fas fa-users"></i>
            </button>
          </div>
          <div class="card-body" v-if="showUsers">
            <li v-for="user in users" :key="user.id">
              {{ user.name }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: null,
      showUsers: false,
    };
  },
  mounted() {
    Echo.join("users")
      .here((users) => {
        this.users = users;
        console.log(users);
      })
      .joining((user) => {
        console.log(user.name);
        this.users.push(user);
      })
      .leaving((user) => {
        console.log(user.name);
        this.users.splice(this.users.indexOf(user), 1);
      });
  },
  methods: {
    showActiveUsersList() {},
  },
};
</script>