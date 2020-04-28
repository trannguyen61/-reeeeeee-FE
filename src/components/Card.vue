<template>
  <div class="card">
    <div v-if="condition()">
      <div class="card__title">
        {{ dataObj[dataType].title }}
      </div>
      <hr noshade />

      <div class="card__section">
        <div class="card__section__title">
          {{ dataObj[dataType].sectionTitle }}
        </div>

        <div
          v-for="text in dataObj[dataType].sectionText"
          :key="text"
          class="card__section__text"
        >
          {{ text }}
        </div>
      </div>
    </div>

    <div v-else>
      <div class="card__title">
        {{ "Check-up Date: " + getDate() }}
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
    },
    dataType: {
      type: String,
      default: ""
    }
  },
  computed: {
    role() {
      return this.$store.getters.getRole;
    },
    dataObj() {
      return {
        clinic: {
          title: `Clinic ID: ${this.data.clinicID}`,
          sectionTitle: `Clinic name: ${this.data.clinicName}`,
          sectionText: [
            `Address: ${this.data.street}, ${this.data.district}, ${this.data.city}`,
            `Description: ${this.data.description}`
          ]
        },
        form: {
          title: `Form ID: ${this.data.formID}`,
          sectionTitle: `Clinic ID: ${this.data.clinic}`,
          sectionText: [
            `Resolved: ${
              this.data.resolved === null
                ? "Pending"
                : this.data.resolved
                ? "Accepted"
                : "Declined"
            }`,
            `Description: ${this.data.description}`
          ]
        },
        patient: {
          title: `Patient email: ${this.data.email}`,
          sectionTitle: `Name: ${this.data.userName}`,
          sectionText: [
            `Medical history: ${this.data.medicalHistory}`,
            `Symptom: ${this.data.symptom}`
          ]
        },
        prescription: {
          title: `Diagnosis: ${this.data.diagnosis}`,
          sectionTitle: `Description: ${this.data.description}`,
          sectionText: [
            `Check-up date: ${this.getDate()}`,
            `Clinic: ${this.data.clinic}`
          ]
        }
      };
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
    },
    getDate() {
      console.log("GET");
      if (this.data.checkUpDate)
        return this.data.checkUpDate.replace("T", " ").replace(":00.000Z", "");
    },
    condition() {
      return this.role === "patient" || this.dataType === "patient";
    }
  }
};
</script>

<style lang="scss" scoped>
// .card:hover {
//     cursor: pointer;
// }
</style>
