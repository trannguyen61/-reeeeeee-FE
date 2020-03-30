<template>
  <div>
        <div class="body-container">
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>

        </div>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
    components: {
        Card
    }
}
</script>

<style lang="scss" scoped>
    .body-container {
        flex-wrap: wrap;
    }
</style>