<template>
  <div :class="$style.home__container">
    <div :class="$style.home__content">
      <div :class="$style.header">
        <div :class="$style.left__content">
          <h1 :class="$style.title">Good Food Us Good Mood</h1>
          <div :class="[$style.right__content, $style.mobile]">
            <div :class="$style.image__group">
              <div :class="$style.image__content">
                <img 
                  :class="$style.food__image"
                  src="@/assets/menu_green_salad_tomato.png"
                  alt="green_salad_tomato"
                >
              </div>
              <HeaderCard 
                :class="$style.card__group"
                :items="items_menu[8]"
              />
            </div>
          </div>
          <p :class="$style.subtitle">
            I would think that conserving our natural resources 
            should be a conservative position: Not to waste food, and 
            not to throw away a lot of the food that we buy.
          </p>
          <div :class="$style.button__content">
            <button :class="$style.sign__up">Daftar Sekarang</button>
            <button :class="$style.about__us">About Us</button>
          </div>
        </div>
        <div :class="[$style.right__content, $style.desktop]">
          <div :class="$style.image__group">
            <div :class="$style.image__content">
              <img 
                :class="$style.food__image"
                src="@/assets/menu_green_salad_tomato.png"
                alt="green_salad_tomato"
              >
            </div>
            <HeaderCard 
              :class="$style.card__group"
              :items="items_menu[8]"
            />
          </div>
        </div>
      </div>
      <div :class="$style.category">
        <div :class="$style.category__header">
          <h1 :class="$style.title">Browser Our Category</h1>
          <h1 :class="$style.subtitle">Receipt</h1>
        </div>
        <div :class="$style.menu__content">
          <div 
            :class="$style.menu__group"
            v-for="(el, id) in items_category"
            :key="id"
          >
            <CategoryCard 
              :items="el"
            />
          </div>
        </div>
        <div :class="$style.button__carousel">
          <button :class="$style.button">
            <img :class="$style.chevron__button" src="@/icons/svg/chevron_left.svg" alt="previous">
            <p>PREV</p>
          </button>
          <button :class="$style.button">
            <p>NEXT</p>
            <img :class="$style.chevron__button" src="@/icons/svg/chevron_right.svg" alt="next">
          </button>
        </div>
      </div>
      <div :class="$style.trending">
        <div :class="$style.trending__header">
          <h1 :class="$style.title">Browser Our Trending</h1>
          <h1 :class="$style.subtitle">Receipt</h1>
        </div>
        <div :class="$style.trending__content">
          <div 
            :class="$style.trending__group"
            v-for="(el, id) in items_menu"
            :key="id"
          >
            <TrendingCard
              :items="el"
            />
          </div>
        </div>
        <div :class="$style.button__group">
          <button :class="$style.button__all__receipt">ALL Receipt</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCard from "@/components/Card/HeaderCard"
import CategoryCard from "@/components/Card/CategoryCard"
import TrendingCard from "@/components/Card/TrendingCard"
import { MENU, CATEGORY } from "@/constants/receipt.js"

export default {
  name: 'Home',
  components: {
    HeaderCard,
    CategoryCard,
    TrendingCard
  },
  data() {
    return {
      items_menu: MENU,
      category: CATEGORY,
      items_category: []
    }
  },
  created() {
    for(let i=0; i < this.category.length; i++){
      let counting = 0
      this.items_category.push({
        type: this.category[i],
        iconSrc: require(`@/icons/svg/category_${this.category[i].toLowerCase()}.svg`),
        count: 0,
        items: []
      })
      for(let j=0; j < this.items_menu.length; j++){
        if(this.category[i] === this.items_menu[j].type){
          counting++
          this.items_category[i].items.push(this.items_menu[j])
        }
      }
      this.items_category[i].count = counting
    }
    console.log(this.items_category)
  }
}
</script>

<style lang="scss" module>
.home__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .home__content {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 103px 116px 0 116px;
    .header {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      padding-bottom: 57px;
      .left__content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        width: 50%;
        max-width: 482px;
        .title {
          font-family: "Rubik";
          font-weight: 500;
          font-size: 64px;
          color: #8BAC3E;
          margin-bottom: 32px;
        }
        .mobile {
          display: none;
        }
        .subtitle {
          font-family: "Rubik";
          font-weight: normal;
          font-size: 18px;
          color: #757575;
          margin: 0 0 32px 0;
        }
        .button__content {
          display: flex;
          justify-content: flex-start;
          flex-direction: row;
          align-items: center;
          .sign__up {
            font-family: "Rubik";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            color: #FFFFFF;
            padding: 10px 18px;
            background: #8BAC3E;
            box-shadow: 0px 8px 32px rgba(102, 107, 226, 0.35);
            border-radius: 100px;
            margin-right: 16px;
            border: none;
            cursor: pointer;
          }
          .about__us {
            font-family: "Rubik";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            color: #333333;
            padding: 10px 18px;
            background: #F2F2F2;
            border-radius: 100px;
            border: none;
            cursor: pointer;
          }
        }
      }
      .right__content.desktop {
        width: 50%;
        .image__group {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          position: relative;
          .image__content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            background: #F7F7F7;
            width: 518.71px;
            height: 518.46px;
            .food__image {
              width: 412.9px;
              height: 414.75px;
            }
          }
          .card__group {
            cursor: pointer;
            position: absolute;
            left: 0;
            bottom: 21px;
          }
        }
      }
    }
    .category {
      margin-bottom: 113px;
    }
    .category, .trending {
      display: flex;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      &__header {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        margin-bottom: 42px;
        h1 {
          font-weight: 500;
          font-size: 38px;
          margin: 0;
        }
        .title {
          color: #333333;
        }
        .subtitle {
          color: #8BAC3E
        }
      }
      .menu__content {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        .menu__group {
        }
      }
      .trending__content {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        .trending__group {
          
        }
      }
      .button__carousel {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        align-items: center;
        margin-top: 46px;
        .button {
          background: #8BAC3E;
          border-radius: 100px;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          align-items: center;
          padding: 9px;
          border: none;
          cursor: pointer;
          &:first-child {
            margin-right: 13px;
          }
          .chevron__button {
            background: #FFFFFF;
            border-radius: 100%;
            padding: 7px 12.72px 7px 8.72px;
          }
          p {
            font-family: "Rubik";
            font-weight: 500;
            font-size: 16px;
            color: #FFFFFF;
            margin: 0 7px;
          }
        }
      }
      .button__group {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        .button__all__receipt {
          font-family: "Rubik";
          font-weight: 500;
          font-size: 16px;
          color: #FFFFFF;
          background: #8BAC3E;
          border-radius: 100px;
          border: none;
          padding: 16px;
        }
      }
    }
  }
}
@media (max-width: 768px){
  .home__container {
    .home__content {
      margin: 100px 33px;
      padding: 0;
      .header {
        padding-bottom: 106px;
        .desktop {
          display: none;
        }
        .left__content {
          width: 100%;
          .title {
            font-size: 48px;
            color: #8BAC3E;
            margin-bottom: 32px;
          }
          .right__content.mobile {
            display: block;
            width: 100%;
            margin-bottom: 50px;
            .image__group {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              position: relative;
              .image__content {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border-radius: 100%;
                background: #F7F7F7;
                width: 249.46px;
                height: 249.34px;
                .food__image {
                  width: 198.58px;
                  height: 199.46px;
                }
              }
              .card__group {
                position: absolute;
                width: 292px;
                height: 93px;
                right: 0;
                bottom: 0;
              }
            }
          }
        }
      }
      .category {
        margin-bottom: 80px;
      }
      .category, .trending {
        &__header {
          margin-bottom: 28px;
          h1 {
            font-size: 24px;
          }
        }
        .menu__content {
          display: flex;
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          .menu__group {
          }
        }
        .trending__content {
          flex-direction: column;
          .trending__group {
            
          }
        }
        .button__carousel {
          display: none;
        }
      }
    }
  }
}
</style>
