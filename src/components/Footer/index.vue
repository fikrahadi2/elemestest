<template>
  <div :class="$style.footer__container">
    <div :class="$style.footer__content">
      <div :class="$style.upper__content">
        <div :class="$style.first">
          <img :class="$style.logo" src="@/assets/elemes_logo.png" alt="elemes_logo">
          <p :class="$style.address">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
            Kecamatan Setiabudi, Kota Jakarta Selatan, 
            Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div :class="$style.media">
            
          </div>
        </div>
        <div :class="$style.categories">
          <h1 :class="$style.categories__title">Categories</h1>
          <div 
            :class="$style.categories__content"
            v-for="(el, id) in categories"
            :key="id"
          >
            <p>{{ el }}</p>
          </div>
        </div>
        <div :class="$style.about">
          <h1 :class="$style.about__title">About Us</h1>
          <div 
            :class="$style.about__content"
            v-for="(el, id) in about"
            :key="id"
          >
            <p>{{ el }}</p>
          </div>
        </div>
        <div :class="$style.newsletter">
          <h1 :class="$style.newsletter__title">Newsletter</h1>
          <div :class="$style.newsletter__content">
            <p :class="$style.discount">
              Get now free 50% discount for all products on yout first order
            </p>
            <div :class="$style.get__discount">

            </div>
            <div :class="$style.mail">
              <img :class="$style.mail__icon" src="@/icons/svg/contact_mail.svg" alt="Mail">
              <p :class="$style.mail__address">elemesid@gmail.com</p>
            </div>
            <div :class="$style.phone">
              <img :class="$style.phone__icon" src="@/icons/svg/contact_phone.svg" alt="Phone">
              <p :class="$style.phone__address">0888 1111 2222</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.bottom__content">
        <p>&#169; 2021 ELEMES ID. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  </div>
</template>

<script>
import { CATEGORY } from "@/constants/receipt.js"
export default {
  name: "Footer",
  components: {
  },
  data() {
    return {
      categories: CATEGORY,
      about: ["About Us", "FAQ", "Report Problem"]
    }
  }
}
</script>

<style lang="scss" module>
.footer__container {
  width: 100%;
  .footer__content {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    margin: 250px 120px 50px 81px;
    .upper__content {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      background: #F9FFF7;
      border-radius: 20px;
      padding: 74px 62px;
      .first {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        margin-right: 100px;
        max-width: 335px;
        .logo {
          width: 207px;
          cursor: pointer;
        }
        .address {
          font-weight: normal;
          font-size: 14px;
          color: #757575;
          margin: 21px 0 33px 0;
        }
        .media {

        }
      }
      .categories, .about {
        margin-right: 80px;
        width: 23%;
      }
      .categories, .about, .newsletter {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        &__title {
          font-weight: 500;
          font-size: 18px;
          color: #333333;
          margin-bottom: 33px;
        }
        &__content {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          &:not(:last-child) {
            margin-bottom: 19px;
          }
          p {
            cursor: pointer;
          }
          p, .discount {
            font-weight: normal;
            font-size: 14px;
            color: #757575;
            margin: 0;
          }
          .get__discount {

          }
          .mail {
            margin-bottom: 10px;
          }
          .mail, .phone {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            &__icon {
              margin-right: 2.5px;
              width: 15px;
            }
            &__address {
              font-weight: normal;
              font-size: 14px;
              color: #000000;
              margin: 0;
            }
          }
        }
      }
    }
    .bottom__content {
      p {
        font-weight: normal;
        font-size: 12px;
        letter-spacing: 0.05em;
        color: #757575;
      }
    }
  }
}
@media (max-width: 768px) {
  .footer__container {
    .footer__content {
      margin: 0;
      .upper__content {
        padding: 50px;
        .first {
          margin-right: 20px;
          .address {
            font-size: 12px;
          }
          .media {

          }
        }
        .categories, .about {
          margin-right: 20px;
        }
        .categories, .about, .newsletter {
          &__title {
            font-size: 16px;
          }
          &__content {
            &:not(:last-child) {
              margin-bottom: 15px;
            }
            p, .discount {
              font-size: 12px;
            }
            .get__discount {

            }
            .mail {
              margin-bottom: 10px;
            }
            .mail, .phone {
              &__icon {
                width: 10px;
              }
              &__address {
                font-size: 12px;
              }
            }
          }
        }
      }
      .bottom__content {
        p {
          font-size: 10px;
        }
      }
    }
  }
}
</style>