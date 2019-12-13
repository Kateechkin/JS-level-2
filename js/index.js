class GoodsItem {
    constructor(img = 'img/product.png', title = 'Подушка', price = '100') {
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

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { img: 'img/chair.jpg', title: 'Стул', price: 170 },
            { img: 'img/lamp.jpg', title: 'Светильник', price: 200 },
            { img: 'img/toy.jpg', title: 'Игрушка', price: 100 },
            { img: 'img/flo.jpg', title: 'Цветок', price: 150 },
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
            const goodItem = new GoodsItem(good.img, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

class Cart extends GoodsList {
    constructor(props) {
        super(props)
    }
    clean() {}
    incGood() {}
    decGood() {}
}
class CartItem extends GoodsItem {
    constructor(props) {
        super(props) //вызов конструктора родителя
    }
    delete() {

    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
console.log('list.totalPrice()')