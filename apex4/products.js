const products = [
    { id: 1, name: 'Samsung-Galaxy-Z-Flip phone', category: 'electronics', price: 899, rating: 3.0, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640603/Samsung-Galaxy-Z-Flip-3-5G-SM-F711U1-256GB-Purple-US-Model-Factory-Unlocked-Cell-Phone-Excellent-Condition_73ff9f36-a49c-4a46-96dd-cadc8e4d8e63.57be5b2d41f5b71cfd70baf5150d482d_d5dh3x.webp' },
    { id: 2, name: 'louis-vuitton coat', category: 'clothing', price: 199.99, rating: 3.0, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640385/louis-vuitton-reversible-mahina-monogram-wrap-coat--FOCO04R90010_PM2_Front_view_vz5u3r.webp' },
    { id: 3, name: 'Apple Laptop', category: 'electronics', price: 76999, rating: 4.5, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640315/best-apple-laptops-1724311667718-1724311739640_j8u6l1.webp' },
    { id: 4, name: 'Samsung galaxy Ear-Pods', category: 'electronics', price: 1999, rating: 5.0, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640290/61KVX-MbIUL._AC_UF1000_1000_QL80__cs11eu.jpg' },
    { id: 5, name: 'Dior NetBlack dress', category: 'clothing', price: 2999, rating: 3.9, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640331/dior-voguebus-may-22-story-inline_d6ilh2.webp' },
    { id: 6, name: 'Wool mini skirt Louis Vuitton', category: 'clothing', price: 999, rating: 2.5, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640318/brown-wool-louis-vuitton-skirt-47729540-1_fhjyfv.webp' },
    { id: 7, name: 'Louis-Vuitton Handbag', category: 'Handbags', price: 399, rating: 4.7, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640343/Louis-Vuitton-marketing-ecommerce_u379on.jpg' },
    { id: 8, name: 'Gucci MiniBags', category: 'Handbags', price: 399, rating: 3.0, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640360/Marmont_w8f0qf.avif' },
    { id: 9, name: 'Chanel-Bags', category: 'Handbags', price: 599, rating: 5.0, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640408/Why-Are-Chanel-Bags-Expensive_ata3gn.jpg' },
    { id: 10, name: 'bulgari serpenti necklace', category: 'Jewellery', price: 1699, rating: 2.0, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640296/267531_001_ful-3_c0ko6w.webp' },
    { id: 11, name: 'SAINT LAURENT Leather and Silver-Tone Bracelet', category: 'Jewellery', price: 999, rating: 3.5, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640368/w2000_q60_e9gsbk.avif' },
    { id: 12, name: 'Dior Earrings', category: 'Jewellery', price: 999, rating: 4.5, image: 'https://res.cloudinary.com/diesyy6ac/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1732640322/D35BDA19-3C8D-41C6-8760-0F6317A55098_1080x_gghmae.webp' },
];

document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('priceFilter').addEventListener('change', filterProducts);
document.getElementById('ratingFilter').addEventListener('change', filterProducts);

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const priceOrder = document.getElementById('priceFilter').value;
    const minRating = parseFloat(document.getElementById('ratingFilter').value);

    let filteredProducts = products;

  
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (!isNaN(minRating)) {
        filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
    }

    if (priceOrder) {
        filteredProducts = filteredProducts.sort((a, b) =>
            priceOrder === 'asc' ? a.price - b.price : b.price - a.price
        );
    }

    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const starRating = generateStars(product.rating);

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <div class="rating">${starRating}</div>
        `;

        productList.appendChild(productCard);
    });
}

function generateStars(rating) {
    const fullStar = '<span class="star full">★</span>';
    const emptyStar = '<span class="star empty">☆</span>';
    const maxStars = 5;

    let starHtml = '';
    for (let i = 1; i <= maxStars; i++) {
        starHtml += i <= Math.floor(rating) ? fullStar : emptyStar;
    }
    return starHtml;
}


displayProducts(products);