<template>
  <div :class="$style.bottom__navbar__container">
    <div :class="$style.bottom__navbar__content">
      <div :class="$style.feature__content">
        <div 
          v-for="(menu, id) in feature"
          :key="id"
          :class="$style.group"
        >
          <img :class="$style.icon" src="@/icons/svg/menu.svg" alt="menu">
          <p :class="$style.menu">{{ menu }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar",
  data() {
    return {
      feature: ["Home", "Promotions", "Others"]
    }
  }
}
</script>

<style lang="scss" module>
.bottom__navbar__container {
  display: none;
}
@media (max-width: 768px) {
  .bottom__navbar__container {
    display: block;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: #FFFFFF;
    height: 89px;
    .bottom__navbar__content {
      padding: 27px 33px;
      .feature__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .group {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
          .icon {
            width: 39px;
            height: 39px;
            margin-bottom: 1px;
          }
          .menu {
            margin: 0;
            font-weight: normal;
            font-size: 14px;
            color: #757575;
          }
        }
      }
    }
  }
}
</style>
