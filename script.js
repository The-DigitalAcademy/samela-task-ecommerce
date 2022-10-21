// PRODUCTS VARIABLE
var productsState = [
  {
    id: 1,
    name: ' Letter Graphic Drop Shoulder Pullover',
    price: 150,
    rates: 5,
    image:
      'https://img.ltwebstatic.com/images3_pi/2021/08/16/1629083587474cdf17585774a0fe80784bb60b22cc.webp',
  },
  {
    id: 2,
    name: 'short dress',
    price: 3000,
    rates: 3,
    image:
      'https://img.ltwebstatic.com/images3_pi/2021/10/15/16342613338f40e1ee14f9b7c6d3688e2deb90d4ef_thumbnail_900x.webp',
  },
  {
    id: 1,
    name: 'Lcn Music Merch Oversized Graphic Crew',
    price: 350,
    rates: 2,
    image:
      'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-factorie/default/dwf32b6da9/5297790/5297790-10-2.jpg?sw=640&sh=960&sm=fit',
  },
  {
    id: 1,
    name: 'Racing Jacket',
    price: 800,
    rates: 1,
    image:
      'https://i.etsystatic.com/26828389/r/il/741783/3694956231/il_340x270.3694956231_71vx.jpg',
  },
  {
    id: 1,
    name: 'Contrast Collar Letter Graphic Crop PulloverDell Laptop',
    price: 120,
    rates: 1,
    image:
      'https://img.ltwebstatic.com/images3_pi/2021/06/11/1623380697decee6cf37d8732aeda1ad982c6c6fdb_thumbnail_900x.webp',
  },
  {
    id: 1,
    name: 'Macbook ProToddler Girls Slogan Graphic Hoodie',
    price: 200,
    rates: 5,
    image:
      'https://img.ltwebstatic.com/images3_pi/2022/07/25/1658734261f05455faea3d3bb11b55e072ce1d0252.webp',
  },
  {
    id: 1,
    name: 'Striped Trim Knit Tank Top',
    price: 320,
    rates: 4,
    image:
      'https://img.ltwebstatic.com/images3_pi/2020/11/06/160463123438e244cb65f140145d551346c8d7ce89.webp',
  },
  {
    id: 1,
    name: 'Puff Sleeve Schiffy Crop Top',
    price: 1000,
    rates: 3,
    image:
      'https://img.ltwebstatic.com/images3_pi/2021/05/24/16218288918b5c9acb61e2a4f7c320fc1a64c9814b.webp',
  },
]

var numberdisplay = []

// LINK JS TO HTML ELEMENT
const products = document.getElementById('products');
const cartData = document.getElementById('cartData');
const priceTotal = document.getElementById('priceTotal');




  samcotton.innerHTML = numberdisplay.length

  function cartitems(i){
    numberdisplay.push(productsState[i])
    document.getElementById('samcotton').innerHTML = numberdisplay.length;
    
  cartD()
  samatotal()
  homeDisplayProducts()
  saveTostoarge()
  getTolocalstorage()
}

function homeDisplayProducts() {
  products.innerHTML = ""
// loop into productsState and display
for (let i = 0; i < productsState.length; i++) {
  products.innerHTML += `
  <div class="product">
      <div class="product__img">
          <img
            src=${productsState[i].image}
            alt=""
          />
      </div>
          <div class="product__name">${productsState[i].name}</div>
            <div class="product__rate">
              ${'<span>*</span>'.repeat(productsState[i].rates)}
            </div>
            <div class="product__price">R <span>${productsState[i].price}</span></div> 
              <button onclick="cartitems(${i})">+ ADD TO CART</button> 
       </div>
  `
}
saveTostoarge()
getTolocalstorage()

}

// DISPLAY PRODUCTS IN HOME
function cartD() {
  cartData.innerHTML = ""
// loop into productsState and display
for (let i = 0; i < numberdisplay.length; i++) {
  cartData.innerHTML += `
  <div class="product">
      <div class="product__img">
          <img
            src="${numberdisplay[i].image}"
            alt=""
          />
      </div>
          <div class="product__name">${numberdisplay[i].name}</div>
            <div class="product__rate">
              ${'<span>*</span>'.repeat(numberdisplay[i].rates)}
            </div>
            <div class="product__price">R <span>${numberdisplay[i].price}</span></div> 
            <button class="btn" onclick="deleted(${i})">- Delete</button>
       </div>
  `
}

}

function deleted(i) {
  numberdisplay.splice(i,1)
  document.getElementById('samcotton').innerHTML = numberdisplay.length;

  cartD()
  samatotal()
  homeDisplayProducts()
  saveTostoarge()
  getTolocalstorage()
}

function samatotal(i) {
  let total = 0;

  for (let i = 0; i < numberdisplay.length; i++) {
     total  += numberdisplay[i].price
    
  }
  priceTotal.innerHTML = "R"+total
  saveTostoarge()
  getTolocalstorage()
}

function saveTostoarge() {
  var data = JSON.stringify(numberdisplay)
  localStorage.setItem('numberdisplay', data)
}

function getTolocalstorage(){
  var data = JSON.parse(localStorage.getItem('numberdisplay'))
  numberdisplay = data
}
  

// CALL THE DISPLAY FUNCTION
homeDisplayProducts()