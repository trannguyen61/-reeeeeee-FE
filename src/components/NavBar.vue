<template>
  <div class="navbar">
      <ul class="navbar__list">
          <li id="logo">
              <router-link to="/">
                :reeeeeeee:
              </router-link>
          </li>

            <li class="navbar__link">
                <router-link to="/form" :class="{ 'router-link-active' : $route.path.includes('form')}">
                    FORM
                </router-link>
            </li>

            <li class="navbar__link">
                <router-link to="/prescriptions" :class="{'router-link-active': $route.path.includes('prescription')}">
                    PRESCRIPTIONS
                </router-link>
            </li>

            <!-- if user is valid, this btn turn to Sign out -->
            <li class="navbar__btn" v-if="!$store.getters.getToken">
                <router-link to="/signup">
                    SIGN UP
                </router-link>
            </li>

            <li class="navbar__btn" v-else>
                <router-link to="/" @click.native="$store.dispatch('userSignout')">
                    SIGN OUT
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