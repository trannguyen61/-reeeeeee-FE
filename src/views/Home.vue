<template>
  <div class="home">
    <div class="body-container body-container--mt-80">
      <!-- Hide login form when user is already logged in -->
      <div
        class="btn-group"
        :style="{ visibility: $store.getters.getToken ? 'hidden' : 'visible' }"
      >
        <div class="form">
          <input
            id="emailInput"
            v-model="email"
            type="email"
            class="form__control form__control--ml50"
            :class="{ 'border-danger': !validEmail() && email != '' }"
            placeholder="Email"
          />

          <input
            id="passwordInput"
            v-model="password"
            type="password"
            class="form__control form__control--ml50"
            :class="{
              'border-danger': !validPassword(password) && password != ''
            }"
            placeholder="Password"
          />
        </div>
        <button
          class="btn-group__link"
          :disabled="!validEmail() || !validPassword(password)"
          @click.prevent="clickLogin({ email, password })"
        >
          LOG IN
        </button>

        <router-link
          to="/signup"
          class="btn-group__link btn-group__link--filled"
          >SIGN UP</router-link
        >
      </div>

      <div class="article article--left">
        <div class="article__title article__title--big">
          <strong>:reeeeeeee:</strong>
        </div>

        <div class="article__text article__text--margin">
          <i>noun / 'ré / </i><br />
          Brought to you by <br /><strong
            >{ 'Đỗ Nam', 'Nguyễn Ngọc Bảo Trân', 'Đỗ Ngọc Thanh Vân' }</strong
          >.<br />
          Patient sample account: 18020123@vnu.edu.vn - 123456;<br />Doctor
          sample account: 18020234@vnu.edu.vn - 1234567. <br />Use at your own
          risk. Creating new account is patient account by default. Contact us
          for more doctor and clinic datas, since no one does this for free,
          duh. Btw, the reason we named this :reeeee: solely bcus it's a cute
          emote in our discord channel.
        </div>
      </div>
    </div>

    <div class="home__media">
      <a href="#">
        <i class="fab fa-facebook fa-2x"></i>
      </a>

      <a href="#">
        <i class="far fa-star fa-2x"></i>
      </a>

      <a href="#">
        <i class="far fa-envelope fa-2x"></i>
      </a>
    </div>

    <div class="home__arrow">
      <h5>More about us</h5>
      <i class="fas fa-chevron-down fa-2x"></i>
    </div>

    <div class="home__page">
      <div
        class="article article--column"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div class="article__title article__title--smol">
          Wise words, lol jk just scroll down
        </div>

        <div class="article__text article__text--right">
          Powered by Vue and NodeJS.
          <br />I actually hate green, but a full-black health-care website is
          not a good idea imo. Who's gonna sign up for a website that looks like
          a funeral. <br />These random lines are Lorem ipsum something, idk, I
          just looked it up and pasted it here. Don't even know their meanings.
          Don't bother them. <br />Sed ultrices ipsum nec velit semper, non
          viverra risus pulvinar. <br />In elementum ex rutrum laoreet
          condimentum. <br />Quisque fermentum arcu id diam mollis, in viverra
          mauris rhoncus. <br />Suspendisse condimentum aliquet nisi pretium
          finibus. <br />Phasellus ac aliquam nisi, non tristique diam. <br />No
          actually thanks for scrolling this far. Keep going.
        </div>
      </div>

      <div class="img">
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          src="../assets/01.jpg"
          width="400px"
          alt
        />
      </div>
    </div>

    <div class="home__page">
      <div class="img" data-aos="fade-right" data-aos-duration="2000">
        <img src="../assets/02.jpg" width="500px" alt />
      </div>

      <div class="article-bar">
        <div class="article-bar__title">Features</div>

        <div class="article-bar__text">
          You can sign up and log in, yay. Creating account is limited to
          patients only.<br /><br />User features: Create checkup-form, search
          for clinics, search for previous forms; Access to prescriptions that
          have been made after checkups.<br /><br />Doctor features: Accept or
          decline checkup dates; Create prescriptions for patients after
          checkups, search for patients.
        </div>
      </div>

      <div
        class="img img-flexend"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src="../assets/03.jpg" width="500px" alt />
      </div>
    </div>
  </div>
</template>

<script>
import validator from "validator";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  watch: {
    $route(to, from) {
      console.log("ROUTE");
      if (to && from && this.$route.query.showLogin)
        this.$store.commit("SET_ERROR", "You must first log in.");
    }
  },
  methods: {
    validEmail() {
      return validator.isEmail(this.email);
    },
    validPassword(p) {
      return p.length >= 6;
    },
    clickLogin({ email, password }) {
      Object.keys(this.$data).forEach(key => (this.$data[key] = ""));
      this.$store.dispatch("userLogin", { email, password });
    }
  }
};
</script>

<style lang="scss" scoped>
.form__text {
  margin-bottom: 10px;
}
</style>
