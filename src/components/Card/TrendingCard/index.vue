<template>
  <div :class="[$style.trending__card__container, `${this.item.type.toLowerCase()}`]">
    <div :class="$style.trending__card__content">
      <div :class="$style.items">
        <img 
          :class="$style.img"
          :src="item.imgSrc"
          :alt="item.type"
        >
        <p :class="$style.name">{{ item.name }}</p>
        <p :class="$style.type">{{ item.type }}</p>
        <star-rating
          :class="$style.rating"
          :rating="item.rating"
          star-size="15"
          read-only
          active-color="#FF8412"
          :show-rating="false"
        ></star-rating>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrendingCard",
  props: {
    items: Object
  },
  data() {
    return {
      item: this.items
    }
  },
  created() {
    console.log(this.items, "ini")
  },
}
</script>

<style lang="scss" module>
.trending__card__container {
  width: 287.5px;
  height: 306px;
  box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
  border-radius: 17px;
  margin: 0 20px 20px 0;
  .trending__card__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 33px 20px;
    .items {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .img {
        width: 118.15px;
        height: 120px;
        margin-bottom: 19px;
      }
      p {
        margin: 0;
      }
      .name {
        font-weight: 500;
        font-size: 26px;
        color: #000000;
      }
      .type {
        font-weight: 500;
        font-size: 18px;
        color: #8BAC3E;
        margin-bottom: 19px;
      }
    }
  }
}
@media (max-width: 768px) {
  .trending__card__container {
    width: 402px;
    height: 292px;
    box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
    border-radius: 17px;
    margin: 20px;
    .trending__card__content {
      .items {
        .img {
          height: 114.31px;
          margin-bottom: 18px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.cupcake {
  background: #F0FEEB;
}
.pizza {
  background: #E4F2F4;
}
.kebab {
  background: #EAEEFA;
}
.salmon {
  background: #F9EEF3;
}
.doughnut {
  background: #F3F7D9;
}
</style>