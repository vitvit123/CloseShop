$(document).ready(function() {
  new function() {
    let mThis = this;
    this.HomePage = $("#ContainHomePage");
    this.ShopPage = $("#ContainStockProduct");
    this.AboutUsPage = $(".AboutUsPage");
    this.ContactUsPage = $(".ContactUsPage");
    this.logo = $(".logo");
    this.GooShop = $(".btnstyle");
    this.GooAboutUs = $("#navAboutUs");
    this.GooContactUs = $("#navContactUs");


    this.logo.on("click", () => {
      mThis.HomePage.css("display", "block");
      mThis.AboutUsPage.css("display", "none");
      mThis.ContactUsPage.css("display", "none");
      mThis.ShopPage.css("display", "none");
    });


    this.GooShop.on("click", () => {
      mThis.HomePage.css("display", "none");
      mThis.AboutUsPage.css("display", "none");
      mThis.ContactUsPage.css("display", "none");
      mThis.ShopPage.css("display", "block");
    });

    this.GooAboutUs.on("click", () => {
      mThis.HomePage.css("display", "none");
      mThis.ShopPage.css("display", "none");
      mThis.ContactUsPage.css("display", "none");
      mThis.AboutUsPage.css("display", "block");
    });


    this.GooContactUs.on("click", () => {
      mThis.HomePage.css("display", "none");
      mThis.ShopPage.css("display", "none");
      mThis.AboutUsPage.css("display", "none");
      mThis.ContactUsPage.css("display", "block");
    });

  };






  const products = [
    { name: "Product 1", image: "img/Products/photo_1_2024-05-21_20-55-18.jpg", category: "male" },
    { name: "Product 2", image: "img/Products/photo_1_2024-05-21_20-55-40.jpg", category: "female" },
    { name: "Product 3", image: "img/Products/photo_1_2024-05-21_20-57-06.jpg", category: "male" },
    { name: "Product 4", image: "img/Products/photo_2_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 5", image: "img/Products/photo_2_2024-05-21_20-55-40.jpg", category: "male" },
    { name: "Product 6", image: "img/Products/photo_2_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 7", image: "img/Products/photo_3_2024-05-21_20-55-18.jpg", category: "male" },
    { name: "Product 8", image: "img/Products/photo_3_2024-05-21_20-55-40.jpg", category: "female" },
    { name: "Product 9", image: "img/Products/photo_3_2024-05-21_20-57-06.jpg", category: "male" },
    { name: "Product 10", image: "img/Products/photo_4_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 12", image: "img/Products/photo_4_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 13", image: "img/Products/photo_5_2024-05-21_20-55-18.jpg", category: "male" },
    { name: "Product 15", image: "img/Products/photo_5_2024-05-21_20-57-06.jpg", category: "male" },
    { name: "Product 16", image: "img/Products/photo_6_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 18", image: "img/Products/photo_6_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 19", image: "img/Products/photo_7_2024-05-21_20-55-18.jpg", category: "male" },
    { name: "Product 21", image: "img/Products/photo_7_2024-05-21_20-57-06.jpg", category: "male" },
    { name: "Product 22", image: "img/Products/photo_8_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 24", image: "img/Products/photo_8_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 25", image: "img/Products/photo_9_2024-05-21_20-55-18.jpg", category: "male" },
    { name: "Product 27", image: "img/Products/photo_9_2024-05-21_20-57-06.jpg", category: "male" },
    { name: "Product 28", image: "img/Products/photo_10_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 30", image: "img/Products/photo_10_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 31", image: "img/Products/photo_11_2024-05-21_20-55-18.jpg", category: "male" },
    { name: "Product 33", image: "img/Products/photo_11_2024-05-21_20-57-06.jpg", category: "male" },
    { name: "Product 34", image: "img/Products/photo_12_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 36", image: "img/Products/photo_12_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 37", image: "img/Products/photo_13_2024-05-21_20-55-18.jpg", category: "male" },
    { name: "Product 39", image: "img/Products/photo_13_2024-05-21_20-57-06.jpg",category: "male" },
    { name: "Product 40", image: "img/Products/photo_14_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 42", image: "img/Products/photo_15_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 43", image: "img/Products/photo_16_2024-05-21_20-55-18.jpg", category: "male" },
    { name: "Product 44", image: "img/Products/photo_16_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 45", image: "img/Products/photo_17_2024-05-21_20-55-18.jpg", category: "male" },
    { name: "Product 46", image: "img/Products/photo_17_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 47", image: "img/Products/photo_18_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 48", image: "img/Products/photo_18_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 49", image: "img/Products/photo_19_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 50", image: "img/Products/photo_19_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 51", image: "img/Products/photo_20_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 52", image: "img/Products/photo_20_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 53", image: "img/Products/photo_21_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 54", image: "img/Products/photo_21_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 55", image: "img/Products/photo_22_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 56", image: "img/Products/photo_22_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 57", image: "img/Products/photo_23_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 58", image: "img/Products/photo_23_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 59", image: "img/Products/photo_24_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 60", image: "img/Products/photo_24_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 61", image: "img/Products/photo_25_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 62", image: "img/Products/photo_25_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 63", image: "img/Products/photo_26_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 64", image: "img/Products/photo_26_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 65", image: "img/Products/photo_27_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 66", image: "img/Products/photo_27_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 67", image: "img/Products/photo_28_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 68", image: "img/Products/photo_28_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 69", image: "img/Products/photo_29_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 71", image: "img/Products/photo_30_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 72", image: "img/Products/photo_30_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 73", image: "img/Products/photo_31_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 74", image: "img/Products/photo_31_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 75", image: "img/Products/photo_32_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 76", image: "img/Products/photo_32_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 77", image: "img/Products/photo_33_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 78", image: "img/Products/photo_33_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 79", image: "img/Products/photo_34_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 80", image: "img/Products/photo_34_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 81", image: "img/Products/photo_35_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 82", image: "img/Products/photo_35_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 83", image: "img/Products/photo_36_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 84", image: "img/Products/photo_36_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 85", image: "img/Products/photo_37_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 86", image: "img/Products/photo_37_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 87", image: "img/Products/photo_38_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 88", image: "img/Products/photo_38_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 89", image: "img/Products/photo_39_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 90", image: "img/Products/photo_39_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 91", image: "img/Products/photo_40_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 92", image: "img/Products/photo_40_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 93", image: "img/Products/photo_41_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 94", image: "img/Products/photo_41_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 95", image: "img/Products/photo_42_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 96", image: "img/Products/photo_42_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 97", image: "img/Products/photo_43_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 98", image: "img/Products/photo_43_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 99", image: "img/Products/photo_44_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 100", image: "img/Products/photo_44_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 101", image: "img/Products/photo_45_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 102", image: "img/Products/photo_45_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 103", image: "img/Products/photo_46_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 104", image: "img/Products/photo_46_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 105", image: "img/Products/photo_47_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 106", image: "img/Products/photo_47_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 107", image: "img/Products/photo_48_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 108", image: "img/Products/photo_48_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 109", image: "img/Products/photo_49_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 110", image: "img/Products/photo_49_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 111", image: "img/Products/photo_50_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 112", image: "img/Products/photo_50_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 113", image: "img/Products/photo_51_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 114", image: "img/Products/photo_51_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 115", image: "img/Products/photo_52_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 116", image: "img/Products/photo_52_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 117", image: "img/Products/photo_53_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 118", image: "img/Products/photo_53_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 119", image: "img/Products/photo_54_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 120", image: "img/Products/photo_54_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 121", image: "img/Products/photo_55_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 122", image: "img/Products/photo_55_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 123", image: "img/Products/photo_56_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 124", image: "img/Products/photo_56_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 125", image: "img/Products/photo_57_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 126", image: "img/Products/photo_57_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 127", image: "img/Products/photo_58_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 128", image: "img/Products/photo_58_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 129", image: "img/Products/photo_59_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 130", image: "img/Products/photo_59_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 131", image: "img/Products/photo_60_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 132", image: "img/Products/photo_60_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 133", image: "img/Products/photo_61_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 134", image: "img/Products/photo_61_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 135", image: "img/Products/photo_62_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 141", image: "img/Products/photo_65_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 142", image: "img/Products/photo_65_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 143", image: "img/Products/photo_66_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 144", image: "img/Products/photo_66_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 145", image: "img/Products/photo_67_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 146", image: "img/Products/photo_67_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 147", image: "img/Products/photo_68_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 148", image: "img/Products/photo_68_2024-05-21_20-57-06.jpg", category: "female" },
    { name: "Product 149", image: "img/Products/photo_69_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 151", image: "img/Products/photo_70_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 153", image: "img/Products/photo_71_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 155", image: "img/Products/photo_72_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 157", image: "img/Products/photo_73_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 159", image: "img/Products/photo_74_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 161", image: "img/Products/photo_75_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 163", image: "img/Products/photo_76_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 165", image: "img/Products/photo_77_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 167", image: "img/Products/photo_78_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 169", image: "img/Products/photo_79_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 171", image: "img/Products/photo_80_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 173", image: "img/Products/photo_81_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 175", image: "img/Products/photo_82_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 177", image: "img/Products/photo_83_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 179", image: "img/Products/photo_84_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 181", image: "img/Products/photo_85_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 183", image: "img/Products/photo_86_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 185", image: "img/Products/photo_87_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 187", image: "img/Products/photo_88_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 189", image: "img/Products/photo_89_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 191", image: "img/Products/photo_90_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 193", image: "img/Products/photo_91_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 195", image: "img/Products/photo_92_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 197", image: "img/Products/photo_93_2024-05-21_20-55-18.jpg", category: "female" },
    { name: "Product 199", image: "img/Products/photo_94_2024-05-21_20-55-18.jpg", category: "female" },
  ];

  // Function to filter and display products
  function filterProducts(category) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous products

    products.forEach(product => {
      if (product.category === category || category === "all") {
        const card = `
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>

          </div>
        `;
        container.innerHTML += card;
      }
    });
  }

  
  const filterItems = document.querySelectorAll('.filter_Selector');

  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.dataset.filter;
      filterProducts(category);
    });
  });

  filterProducts("all");

});
