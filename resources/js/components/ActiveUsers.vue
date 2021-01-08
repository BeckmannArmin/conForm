<!--
<template>
<div class="media-body">
  <div v-for="user in users" :key="user.id" class="media">
   <h5> {{ user.name }} </h5>
   <p> {{ user.role }} </p>
  </div>
</div>
</template>

<style scoped>

.media {
  display: flex;
  align-items: flex-start;
  flex-flow: column;
}

.media-body {
  flex: 1;
}

</style>

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
      })
      .joining((user) => {
        this.users.push(user);
      })
      .leaving((user) => {
        this.users.splice(this.users.indexOf(user), 1);
      });
  },
};
</script>
-->