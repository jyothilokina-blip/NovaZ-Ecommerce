const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

    console.log("MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany([

{
    id:1,
    category:"💻 Electronics",
    name:"Gaming Laptop",
    description:"Intel i7 • 16GB RAM • 512GB SSD",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
    price:50000,
    oldPrice:62000,
    rating:"★★★★★",
     specs:[
        "Intel Core i7 Processor",
        "16GB RAM",
        "512GB SSD",
        "15.6 Inch Full HD",
        "Windows 11"
    ]
},

{
    id:2,
    category:"📱 Electronics",
    name:"Smart Phone",
    description:"128GB Storage • AMOLED Display",
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",
    price:25000,
    oldPrice:30000,
    rating:"★★★★★",
     specs:[
        "128GB Storage",
        "8GB RAM",
        "5000mAh Battery",
        "50MP Camera",
        "AMOLED Display"
    ]
},

{
    id:3,
    category:"👟 Fashion",
    name:"Running Shoes",
    description:"Comfortable Sports Shoes",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    price:3500,
    oldPrice:4999,
    rating:"★★★★☆",
     specs:[
        "Rubber Sole",
        "Light Weight",
        "Sports Design",
        "Breathable Fabric",
        "Easy Wash"
    ]
},

{
    id:4,
    category:"🎒 Accessories",
    name:"Travel Backpack",
    description:"Water Resistant Backpack",
    image:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=900",
    price:1800,
    oldPrice:2500,
    rating:"★★★★★",
     specs:[
        "Water Resistant",
        "USB Charging Port",
        "Laptop Compartment",
        "35L Capacity",
        "Premium Fabric"
    ]
},

{
    id:5,
    category:"⌚ Lifestyle",
    name:"Smart Watch",
    description:"Fitness & Health Tracking",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
    price:5500,
    oldPrice:7000,
    rating:"★★★★★",
     specs:[
        "Heart Rate Monitor",
        "Bluetooth Calling",
        "7 Days Battery",
        "Sleep Tracking",
        "Water Resistant"
    ]
},

{
    id:6,
    category:"🎧 Electronics",
    name:"Wireless Headphones",
    description:"Noise Cancelling Audio",
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
    price:2800,
    oldPrice:3900,
    rating:"★★★★★",
      specs:[
        "Bluetooth 5.3",
        "Noise Cancellation",
        "30 Hours Battery",
        "Fast Charging",
        "Built-in Mic"
    ]
},

{
    id:7,
    category:"💧 Lifestyle",
    name:"Steel Water Bottle",
    description:"Keeps Water Cold for 24 Hours",
    image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900",
    price:650,
    oldPrice:899,
    rating:"★★★★☆",
       specs:[
        "1 Litre",
        "Leak Proof",
        "24 Hours Cold",
        "12 Hours Hot",
        "Food Grade Steel"
    ]
},

{
    id:8,
    category:"⌨ Electronics",
    name:"Mechanical Keyboard",
    description:"RGB Gaming Keyboard",
    image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=900",
    price:3200,
    oldPrice:4200,
    rating:"★★★★★",
      specs:[
        "RGB Lighting",
        "Blue Switches",
        "USB Type-C",
        "104 Keys",
        "Anti Ghosting"
    ]
},

{
    id:9,
    category:"🖱 Electronics",
    name:"Wireless Mouse",
    description:"Ergonomic Design",
    image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=900",
    price:1200,
    oldPrice:1800,
    rating:"★★★★★",
      specs:[
        "1600 DPI",
        "Silent Click",
        "Rechargeable",
        "Bluetooth",
        "Light Weight"
    ]
}

]);

    console.log("Products Inserted Successfully");

    process.exit();

});