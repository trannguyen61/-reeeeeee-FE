<template>
  <div class="navbar">
    <ul class="navbar__list sm-p0">
      <li id="logo" class="sm-hidden sm-w0">
        <router-link to="/">
          :reeeeeeee:
        </router-link>
      </li>

      <li class="navbar__link sm-mauto">
        <router-link
          to="/form"
          :class="{ 'router-link-active': $route.path.includes('form') }"
        >
          FORM
        </router-link>
      </li>

      <li class="navbar__link sm-mauto">
        <router-link
          to="/prescriptions"
          :class="{
            'router-link-active': $route.path.includes('prescription')
          }"
        >
          PRESCRIPTIONS
        </router-link>
      </li>

      <!-- if user is valid, this btn turn to Sign out -->
      <li v-if="!$store.getters.getToken" class="navbar__btn sm-mauto">
        <router-link to="/signup">
          SIGN UP
        </router-link>
      </li>

      <li v-else class="navbar__btn sm-mauto">
        <router-link to="/" @click.native="$store.dispatch('userSignout')">
          SIGN OUT
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
