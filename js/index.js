const goods = [
    { title: 'Подушка', price: 170 },
    { title: 'Светильник', price: 200 },
    { title: 'Игрушка', price: 100 },
    { title: 'Цветок', price: 150 }
    // { img: 'img/toy.jpg', title: 'Shoes', price: 150 },// Не знаю как передать сюда адес картинки, законтяет просто текстом

];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item">
        <img src="img/flo.jpg" alt="photo-post1" class="posts-news-wrap-img" width="300" height="180">
        <div class="posts-news-info">
            <h3 class="posts-news-info-title">${title}</h3>
            <p class="posts-news-info-paragraf">${price}$ </p>      
            <button class="read-buttom">Купить</button>
        </div>
        </div>`

};

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    // item.img передавале вот так
    document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);