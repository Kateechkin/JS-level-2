const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: ''
    },
    methods: {
        makeGETRequest(url) {
            return new Promise((resolve, reject) => {
                let xhr;
                if (window.XMLHttpRequest) {
                    xhr = new window.XMLHttpRequest();
                } else {
                    xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
                }

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            const body = JSON.parse(xhr.responseText);
                            resolve(body)
                        } else {
                            reject(xhr.responseText);
                        }
                    }
                };
                xhr.onerror = function(err) {
                    reject(err);
                };

                xhr.open('GET', url);
                xhr.send();
            });
        }
    },
    async mounted() {
        try {
            this.goods = await this.makeGETRequest(`${API_URL}/catalogData.json`);
            this.filteredGoods = [...this.goods];
        } catch (e) {
            console.error(e);
        }
    }
});

// const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// function makeGETRequest(url) {
//     return new Promise((resolve, reject) => {
//         let xhr;
//         if (window.XMLHttpRequest) {
//             xhr = new window.XMLHttpRequest();
//         } else {
//             xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
//         }

//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     const body = JSON.parse(xhr.responseText);
//                     resolve(body)
//                 } else {
//                     reject(xhr.responseText);
//                 }
//             }
//         };
//         xhr.onerror = function(err) {
//             reject(err);
//         };

//         xhr.open('GET', url);
//         xhr.send();
//     });
// }

// class GoodsItem {
//     constructor(id_product = '1', product_name = 'Подушка', price = '100') {
//         // this.img = img;
//         this.id_product = id_product;
//         this.product_name = product_name;
//         this.price = price;
//     }
//     render() {
//         return `<div class="goods-item">
//         <img src="img/product.png" alt="photo-post1" class="posts-news-wrap-img" width="300" height="180">
//         <div class="posts-news-info">
//         <p class="posts-news-info-paragraf">${this.id_product}</p> 
//            <h3 class="posts-news-info-title">${this.product_name}</h3>
//             <p class="posts-news-info-paragraf">${this.price}$ </p>      
//             <button class="read-buttom">Купить</button>
//         </div>
//         </div>`
//     }
// }
// // Хранилице товара
// class GoodsList {

//     constructor() {
//         this.goods = [];
//         this.filteredGoods = [];
//         this.initEvents();
//     }

//     fetchGoods() {
//         return makeGETRequest(`${API_URL}/catalogData.json`)
//             .then((goods) => {
//                 this.goods = goods;
//                 this.filteredGoods = goods;
//             })
//             .catch(e => e);
//     }

//     filterGoods(value) {
//         const regexp = new RegExp(value, 'i');
//         this.filteredGoods = this.goods.filter((good) => regexp.test(good.product_name));
//         this.render();
//     }

//     initEvents() {
//             const searchForm = document.querySelector('.search-form');
//             const searchInput = document.querySelector('.search-input');
//             searchForm.addEventListener('submit', (e) => {
//                 e.preventDefault();
//                 const value = searchInput.value;
//                 this.filterGoods(value);
//             })
//         }

//     totalPrice() {
//         return this.goods.reduce((accum, item) => {
//             if (item.price) accum += item.price;
//             return accum;
//         }, 0)
//     }
//     render() {
//         let listHtml = '';
//         this.filteredGoods.forEach(good => {
//             const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
//             listHtml += goodItem.render();
//         });
//         document.querySelector('.goods-list').innerHTML = listHtml;
//     }
// }

// class Cart extends GoodsList {
//     constructor(props) {
//         super(props);
//     }
//     clean() {}
//     incGood() {}
//     decGood() {}
// }

// class CartItem extends GoodsItem {
//     constructor(props) {
//         super(props);
//     }
//     delete() {}
// }

// let btnCart = document.querySelector('.cart-button')
// btnCart.addEventListener('click', function() {
//     document.querySelector('.cart-block').classList.toggle('invisible') //смена класса(toggle)
// })

// const list = new GoodsList();

// list.fetchGoods().then(() => {
//     list.render();
// }).catch(e => console.error(e));