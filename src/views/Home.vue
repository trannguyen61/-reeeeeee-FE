<template>
  <div class="home">
    <navBar />

    <div class="home__body">
      <div class="btn-group">
        <router-link to="/login" class="btn-group__link">LOG IN</router-link>

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
      <div class="article"
      data-aos="fade-right"
            data-aos-duration="1000" >
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

      <div class="img img-right">
        <img data-aos="fade-left"
            data-aos-duration="1000" 
            src="../assets/01.jpg" width="400px" alt />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
}

.home {
  &__body {
    display: flex;
    // flex-direction: row-reverse;
    margin-top: 80px;

    .article {
      margin: 25px 100px 30px 50px;
      width: 40%;
      text-align: left;
      padding-left: 50px;
      border-left: solid 1px;

      &__title {
          color: #42b983;
        font-size: 4em;
        margin: 20px 0 20px 0;
      }

      &__text {
        margin: 15px 0;
        line-height: 1.5em;
      }
    }

    .btn-group {
      margin-bottom: 30px;
      margin-left: 300px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      &__link {
        margin-bottom: 15px;
        height: 35px;
        padding: 0 15px;
        border: #42b983 solid 1px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        &--filled {
          background: #42b983;
          color: white;
        }
      }
    }
  }

  &__media {
    margin-top: 5px;
    a {
      margin: 0 15px;
    }
  }

  &__arrow {
    margin-top: 40px;
  }

  &__page {
    margin-top: 120px;
    margin-bottom: 40px;
    display: flex;

    .img {
      &-right {
        margin-left: 100px;
        margin-right: 100px;
      }
    }

    .article {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      margin-left: 150px;
      width: 40%;

      &__title {
          color: #42b983;
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 2em;
      }

      &__text {
        line-height: 1.5em;
        text-align: right;
      }
    }
  }
}
</style>