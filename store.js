const PRODUCTS = [
  {
    "id": 1,
    "name": "PlayStation 5 (Disc Edition)",
    "category": "console",
    "platform": "PS5",
    "platClass": "ps5",
    "maker": "Sony Interactive",
    "type": "جهاز ألعاب (أقراص)",
    "price": 499,
    "img": "images/ps5.webp",
    "desc": "جهاز بلايستيشن 5 نسخة الأقراص بسعة تخزين 1TB SSD ويد تحكم DualSense."
  },
  {
    "id": 2,
    "name": "PlayStation 5 Pro (2TB)",
    "category": "console",
    "platform": "PS5",
    "platClass": "ps5",
    "maker": "Sony Interactive",
    "type": "جهاز ألعاب احترافي",
    "price": 699,
    "img": "images/ps5-pro.webp",
    "desc": "أقوى إصدار من بلايستيشن 5 مع معالج رسوميات مطور وسعة 2 تيرابايت."
  },
  {
    "id": 3,
    "name": "Xbox Series X (1TB)",
    "category": "console",
    "platform": "Xbox",
    "platClass": "xbox",
    "maker": "Microsoft",
    "type": "جهاز ألعاب (أقراص)",
    "price": 499,
    "img": "images/xbox-x.webp",
    "desc": "جهاز إكس بوكس الأقوى بدقة 4K حقيقية وسرعة تحميل فائقة."
  },
  {
    "id": 4,
    "name": "Xbox Series S (512GB)",
    "category": "console",
    "platform": "Xbox",
    "platClass": "xbox",
    "maker": "Microsoft",
    "type": "جهاز ألعاب (رقمي)",
    "price": 299,
    "img": "images/xbox-s.webp",
    "desc": "جهاز إكس بوكس الرقمي الاقتصادي المخصص للألعاب الرقمية وخدمة Game Pass."
  },
  {
    "id": 5,
    "name": "Nintendo Switch OLED",
    "category": "console",
    "platform": "Nintendo",
    "platClass": "nintendo",
    "maker": "Nintendo",
    "type": "جهاز محمول ومنزلي",
    "price": 349,
    "img": "images/switch-oled.webp",
    "desc": "جهاز نينتندو بشاشة OLED مقاس 7 بوصة عالية الوضوح."
  },
  {
    "id": 6,
    "name": "Grand Theft Auto VI (GTA 6) - Disc",
    "category": "game",
    "platform": "PS5",
    "platClass": "ps5",
    "maker": "Rockstar Games",
    "type": "قرص فيزيائي (Disc)",
    "price": 79,
    "img": "images/gta6-disc.webp",
    "desc": "الإصدار الفيزيائي داخل علبة أصلية مغلفة لجهاز بلايستيشن 5."
  },
  {
    "id": 7,
    "name": "Grand Theft Auto VI (GTA 6) - Digital",
    "category": "game",
    "platform": "Xbox",
    "platClass": "xbox",
    "maker": "Rockstar Games",
    "type": "نسخة رقمية (Digital Key)",
    "price": 69,
    "img": "images/gta6-digital.webp",
    "desc": "كود تفعيل رقمي فوري للعبة GTA 6 يعمل على أجهزة Xbox Series X|S."
  },
  {
    "id": 8,
    "name": "Marvel's Spider-Man 2",
    "category": "game",
    "platform": "PS5",
    "platClass": "ps5",
    "maker": "Insomniac Games",
    "type": "قرص فيزيائي (Disc)",
    "price": 69,
    "img": "images/spiderman2.webp",
    "desc": "مغامرة الرجل العنكبوت الحصرية على بلايستيشن 5 بدعم كامل للغة العربية."
  },
  {
    "id": 9,
    "name": "God of War Ragnarök",
    "category": "game",
    "platform": "PS5",
    "platClass": "ps5",
    "maker": "Santa Monica Studio",
    "type": "قرص فيزيائي (Disc)",
    "price": 59,
    "img": "images/gow-ragnarok.webp",
    "desc": "ملحمة كريتوس وأتريوس بنسخة القرص الأصلية."
  },
  {
    "id": 10,
    "name": "The Last of Us Part II Remastered",
    "category": "game",
    "platform": "PS5",
    "platClass": "ps5",
    "maker": "Naughty Dog",
    "type": "نسخة رقمية (Digital Key)",
    "price": 49,
    "img": "images/tlou2.webp",
    "desc": "النسخة المحسنة لجهاز PS5 مع أطوار لعب إضافية."
  },
  {
    "id": 11,
    "name": "EA Sports FC 26",
    "category": "game",
    "platform": "PS5",
    "platClass": "ps5",
    "maker": "EA Sports",
    "type": "قرص فيزيائي (Disc)",
    "price": 65,
    "img": "images/fc26.webp",
    "desc": "أحدث إصدار من لعبة كرة القدم الشهيرة مع التعليق العربي."
  },
  {
    "id": 12,
    "name": "Halo Infinite",
    "category": "game",
    "platform": "Xbox",
    "platClass": "xbox",
    "maker": "343 Industries",
    "type": "قرص فيزيائي (Disc)",
    "price": 45,
    "img": "images/halo-infinite.webp",
    "desc": "سلسلة الخيال العلمي الأشهر على منصة إكس بوكس."
  },
  {
    "id": 13,
    "name": "Forza Horizon 5",
    "category": "game",
    "platform": "Xbox",
    "platClass": "xbox",
    "maker": "Playground Games",
    "type": "نسخة رقمية (Digital Key)",
    "price": 55,
    "img": "images/forza5.webp",
    "desc": "أقوى لعبة سباقات سيارات في عالم مفتوح."
  },
  {
    "id": 14,
    "name": "Starfield",
    "category": "game",
    "platform": "Xbox",
    "platClass": "xbox",
    "maker": "Bethesda Game Studios",
    "type": "نسخة رقمية (Digital Key)",
    "price": 59,
    "img": "images/starfield.webp",
    "desc": "استكشف الفضاء ومئات الكواكب في مغامرة RPG ضخمة."
  },
  {
    "id": 15,
    "name": "Gears 5",
    "category": "game",
    "platform": "Xbox",
    "platClass": "xbox",
    "maker": "The Coalition",
    "type": "قرص فيزيائي (Disc)",
    "price": 29,
    "img": "images/gears5.webp",
    "desc": "لعبة الأكشن والتصويب الجماعية المميزة لإكس بوكس."
  },
  {
    "id": 16,
    "name": "Cyberpunk 2077: Ultimate Edition",
    "category": "game",
    "platform": "PC",
    "platClass": "pc",
    "maker": "CD Projekt Red",
    "type": "نسخة رقمية (Steam Key)",
    "price": 39,
    "img": "images/cyberpunk2077.webp",
    "desc": "كود تفعيل لمنصة Steam يتضمن التوسعة الكاملة Phantom Liberty."
  },
  {
    "id": 17,
    "name": "Elden Ring",
    "category": "game",
    "platform": "PC",
    "platClass": "pc",
    "maker": "FromSoftware",
    "type": "نسخة رقمية (Steam Key)",
    "price": 59,
    "img": "images/elden-ring.webp",
    "desc": "لعبة العام الحائزة على الجوائز بنسخة الحاسوب الشخصي."
  },
  {
    "id": 18,
    "name": "Red Dead Redemption 2",
    "category": "game",
    "platform": "PC",
    "platClass": "pc",
    "maker": "Rockstar Games",
    "type": "نسخة رقمية (Rockstar Key)",
    "price": 35,
    "img": "images/rdr2.webp",
    "desc": "قصة الغرب الأمريكي الشهيرة بأعلى دقة رسومية على الكمبيوتر."
  },
  {
    "id": 19,
    "name": "Minecraft Java & Bedrock",
    "category": "game",
    "platform": "PC",
    "platClass": "pc",
    "maker": "Mojang Studios",
    "type": "كود رقمي (Digital Key)",
    "price": 29,
    "img": "images/minecraft.webp",
    "desc": "النسختان معاً في كود تفعيل واحد لحساب مايكروسوفت."
  },
  {
    "id": 20,
    "name": "Call of Duty: Black Ops 6",
    "category": "game",
    "platform": "PC",
    "platClass": "pc",
    "maker": "Activision",
    "type": "نسخة رقمية (Battle.net)",
    "price": 69,
    "img": "images/cod-bo6.webp",
    "desc": "أحدث أجزاء سلسلة كول أوف ديوتي مع طور القصة والزومبي."
  },
  {
    "id": 21,
    "name": "Counter-Strike 2 Prime Status",
    "category": "game",
    "platform": "PC",
    "platClass": "pc",
    "maker": "Valve",
    "type": "كود رقمي (Steam Key)",
    "price": 15,
    "img": "images/cs2.webp",
    "desc": "ترقية الحساب إلى Prime على منصة ستيم."
  },
  {
    "id": 22,
    "name": "The Legend of Zelda: Tears of the Kingdom",
    "category": "game",
    "platform": "Nintendo",
    "platClass": "nintendo",
    "maker": "Nintendo",
    "type": "بطاقة لعبة (Physical)",
    "price": 69,
    "img": "images/zelda-totk.webp",
    "desc": "مغامرة لينك الأسطورية في سماء وأرض هايرول."
  },
  {
    "id": 23,
    "name": "Super Mario Bros. Wonder",
    "category": "game",
    "platform": "Nintendo",
    "platClass": "nintendo",
    "maker": "Nintendo",
    "type": "بطاقة لعبة (Physical)",
    "price": 59,
    "img": "images/mario-wonder.webp",
    "desc": "أحدث مغامرات ماريو الجماعية الممتعة لجميع الأعمار."
  },
  {
    "id": 24,
    "name": "Mario Kart 8 Deluxe",
    "category": "game",
    "platform": "Nintendo",
    "platClass": "nintendo",
    "maker": "Nintendo",
    "type": "نسخة رقمية (eShop Key)",
    "price": 55,
    "img": "images/mariokart8.webp",
    "desc": "لعبة سباقات ماريو الأكثر مبيعاً على نينتندو سويتش."
  },
  {
    "id": 25,
    "name": "Pokémon Scarlet",
    "category": "game",
    "platform": "Nintendo",
    "platClass": "nintendo",
    "maker": "Game Freak",
    "type": "بطاقة لعبة (Physical)",
    "price": 59,
    "img": "images/pokemon-scarlet.webp",
    "desc": "اكتشف بوكيمونات جديدة في عالم مفتوح واسع."
  }
];

function getCart() {
    var data = localStorage.getItem("gp_cart");
    return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
    localStorage.setItem("gp_cart", JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    var badge = document.getElementById("cart-count");
    if (badge) {
        badge.innerHTML = getCart().length;
    }
}

function addToCart(productId) {
    var product = PRODUCTS.find(function(p) { return p.id === productId; });
    if (!product) return;
    var cart = getCart();
    cart.push(product);
    saveCart(cart);
    window.alert("✅ تمت إضافة (" + product.name + ") إلى سلة المشتريات!");
}

function removeFromCart(index) {
    var cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCartPage();
}

function clearCart() {
    localStorage.removeItem("gp_cart");
    updateCartBadge();
    renderCartPage();
}

function openDetails(productId) {
    localStorage.setItem("gp_selected_product", productId);
    window.location.href = "product-details.html";
}

function createCardHTML(p) {
    var platBorder = p.category === "console" ? "plat-console" : "plat-" + p.platClass;
    var badgeClass = "bg-" + p.platClass;
    return '<div class="card ' + platBorder + '">' +
        '<img src="' + p.img + '" alt="' + p.name + '" width="230" height="135" style="border:1px solid #475569;">' +
        '<div><span class="badge ' + badgeClass + '">' + p.platform + '</span>' +
        '<span class="badge bg-type">' + p.type + '</span></div>' +
        '<h4>' + p.name + '</h4>' +
        '<p><small>الشركة: ' + p.maker + '</small></p>' +
        '<p class="price-tag">' + p.price + '$</p>' +
        '<a href="product-details.html" class="btn-blue" onclick="localStorage.setItem(\'gp_selected_product\', ' + p.id + ')">التفاصيل</a>' +
        '<button type="button" class="btn" onclick="addToCart(' + p.id + ')">أضف للسلة</button>' +
        '</div>';
}

window.onload = function() {
    updateCartBadge();
    if (typeof pageInit === "function") {
        pageInit();
    }
};
