<template>
  <div :class="[$style.category__card__container, `${this.item.type.toLowerCase()}`]">
    <div :class="$style.category__card__content">
      <div :class="$style.items">
        <img 
          :class="$style.icons"
          :src="item.iconSrc"
          :alt="item.type"
        >
        <p :class="$style.type">{{ item.type }}</p>
        <p :class="$style.count">{{ item.count }} items</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
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
.category__card__container {
  width: 230px;
  height: 175px;
  margin-right: 11px;
  border-radius: 8px;
  &:hover {
    height: 195px;
  }
  .category__card__content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: 100%;
    .items {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .icons {
        width: 47px;
        margin-bottom: 21px;
      }
      .type {
        font-weight: 500;
        font-size: 16px;
        color: #333333;
        margin: 0 0 4px 0;
      }
      .count {
        font-weight: normal;
        font-size: 14px;
        color: #333333;
        margin: 0;
      }
    }
  }
}
@media (max-width: 768px) {
  .category__card__container {
    &:hover {
      height: 175px;
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