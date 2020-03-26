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
                    SIGN UP
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


</style>