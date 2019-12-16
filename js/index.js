class GoodsItem {
    constructor(id = '1', img = 'img/product.png', title = 'Подушка', price = '100') {
        this.id = id;
        this.img = img;
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
        <img src="${this.img}" alt="photo-post1" class="posts-news-wrap-img" width="300" height="180">
        <div class="posts-news-info">
            <h3 class="posts-news-info-title">${this.title}</h3>
            <p class="posts-news-info-paragraf">${this.price}$ </p>      
            <button class="read-buttom">Купить</button>
        </div>
        </div>`
    }
}
// Хранилице товара
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { id: 1, img: 'img/chair.jpg', title: 'Стул', price: 170 },
            { id: 2, img: 'img/lamp.jpg', title: 'Светильник', price: 200 },
            { id: 3, img: 'img/toy.jpg', title: 'Игрушка', price: 100 },
            { id: 4, img: 'img/flo.jpg', title: 'Цветок', price: 150 },
        ];
    }
    totalPrice() {
        return this.goods.reduce((accum, item) => {
            if (item.price) accum += item.price;
            return accum;
        }, 0)
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.img, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

class Cart extends GoodsList {
    constructor(goods) {
        super(goods)
    }
    clean() {}

    incGood(index) {
        let find = this.goods.find(el => el.id === index)
        let prod = this.goods[index]

        if (!find) {
            GoodsItem.push({
                id: index,
                img: prod.img,
                title: prod.title,
                price: prod.price,
                quantity: 1
            })
        } else {
            find.quantity++
        }
        // console.log('Вы добавили в корзину: ' + goods[index].title)
    }
    decGood(index) {
        let prod = this.goods[index]
        let find = this.goods.find(el => el.id === index)

        if (find.quantity > 1) {
            find.quantity--
        } else {
            GoodsList.splice(GoodsList.indexOf(find), 1)
        }
    }

    render(index) {
        let htmlString = '';
        this.goods.forEach(good => {
            const Cart = new CartItem;
            htmlString += Cart.render();
        });
        document.querySelector('.cart-block').innerHTML = htmlString
    }
}
class CartItem extends GoodsItem {
    constructor(id, img, title, price) {
        super(id, img, title, price) //вызов конструктора родителя
    }
    delete() {}
    render() {
        return `    
        <div class="cart-item">
        <div class="product-bio">
                <img src="${this.img}" alt="" style=" width: 150px; height : 80px ">
                <div class="product-desc">
                <p class="product-title">${this.title}</p>
                <p class="product-quantity">Тут должен быть счётчик</p> 
                <p class="product-single-price">${this.price}</p>
                 </div>
             <div class="right-block">
                <button class="del-btn""></button>
             </div>
        </div>
        </div>
    `
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
const cart = new Cart();
cart.render();

let btnCart = document.querySelector('.cart-button')
btnCart.addEventListener('click', function() {
    document.querySelector('.cart-block').classList.toggle('invisible') //смена класса(toggle)
})

document.querySelector('.container').addEventListener('click', function(e) {
    if (e.target.classList.contains('read-buttom')) {
        cart.incGood(+e.target.dataset['id'])
    }

    if (e.target.classList.contains('del-btn')) {
        cart.decGood(+e.target.dataset['id'])
    }
})

// console.log(list.totalPrice())