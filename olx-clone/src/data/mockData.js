// Reusable Image pools for categories to maintain premium look while scaling data
const IMM = {
  phones: [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800",
    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800",
    "https://images.unsplash.com/photo-1678949826279-8809287c88b9?q=80&w=800"
  ],
  vehicles: [
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800",
    "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800",
    "https://images.unsplash.com/photo-1621217595561-1c5cba1b33bf?q=80&w=800",
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800", // Bike
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800"  // Bike
  ],
  laptops: [
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800"
  ],
  property: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800"
  ],
  clothing: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
    "https://images.unsplash.com/photo-1583391733958-d25e07fac0ce?q=80&w=800",
    "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800"
  ],
  furniture: [
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800",
    "https://images.unsplash.com/photo-1617806118233-18e1c0945594?q=80&w=800",
    "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800",
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800"
  ],
  electronics: [
    "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800",
    "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
    "https://images.unsplash.com/photo-1585565804112-f201f68c48b4?q=80&w=800"
  ],
  pets: [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800", // Cat
    "https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?q=80&w=800", // Dog
    "https://images.unsplash.com/photo-1522276498395-e23fcbe89db1?q=80&w=800", // Bird
    "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=800"  // Another Cat
  ]
};

const users = [
  { id: "u1", name: "Ahmed Raza" },
  { id: "u2", name: "Zainab Chaudhry" },
  { id: "u3", name: "Ali Khan" },
  { id: "u4", name: "Bilal Ahmed" },
  { id: "u5", name: "Tech Store" },
  { id: "u6", name: "Real Estate Corp" }
];

const locs = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Rawalpindi", "Multan", "Peshawar", "Quetta"];

// Helper to generate dynamic past dates
const generateDate = (daysAgo) => new Date(Date.now() - 86400000 * daysAgo).toISOString();

export const mockProducts = [
  // ================= 📱 PHONES (10 Items) =================
  { id: "ph1", title: "iPhone 14 Pro Max 256GB", description: "Mint condition iPhone 14 Pro Max. Battery health 100%.", price: 380000, category: "phones", condition: "used", location: "Lahore", image: IMM.phones[0], createdAt: generateDate(1), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "ph2", title: "Samsung Galaxy S23 Ultra", description: "Brand new Galaxy S23 Ultra. Box packed. Official warranty.", price: 420000, category: "phones", condition: "new", location: "Karachi", image: IMM.phones[1], createdAt: generateDate(2), userId: "u5", sellerName: "Tech Store" },
  { id: "ph3", title: "Infinix Note 30 Pro", description: "Used Infinix Note 30. Budget king with super fast charging.", price: 65000, category: "phones", condition: "used", location: "Faisalabad", image: IMM.phones[2], createdAt: generateDate(4), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "ph4", title: "Google Pixel 7 Pro", description: "Hazel color Pixel 7 Pro. Best camera phone on the market.", price: 165000, category: "phones", condition: "used", location: "Islamabad", image: IMM.phones[3], createdAt: generateDate(5), userId: "u3", sellerName: "Ali Khan" },
  { id: "ph5", title: "iPhone 12 128GB", description: "Non-PTA iPhone 12. Great for gaming. Screen slightly scratched.", price: 95000, category: "phones", condition: "used", location: "Rawalpindi", image: IMM.phones[0], createdAt: generateDate(6), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "ph6", title: "OnePlus 11 5G", description: "Brand new OnePlus 11. 16GB RAM variant. Titan Black.", price: 210000, category: "phones", condition: "new", location: "Lahore", image: IMM.phones[1], createdAt: generateDate(1), userId: "u5", sellerName: "Tech Store" },
  { id: "ph7", title: "Xiaomi Redmi Note 12", description: "Affordable Redmi Note 12. 6 months used. Excellent battery.", price: 45000, category: "phones", condition: "used", location: "Multan", image: IMM.phones[2], createdAt: generateDate(3), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "ph8", title: "Oppo Reno 10", description: "Brand new Oppo Reno 10. Seal packed. 1 year Oppo warranty.", price: 110000, category: "phones", condition: "new", location: "Karachi", image: IMM.phones[3], createdAt: generateDate(0), userId: "u5", sellerName: "Tech Store" },
  { id: "ph9", title: "Vivo V27e", description: "Used Vivo V27e. Aura light portrait master. Purple color.", price: 75000, category: "phones", condition: "used", location: "Peshawar", image: IMM.phones[0], createdAt: generateDate(7), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "ph10", title: "iPhone 15 Pro Titanium", description: "Latest iPhone 15 Pro Natural Titanium. Just arrived from Dubai.", price: 450000, category: "phones", condition: "new", location: "Islamabad", image: IMM.phones[1], createdAt: generateDate(2), userId: "u3", sellerName: "Ali Khan" },

  // ================= 💻 LAPTOPS (10 Items) =================
  { id: "lp1", title: "Dell Core i7 12th Gen", description: "Dell Latitude 5000 Series. 16GB RAM, 512GB NvMe. Used lightly.", price: 180000, category: "laptops", condition: "used", location: "Islamabad", image: IMM.laptops[0], createdAt: generateDate(10), userId: "u3", sellerName: "Ali Khan" },
  { id: "lp2", title: "HP Pavilion 15 Gaming", description: "Brand new HP Pavilion. RTX 3050, 144Hz. Sealed box.", price: 250000, category: "laptops", condition: "new", location: "Karachi", image: IMM.laptops[1], createdAt: generateDate(1), userId: "u5", sellerName: "Tech Store" },
  { id: "lp3", title: "MacBook Pro M2 2023", description: "M2 Chip MacBook Pro. Space Gray. 2 cycles battery count.", price: 380000, category: "laptops", condition: "used", location: "Lahore", image: IMM.laptops[2], createdAt: generateDate(4), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "lp4", title: "Lenovo ThinkPad X1 Carbon", description: "Ultralight business laptop. Core i7 10th Gen. Best keyboard.", price: 140000, category: "laptops", condition: "used", location: "Karachi", image: IMM.laptops[3], createdAt: generateDate(12), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "lp5", title: "Acer Nitro 5", description: "Budget gaming machine. GTX 1650, Core i5. Used for 1 year.", price: 135000, category: "laptops", condition: "used", location: "Faisalabad", image: IMM.laptops[0], createdAt: generateDate(8), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "lp6", title: "MacBook Air M1", description: "Pristine M1 Air. Gold color. Best battery life for students.", price: 190000, category: "laptops", condition: "used", location: "Islamabad", image: IMM.laptops[2], createdAt: generateDate(3), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "lp7", title: "Microsoft Surface Pro 8", description: "Brand new Surface Pro 8. Includes Signature Keyboard.", price: 290000, category: "laptops", condition: "new", location: "Lahore", image: IMM.laptops[1], createdAt: generateDate(2), userId: "u5", sellerName: "Tech Store" },
  { id: "lp8", title: "Asus ROG Zephyrus G14", description: "Beast gaming laptop. Ryzen 9, RTX 3060. Anime Matrix lid.", price: 320000, category: "laptops", condition: "used", location: "Rawalpindi", image: IMM.laptops[3], createdAt: generateDate(6), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "lp9", title: "HP Envy x360", description: "Convertible 2-in-1 laptop. Touchscreen. Perfect condition.", price: 175000, category: "laptops", condition: "used", location: "Multan", image: IMM.laptops[0], createdAt: generateDate(5), userId: "u3", sellerName: "Ali Khan" },
  { id: "lp10", title: "Dell XPS 13 9310", description: "Premium ultrabook. 4K screen, Core i7 11th gen.", price: 260000, category: "laptops", condition: "used", location: "Karachi", image: IMM.laptops[1], createdAt: generateDate(1), userId: "u1", sellerName: "Ahmed Raza" },

  // ================= 🚗 VEHICLES (10 Items) =================
  { id: "vh1", title: "Honda Civic RS Turbo 2022", description: "Immaculate condition. First owner. Ceramic coated.", price: 7500000, category: "vehicles", condition: "used", location: "Lahore", image: IMM.vehicles[0], createdAt: generateDate(5), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "vh2", title: "Toyota Grande 2021", description: "White Grande 1.8X. Bumper to bumper genuine.", price: 6200000, category: "vehicles", condition: "used", location: "Karachi", image: IMM.vehicles[1], createdAt: generateDate(3), userId: "u3", sellerName: "Ali Khan" },
  { id: "vh3", title: "Suzuki Alto VXL 2023", description: "Brand new unregistered Suzuki Alto. Immediate delivery.", price: 2750000, category: "vehicles", condition: "new", location: "Islamabad", image: IMM.vehicles[2], createdAt: generateDate(2), userId: "u5", sellerName: "Tech Store" },
  { id: "vh4", title: "Kia Sportage AWD 2022", description: "AWD Sportage. Driven by executive. Panoramic roof.", price: 7800000, category: "vehicles", condition: "used", location: "Faisalabad", image: IMM.vehicles[3], createdAt: generateDate(8), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "vh5", title: "Honda CG 125 2023", description: "Black CG 125. 5000km driven. Just like new.", price: 210000, category: "vehicles", condition: "used", location: "Rawalpindi", image: IMM.vehicles[4], createdAt: generateDate(4), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "vh6", title: "Yamaha YBR 125G", description: "Brand new Yamaha YBR 125G. Zero meter.", price: 425000, category: "vehicles", condition: "new", location: "Multan", image: IMM.vehicles[5], createdAt: generateDate(1), userId: "u5", sellerName: "Tech Store" },
  { id: "vh7", title: "Toyota Fortuner Legender", description: "Fortuner Legender 2022. Low mileage. Outstanding SUV.", price: 18500000, category: "vehicles", condition: "used", location: "Lahore", image: IMM.vehicles[1], createdAt: generateDate(10), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "vh8", title: "Suzuki Swift GLX CVT", description: "Top of the line Swift. 2022 model. Navigation included.", price: 4500000, category: "vehicles", condition: "used", location: "Islamabad", image: IMM.vehicles[0], createdAt: generateDate(3), userId: "u3", sellerName: "Ali Khan" },
  { id: "vh9", title: "MG HS Exclusive 2021", description: "MG HS Red interior. Token tax paid up to date.", price: 6500000, category: "vehicles", condition: "used", location: "Karachi", image: IMM.vehicles[3], createdAt: generateDate(7), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "vh10", title: "Vespa Classic Scooter", description: "Fully restored classic Vespa. Collector's item.", price: 350000, category: "vehicles", condition: "used", location: "Lahore", image: IMM.vehicles[4], createdAt: generateDate(12), userId: "u2", sellerName: "Zainab Chaudhry" },

  // ================= 🏠 PROPERTY (10 Items) =================
  { id: "pr1", title: "Luxury 2 Bed Apartment", description: "Sea-facing 2 bed apartment in Clifton. Fully furnished.", price: 65000, category: "property", condition: "new", location: "Karachi", image: IMM.property[0], createdAt: generateDate(15), userId: "u6", sellerName: "Real Estate Corp" },
  { id: "pr2", title: "10 Marla House Bahria Town", description: "Beautiful designer 10 Marla house. Phase 8. Ready to move.", price: 32000000, category: "property", condition: "used", location: "Rawalpindi", image: IMM.property[1], createdAt: generateDate(8), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "pr3", title: "Commercial Shop DHA", description: "Prime location shop in DHA commercial area.", price: 150000, category: "property", condition: "new", location: "Lahore", image: IMM.property[2], createdAt: generateDate(4), userId: "u6", sellerName: "Real Estate Corp" },
  { id: "pr4", title: "5 Marla Plot", description: "Level plot in CDA sector I-15. Direct allotment transfer.", price: 8500000, category: "property", condition: "new", location: "Islamabad", image: IMM.property[3], createdAt: generateDate(1), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "pr5", title: "1 Kanal Corner Plot", description: "Corner plot facing park. DHA Phase 6. Golden opportunity.", price: 45000000, category: "property", condition: "new", location: "Lahore", image: IMM.property[3], createdAt: generateDate(2), userId: "u3", sellerName: "Ali Khan" },
  { id: "pr6", title: "3 Bed Portion For Rent", description: "Ground floor portion. 3 baths, drawing dining. Tariq Road.", price: 45000, category: "property", condition: "used", location: "Karachi", image: IMM.property[0], createdAt: generateDate(6), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "pr7", title: "Farmhouse Land", description: "4 Kanal lush green land for farmhouse near Motorway.", price: 12000000, category: "property", condition: "used", location: "Islamabad", image: IMM.property[1], createdAt: generateDate(9), userId: "u6", sellerName: "Real Estate Corp" },
  { id: "pr8", title: "Studio Apartment rental", description: "Fully furnished studio for bachelors. Inclusive of bills.", price: 25000, category: "property", condition: "used", location: "Lahore", image: IMM.property[0], createdAt: generateDate(3), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "pr9", title: "Coworking Space / Office", description: "Fully operational coworking space interior. 50 seats capacity.", price: 5000000, category: "property", condition: "used", location: "Faisalabad", image: IMM.property[2], createdAt: generateDate(11), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "pr10", title: "Villa in Palm City", description: "Luxurious Spanish style villa. 4 beds, pool, gym.", price: 55000000, category: "property", condition: "new", location: "Karachi", image: IMM.property[1], createdAt: generateDate(2), userId: "u6", sellerName: "Real Estate Corp" },

  // ================= 👕 CLOTHING (10 Items) =================
  { id: "cl1", title: "Premium Winter Leather Jacket", description: "Pure cow hide leather. Very warm. Size Large.", price: 8500, category: "clothing", condition: "new", location: "Lahore", image: IMM.clothing[0], createdAt: generateDate(6), userId: "u3", sellerName: "Ali Khan" },
  { id: "cl2", title: "Designer Embroidered Kurti", description: "Boutique piece. 3 piece suit unstitched. Pure chiffon.", price: 12500, category: "clothing", condition: "new", location: "Karachi", image: IMM.clothing[1], createdAt: generateDate(2), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "cl3", title: "Pack of 3 Basic Tees", description: "Export left over basic cotton t-shirts. Medium size.", price: 1500, category: "clothing", condition: "new", location: "Faisalabad", image: IMM.clothing[2], createdAt: generateDate(1), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "cl4", title: "Wedding Lehenga", description: "Heavy bridal lehenga. Worn once for 3 hours. Red color.", price: 85000, category: "clothing", condition: "used", location: "Islamabad", image: IMM.clothing[3], createdAt: generateDate(8), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "cl5", title: "Nike Air Force 1", description: "White AF1s. Size 10 US. Original box included.", price: 18000, category: "clothing", condition: "new", location: "Lahore", image: IMM.clothing[0], createdAt: generateDate(3), userId: "u5", sellerName: "Tech Store" },
  { id: "cl6", title: "Men's Formal Suit", description: "Charcoal grey 2 piece suit. Fitting: Slim Fit.", price: 9000, category: "clothing", condition: "used", location: "Karachi", image: IMM.clothing[1], createdAt: generateDate(5), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "cl7", title: "Gym Wear Tracksuit", description: "Breathable polyester track suit. Perfect for winter running.", price: 2800, category: "clothing", condition: "new", location: "Rawalpindi", image: IMM.clothing[2], createdAt: generateDate(7), userId: "u3", sellerName: "Ali Khan" },
  { id: "cl8", title: "Party Wear Maxi", description: "Maxi for evening events. Soft net material.", price: 5500, category: "clothing", condition: "used", location: "Multan", image: IMM.clothing[3], createdAt: generateDate(4), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "cl9", title: "Levi's 501 Jeans", description: "Original Levi's straight fit jeans. Blue wash.", price: 4500, category: "clothing", condition: "new", location: "Lahore", image: IMM.clothing[0], createdAt: generateDate(2), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "cl10", title: "Ray-Ban Aviators", description: "Original Ray-Ban sunglasses. Black frame, polarised lenses.", price: 21000, category: "clothing", condition: "new", location: "Islamabad", image: IMM.clothing[1], createdAt: generateDate(10), userId: "u1", sellerName: "Ahmed Raza" },

  // ================= 🪑 FURNITURE (10 Items) =================
  { id: "fn1", title: "L-Shape Sofa Velvet", description: "Premium L shape corner sofa. Navy blue velvet. 1 year used.", price: 45000, category: "furniture", condition: "used", location: "Karachi", image: IMM.furniture[0], createdAt: generateDate(12), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "fn2", title: "Glass Dining Table Set", description: "Heavy duty tempered glass with 6 metal chairs.", price: 28000, category: "furniture", condition: "used", location: "Islamabad", image: IMM.furniture[1], createdAt: generateDate(14), userId: "u3", sellerName: "Ali Khan" },
  { id: "fn3", title: "WFH Study Desk", description: "Solid wood study desk with cable management holes.", price: 12000, category: "furniture", condition: "new", location: "Lahore", image: IMM.furniture[2], createdAt: generateDate(9), userId: "u5", sellerName: "Tech Store" },
  { id: "fn4", title: "King Size Bed Frame", description: "Hand carved wooden bed frame without mattress. Teak wood.", price: 85000, category: "furniture", condition: "new", location: "Peshawar", image: IMM.furniture[3], createdAt: generateDate(3), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "fn5", title: "Orthopedic Mattress", description: "King size memory foam mattress. Excellent for back pain.", price: 30000, category: "furniture", condition: "new", location: "Karachi", image: IMM.furniture[0], createdAt: generateDate(5), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "fn6", title: "Bookshelf 5-Tier", description: "Industrial pipe and wood style bookshelf.", price: 8500, category: "furniture", condition: "used", location: "Faisalabad", image: IMM.furniture[2], createdAt: generateDate(7), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "fn7", title: "Ergonomic Office Chair", description: "Mesh back ergonomic chair with headrest and lumbar support.", price: 22000, category: "furniture", condition: "new", location: "Lahore", image: IMM.furniture[1], createdAt: generateDate(2), userId: "u5", sellerName: "Tech Store" },
  { id: "fn8", title: "TV Console / Cabinet", description: "Modern white TV console. Fits up to 65 inch TVs.", price: 16000, category: "furniture", condition: "used", location: "Islamabad", image: IMM.furniture[3], createdAt: generateDate(8), userId: "u3", sellerName: "Ali Khan" },
  { id: "fn9", title: "Outdoor Patio Set", description: "Rattan sofa set for garden. Weather resistant. 4 pieces.", price: 35000, category: "furniture", condition: "new", location: "Rawalpindi", image: IMM.furniture[0], createdAt: generateDate(4), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "fn10", title: "Nest of Tables", description: "Set of 3 wooden nesting tables. Walnut finish.", price: 9500, category: "furniture", condition: "used", location: "Karachi", image: IMM.furniture[2], createdAt: generateDate(1), userId: "u2", sellerName: "Zainab Chaudhry" },

  // ================= ⚡ ELECTRONICS (10 Items) =================
  { id: "el1", title: "Samsung 65\" 4K Smart TV", description: "Crystal UHD display. Voice remote included. Wall mount ready.", price: 185000, category: "electronics", condition: "used", location: "Lahore", image: IMM.electronics[0], createdAt: generateDate(5), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "el2", title: "Sony HT-S20R Soundbar", description: "Authentic 5.1ch real surround sound. Brand new.", price: 55000, category: "electronics", condition: "new", location: "Karachi", image: IMM.electronics[1], createdAt: generateDate(9), userId: "u6", sellerName: "Real Estate Corp" },
  { id: "el3", title: "Canon EOS 90D DSLR", description: "Body + 18-135mm lens. Shutter count under 10k. Excellent for vloggers.", price: 250000, category: "electronics", condition: "used", location: "Islamabad", image: IMM.electronics[2], createdAt: generateDate(2), userId: "u3", sellerName: "Ali Khan" },
  { id: "el4", title: "PlayStation 5 Disc Edition", description: "PS5 Console with 2 DualSense controllers. Hardly used.", price: 155000, category: "electronics", condition: "used", location: "Faisalabad", image: IMM.electronics[3], createdAt: generateDate(11), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "el5", title: "Haier 1.5 Ton AC", description: "DC Inverter AC. Energy saving mode. Used for 1 season.", price: 110000, category: "electronics", condition: "used", location: "Lahore", image: IMM.electronics[0], createdAt: generateDate(4), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "el6", title: "Dawlance Refrigerator", description: "Double door fridge. Metallic finish. 12 years compressor warranty left.", price: 85000, category: "electronics", condition: "new", location: "Karachi", image: IMM.electronics[1], createdAt: generateDate(1), userId: "u5", sellerName: "Tech Store" },
  { id: "el7", title: "Apple AirPods Pro Gen 2", description: "Noise cancellation earbuds. 100% authentic, check SN.", price: 65000, category: "electronics", condition: "new", location: "Islamabad", image: IMM.electronics[3], createdAt: generateDate(3), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "el8", title: "Nespresso Coffee Machine", description: "Capsule coffee machine. Perfect working order. Elegant black.", price: 22000, category: "electronics", condition: "used", location: "Peshawar", image: IMM.electronics[2], createdAt: generateDate(7), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "el9", title: "LG Front Load Washing Machine", description: "8KG capacity front load washer. Direct drive motor.", price: 130000, category: "electronics", condition: "used", location: "Rawalpindi", image: IMM.electronics[0], createdAt: generateDate(8), userId: "u3", sellerName: "Ali Khan" },
  { id: "el10", title: "DJI Mini 3 Pro Drone", description: "Compact camera drone with intelligent features. Includes fly more combo.", price: 215000, category: "electronics", condition: "used", location: "Lahore", image: IMM.electronics[2], createdAt: generateDate(2), userId: "u1", sellerName: "Ahmed Raza" },

  // ================= 🐶 PETS (10 Items) =================
  { id: "pt1", title: "Persian Kitten White", description: "Triple coated white Persian kitten (2 months). Blue eyes.", price: 18000, category: "pets", condition: "new", location: "Karachi", image: IMM.pets[0], createdAt: generateDate(1), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "pt2", title: "German Shepherd Puppy", description: "Working line GSD puppy. 8 weeks old, vaccinated and dewormed.", price: 25000, category: "pets", condition: "new", location: "Lahore", image: IMM.pets[1], createdAt: generateDate(3), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "pt3", title: "Macaw Parrot", description: "Blue and Gold Macaw. Hand tamed and steps up. High quality diet fed.", price: 150000, category: "pets", condition: "used", location: "Faisalabad", image: IMM.pets[2], createdAt: generateDate(4), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "pt4", title: "Siamese Cat", description: "Vocal and playful Siamese adult cat. Spayed.", price: 12000, category: "pets", condition: "used", location: "Islamabad", image: IMM.pets[3], createdAt: generateDate(5), userId: "u3", sellerName: "Ali Khan" },
  { id: "pt5", title: "Husky Female Puppy", description: "Siberian Husky pup with striking blue eyes. 7 weeks.", price: 30000, category: "pets", condition: "new", location: "Rawalpindi", image: IMM.pets[1], createdAt: generateDate(2), userId: "u1", sellerName: "Ahmed Raza" },
  { id: "pt6", title: "Cockatiel Pair", description: "Proven breeding pair of Lutino Cockatiels. Healthy.", price: 8000, category: "pets", condition: "used", location: "Multan", image: IMM.pets[2], createdAt: generateDate(6), userId: "u4", sellerName: "Bilal Ahmed" },
  { id: "pt7", title: "Golden Retriever Male", description: "Champion lineage Golden Retriever. 3 years old stud.", price: 65000, category: "pets", condition: "used", location: "Lahore", image: IMM.pets[1], createdAt: generateDate(8), userId: "u2", sellerName: "Zainab Chaudhry" },
  { id: "pt8", title: "British Shorthair Kitten", description: "Chunky British Shorthair blue kitten. Champion bloodlines.", price: 85000, category: "pets", condition: "new", location: "Karachi", image: IMM.pets[0], createdAt: generateDate(10), userId: "u6", sellerName: "Real Estate Corp" },
  { id: "pt9", title: "Fancy Pigeons Pair", description: "High flying fancy breed pigeons. Beautiful plumage.", price: 3500, category: "pets", condition: "new", location: "Peshawar", image: IMM.pets[2], createdAt: generateDate(7), userId: "u3", sellerName: "Ali Khan" },
  { id: "pt10", title: "Labrador Retriever", description: "Friendly 6 months old Labrador. Potty trained and knows commands.", price: 40000, category: "pets", condition: "used", location: "Islamabad", image: IMM.pets[1], createdAt: generateDate(1), userId: "u1", sellerName: "Ahmed Raza" }
];

export const CATEGORIES = [
  "phones", "laptops", "vehicles", "property", "clothing", "furniture", "electronics", "pets"
];
