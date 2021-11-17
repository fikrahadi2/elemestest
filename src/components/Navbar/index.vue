<template>
  <div :class="$style.navbar__container">
    <div :class="$style.navbar__content">
      <img 
        :class="$style.logo" 
        src="@/assets/elemes_logo.png" 
        alt="elemes_logo"
      >
      <div :class="$style.feature__content">
        <div 
          v-for="(menu, id) in feature"
          :key="id"
          :class="$style.group"
        >
          <p :class="$style.menu">{{ menu }}</p>
        </div>
      </div>
      <div :class="$style.sso">
        <button :class="$style.sign__in">Masuk</button>
        <button :class="$style.sign__up">Daftar Sekarang</button>
      </div>
    </div>
  </div>
</template>

<script>
import { NAVBAR_FEATURE } from '@/constants/feature.js'
export default {
  name: "Navbar",
  data() {
    return {
      feature: NAVBAR_FEATURE
    }
  }
}
</script>

<style lang="scss" module>
.navbar__container {
  height: 96px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #FFFFFF;
  .navbar__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 27px 116px;
    .logo {
      max-width: 207px;
      max-height: 50px;
      cursor: pointer;
    }
    .feature__content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .group {
        &:not(:last-child) {
          margin-right: 32px;
        }
        .menu {
          font-weight: 500;
          font-size: 14px;
          color: #757575;
          cursor: pointer;
        }
      }
    }
    .sso {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      button {
        font-family: "Rubik";
        font-weight: 500;
        font-size: 14px;
        border: none;
        box-shadow: none;
        cursor: pointer;
      }
      .sign {
        &__in {
          color: #333333;
          background: none;
          margin-right: 24px;
        }
        &__up {
          color: #FFFFFF;
          padding: 10px 18px;
          background: #8BAC3E;
          border-radius: 100px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .navbar__container {
    height: 89px;
    .navbar__content {
      padding: 27px 33px;
      .logo {
        max-width: 150px;
        max-height: 36px;
        cursor: pointer;
      }
      .feature__content {
        display: none
      }
      .sso {
        .sign {
          &__in {
            color: #333333;
            background: none;
            margin-right: 24px;
            display: none;
          }
          &__up {
            color: #FFFFFF;
            padding: 10px 18px;
            background: #8BAC3E;
            border-radius: 100px;
          }
        }
      }
    }
  }
}
</style>
