<template>
  <div>
    <navBar />

    <div class="body-container">
      <div class="form form-bar">
<div class="form__title">
        <h4>JOIN US!</h4>
      </div>

      <small class="form__text text-danger" v-show="errorMessage !== ''">{{errorMessage}}</small>

      <label for="emailInput">Email</label>
      <input
        v-model="email"
        type="email"
        class="form__control"
        :class="{'border-danger': !validEmail() && email!=''}"
        id="emailInput"
        placeholder="Email"
      />

      <label for="passwordInput">Password</label>
      <input
        v-model="password"
        type="password"
        class="form__control"
        :class="{'border-danger': (!validPassword(password) && password!='')}"
        id="passwordInput"
        placeholder="Password must be longer than 6 characters."
      />

      <label for="nameInput">Name</label>
      <input v-model="name" type="text" class="form__control" id="nameInput" placeholder="Name"/>

      <label for="phoneInput">Phone number</label>
      <input v-model="phone" type="text" maxlength="12" class="form__control" id="phoneInput" placeholder="Phone number"/>

      <label for="dobInput">Date of birth</label>
      <input v-model="date" type="date" class="form__control" id="dobInput"/>

      <label for="identityInput">Identity card serial</label>
      <input v-model="identity" type="text" maxlength="12" class="form__control" id="identityInput" placeholder="Identity serial"/>

      <div class="btn-group">
      <button class="btn-group__link" @click.prevent="clickSignup({email, password})">SIGN UP</button>

      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import validator from 'validator'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      phone: "",
      dob: "",
      identity: "",
      errorMessage: ""
    }
  },
  methods: {
    validEmail() {
      return validator.isEmail(this.email);
    },
    validPassword(p) {
      return p.length >= 6;
    },
    clickSignup({email, password}) {
      //placeholder
      this.errorMessage = ''
      this.$store.dispatch('userSignup', {email, password})
      .then(() => {})
      .catch(e => this.errorMessage = e || 'Signup falied.')
    },
  }
};
</script>

<style>
</style>