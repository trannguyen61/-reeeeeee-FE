<template>
  <div>
    <div class="body-container">
      <div class="form form--bar">
        <div class="form__title">
          <h4>JOIN US!</h4>
        </div>

        <warning :error-message="errorMessage" />
        <label for="emailInput">Email *</label>
        <input
          id="emailInput"
          v-model="email"
          type="email"
          class="form__control"
          :class="{ 'border-danger': !validEmail() && email != '' }"
          placeholder="Email"
        />

        <label for="passwordInput">Password *</label>
        <input
          id="passwordInput"
          v-model="password"
          type="password"
          class="form__control"
          :class="{
            'border-danger': !validPassword(password) && password != ''
          }"
          placeholder="Password must be longer than 6 characters."
        />

        <label for="nameInput">Name *</label>
        <input
          id="nameInput"
          v-model="name"
          type="text"
          class="form__control"
          placeholder="Name"
        />

        <label for="phoneInput">Phone number *</label>
        <input
          id="phoneInput"
          v-model="phone"
          type="text"
          maxlength="12"
          class="form__control"
          placeholder="Phone number"
        />

        <label for="dobInput">Date of birth</label>
        <input id="dobInput" v-model="dob" type="date" class="form__control" />

        <label for="identityInput">Identity card serial</label>
        <input
          id="identityInput"
          v-model="identity"
          type="text"
          maxlength="12"
          class="form__control"
          placeholder="Identity serial"
        />

        <div class="btn-group mb-0">
          <button
            class="btn-group__link mt-30 mb-0"
            :disabled="
              !validEmail() || !validPassword(password) || !name || !phone
            "
            @click.prevent="clickSignup()"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validator from "validator";
import Warning from "../components/Warning";

export default {
  components: { Warning },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      phone: "",
      dob: "",
      identity: "",
      errorMessage: ""
    };
  },
  methods: {
    validEmail() {
      return validator.isEmail(this.email);
    },
    validPassword(p) {
      return p.length >= 6;
    },
    clickSignup() {
      const payload = {
        email: this.email,
        userName: this.name,
        phoneNumber: this.phone,
        userPassword: this.password,
        dateOfBirth: this.dob,
        idCardSerial: this.identity
      };
      Object.keys(this.$data).forEach(key => (this.$data[key] = ""));

      this.$store
        .dispatch("userSignup", payload)
        .then(response => {
          console.log(response);
          this.$router.push({ name: "Home" });
        })
        .catch(e => (this.errorMessage = e.error || "Signup falied."));
    }
  }
};
</script>

<style></style>
