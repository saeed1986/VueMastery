var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "vmSocks-green-onWhite.jpg",
    inventory: 1,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "vmSocks-green-onWhite.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "vmSocks-blue-onWhite.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },

    updateProduct(variantImage) {
      this.image = variantImage;
    },

    removeFromCart() {
      if (this.cart < 1) {
        this.cart = 0;
      } else {
        this.cart -= 1;
      }
    },
  },
});
