<template>
  <div :class="$style.header__card__container">
    <div :class="$style.header__card__content">
      <img 
        :class="$style.image" 
        :src="items.imgSrc" 
        :alt="items.name"
      >
      <div :class="$style.desc">
        <p :class="$style.title">{{ items.name }}</p>
        <p :class="$style.subtitle">{{ items.type }}</p>
        <star-rating
          :class="$style.rating"
          :rating="items.rating"
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
  name: "HeaderCard",
  props: {
    items: Object
  }
}
</script>

<style lang="scss" module>
.header__card__container {
  width: 292px;
  height: 93px;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
  backdrop-filter: blur(11px);
  border-radius: 17px;
  .header__card__content {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 18px;
    .image {
      width: 53px;
      height: 53px;
      margin-right: 19px;
    }
    .desc {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .title {
        font-family: "Open Sans";
        font-weight: 600;
        font-size: 14px;
        color: #000000;
        margin: 0;
      }
      .subtitle {
        font-family: "Open Sans";
        font-weight: normal;
        font-size: 12px;
        color: #757575;
        margin: 0;
      }
      .rating {
        margin-top: 5px;
      }
    }
  }
}
</style>
