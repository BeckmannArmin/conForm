<template>
  <div class="locale-changer container">
    <select v-model="localLang">
      <option value="choose-one" class="choose-lang" disabled="true">{{ $t("footer.chooselang") }}</option>
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { 
      langs: ['de', 'en'],
      localLang: this.$i18n.locale
     }
  },
  watch: {
    localLang(localLang) {
     console.log(localLang);
     this.$i18n.locale = localLang;
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 1rem 0 1rem !important;
}
  
  .dark {
    select {
      background: #20232a;
      color: #EBEDF0;
    .choose-lang {
      color: #EBEDF0;
    }
    }

  }
</style>