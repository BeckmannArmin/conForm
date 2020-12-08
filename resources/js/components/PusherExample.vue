<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Example Comp</div>
          <div class="card-body">
            <li v-for="user in users">
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
    };
  },
  mounted() {
    Echo.join('users')
      .here((users) => {
        this.users = users;
      })
      .joining((user) => {
        console.log(user.name);
        this.users.push(user);
      })
      .leaving((user) => {
        console.log(user.name);
        this.users.splice(this.users.indexOf(user),1)
      });
  },
};
</script>