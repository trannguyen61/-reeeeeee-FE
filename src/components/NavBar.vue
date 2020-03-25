<template>
  <div class="navbar">
      <ul class="navbar__list">
          <li id="logo">
              <router-link to="/">
                :reeeeeeee:
              </router-link>
          </li>

            <li class="navbar__link">
                <router-link to="/form">
                    FORM
                </router-link>
            </li>

            <li class="navbar__link">
                <router-link to="/prescriptions">
                    PRESCRIPTIONS
                </router-link>
            </li>

            <li class="navbar__btn">
                <router-link to="/">
                    LOG IN
                </router-link>
            </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.navbar {
    background: white;
    z-index: 1;
    position: fixed; 
    width: 100vw; 
    font-size: 0.8em;
    font-family: 'Roboto Mono';

    a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

        &.router-link-exact-active {
            color: #42b983;
        }
    }

    &__list {
        list-style-type: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 20px auto; 
        padding: 0 70px;
    }

    #logo {
        margin-right: auto;
        font-size: 1.5em;
        a { color: #42b983; }
    }

    &__link, &__btn {
        text-decoration: none;
        float: right;
        margin-left: 60px;
    }

    &__btn {
        height: 35px;
        padding: 0 15px;
        border: #42b983 solid 1px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        a {color: #42b983;}
    }

}

</style>