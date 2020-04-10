<template>
  <div class="card">
    <div class="card__title">{{ data.clinicID || data.formID ? 'ID: ' + (data.clinicID ? data.clinicID : data.formID)  : 'Email: ' }}</div>

    <hr noshade />

    <div class="card__section">
      <div class="card__section__title">{{ data.clinicName ? 'Name: ' + data.clinicName : data.clinic ? 'ClinicID: ' + data.clinic : 'Email ' }}</div>

      <div class="card__section__text">Description: {{ data.description }}</div>
    </div>

    <!-- If store.doctor -->
    <div class="btn-group--horizontal" v-if="$store.getters.getRole">
      <button type="submit" class="btn-group__link" @click.prevent="acceptBtn(true)">ACCEPT</button>
      <button
        type="submit"
        class="btn-group__link text-danger btn-danger"
        @click.prevent="acceptBtn(false)"
      >DECLINE</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    async acceptBtn(condition) {
      try {
        if (condition) {
          const res = await this.$store.dispatch("checkForm", true);
          console.log(res)
        } else {
          const res = await this.$store.dispatch("checkForm", false);
          console.log(res)
        }
      } catch (e) {
          console.log(e)
      } finally {
          this.$emit('reloadCards')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// .card:hover {
//     cursor: pointer;
// }
</style>