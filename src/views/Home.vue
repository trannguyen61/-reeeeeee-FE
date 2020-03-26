<template>
  <div class="home">
    <navBar />

    <div class="home__body">
      <div class="btn-group">
        <div class="form">
          <small class="form__text text-danger" v-show="errorMessage !== ''">{{errorMessage}}</small>

          <label for="emailInput"></label>
          <input
            v-model="email"
            type="email"
            class="form__control"
            :class="{'border-danger': !validEmail() && email!=''}"
            id="emailInput"
            placeholder="Email"
          />

          <label for="passwordInput"></label>
          <input
            v-model="password"
            type="password"
            class="form__control"
            :class="{'border-danger': (!validPassword(password) && password!='')}"
            id="passwordInput"
            placeholder="Password"
          />
        </div>

        <!-- <router-link
          to="/"
          :disabled="!validEmail() || !validPassword(password)"
          class="btn-group__link"
          @click.native="clickLogin({email, password})"
        >LOG IN</router-link> -->
        <button class="btn-group__link" @click.prevent="clickLogin({email, password})">LOG IN</button>

        <router-link to="/signup" class="btn-group__link btn-group__link--filled">SIGN UP</router-link>
      </div>

      <div class="article">
        <div class="article__title">
          <strong>Lorem Ipsum</strong>
        </div>

        <div
          class="article__text"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas est a risus elementum tempus. Proin varius et massa non dictum. Etiam consectetur neque condimentum elit gravida hendrerit. Vivamus venenatis, nulla eget vulputate iaculis, lectus orci feugiat sapien, eu consequat leo lacus nec velit. Vivamus ex neque, volutpat id nisl quis, commodo mollis arcu. Nullam nec velit cursus, placerat est sed, volutpat lectus. Vestibulum sollicitudin quam lectus, ac efficitur arcu tempor in. Pellentesque molestie mattis diam, sit amet gravida est dictum in.</div>
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
      <div class="article" data-aos="fade-right" data-aos-duration="1000">
        <div class="article__title">Donec lobortis condimentum</div>

        <div class="article__text">
          Donec lobortis condimentum purus non efficitur.
          <br />Mauris rutrum elit at elit sagittis bibendum.
          <br />Phasellus ac urna a tortor congue pulvinar sit amet a tortor.
          <br />Sed ultrices ipsum nec velit semper, non viverra risus pulvinar.
          <br />In elementum ex rutrum laoreet condimentum.
          <br />Quisque fermentum arcu id diam mollis, in viverra mauris rhoncus.
          <br />Suspendisse condimentum aliquet nisi pretium finibus.
          <br />Phasellus ac aliquam nisi, non tristique diam.
          <br />Pellentesque tristique urna eu erat mollis pulvinar.
        </div>
      </div>

      <div class="img">
        <img data-aos="fade-left" data-aos-duration="1000" src="../assets/01.jpg" width="400px" alt />
      </div>
    </div>

    <div class="home__page">
      <div class="img" data-aos="fade-right" data-aos-duration="1000">
        <img src="../assets/02.jpg" width="500px" alt />
      </div>

      <div class="article-bar">
        <div class="article-bar__title">Nam nec efficitur nulla</div>

        <div
          class="article-bar__text"
        >Aliquam nec tortor vitae est tincidunt dignissim quis vel lorem. Suspendisse finibus tortor at ipsum lobortis egestas. Aliquam convallis est mauris, quis pulvinar lorem vestibulum ac. Sed nec luctus dolor, vitae mattis sapien. Nunc ante elit, tincidunt vel nibh eu, facilisis pellentesque nulla. Proin accumsan risus et massa ornare, at porta purus consectetur. Sed diam elit, tempor quis augue non, faucibus scelerisque libero.</div>
      </div>

      <div class="img img-flexend" data-aos="fade-left" data-aos-duration="1000">
        <img src="../assets/03.jpg" width="500px" alt />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import validator from "validator";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      email: "",
      password: "",
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
    clickLogin({email, password}) {
      //placeholder
      //dispatch to store
      console.log('HERE')
      this.errorMessage = "";
      this.$store
        .dispatch("userLogin", {
          email,
          password
        })
        .then(() => {console.log('DISPATCHED')})
        .catch(e => (this.errorMessage = e || "Login failed"));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>