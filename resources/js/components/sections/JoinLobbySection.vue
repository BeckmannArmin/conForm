<template>
  <section id="joinLobby" class="join-section">
    <div class="join-container py-16 mover">
      <div class="column">
        <div class="col">
          <img src="../../../assets/welcome-cats.svg" />
        </div>
        <div class="col">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#joinLobbyModal"
          >
            Launch demo modal
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.join-section {
  .join-container {
       display: flex;
      justify-content: center;
      align-content: center;
    .column {
        display: flex;
        flex-flow: column;
        align-items: center;
      .col {
          max-width: 50%;
      }
    }

    .col:last-child {
        display: flex;
        justify-content: center;
    }
  }
}
</style>
