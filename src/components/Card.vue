<template>
  <div class="card">
    <div v-if="role === 'patient' || data.patientID">
      <div class="card__title">
        {{
          data.clinicID || data.formID
            ? "ID: " + (data.clinicID ? data.clinicID : data.formID)
            : "Email: "
        }}
      </div>
      <hr noshade />

      <div class="card__section">
        <div class="card__section__title">
          {{
            data.clinicName
              ? "Name: " + data.clinicName
              : data.clinic
              ? "ClinicID: " + data.clinic
              : "Email "
          }}
        </div>

        <div v-if="data.clinicID" class="card__section__text">
          Address: {{ data.street + " " + data.district + " " + data.city }}
        </div>
        <div v-if="data.formID" class="card__section__text">
          Resolved:
          {{
            data.resolved === null
              ? "Pending"
              : data.resolved
              ? "Accepted"
              : "Declined"
          }}
        </div>

        <div class="card__section__text">
          Description: {{ data.description }}
        </div>
      </div>
    </div>

    <div v-if="role === 'doctor'">
      <div class="card__title">
        {{
          "Check-up Date: " +
            data.checkUpDate.replace("T", " ").replace(":00.000Z", "")
        }}
      </div>

      <hr noshade />

      <div class="card__section">
        <div class="card__section__title">{{ "Patient: " + data.patient }}</div>

        <div class="card__section__text">
          Description: {{ data.description }}
        </div>
      </div>

      <!-- If store.doctor -->
      <div class="btn-group--horizontal">
        <button
          type="submit"
          class="btn-group__link"
          @click.prevent="acceptBtn(true)"
        >
          ACCEPT
        </button>
        <button
          type="submit"
          class="btn-group__link text-danger btn-danger"
          @click.prevent="acceptBtn(false)"
        >
          DECLINE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import formApi from "../../api/form";

export default {
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    role() {
      return this.$store.getters.getRole;
    }
  },
  methods: {
    async acceptBtn(condition) {
      formApi
        .checkForm({
          formID: this.data.formID,
          value: condition
        })
        .then(res => console.log(res))
        .catch(e => console.log(e))
        .finally(() => {
          this.$emit("reloadCards");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
// .card:hover {
//     cursor: pointer;
// }
</style>
