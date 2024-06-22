let $ = document;
let svgShop = document.querySelectorAll(".svgShop");
let menuShopComputer = document.querySelector(".menuShopComputer");
let overlay = $.querySelector(".overlay");
let search_Mobile = $.querySelector(".search_Mobile");
let searchabsolute = $.querySelector(".searchabsolute");
let imgSlider = $.querySelector(".imgSlider");
let pre = $.querySelector(".pre");
let next = $.querySelector(".next");
let p1 = $.querySelectorAll(".p1");
let stores = $.querySelector(".stores");
let storeNotbook = $.querySelector(".storeNotbook");

/// Menu

svgShop.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation(); // جلوگیری از رسیدن کلیک به سند
    menuShopComputer.style.right = "0px";
    overlay.classList.remove("invisible");
  });
});
window.addEventListener("click", () => {
  menuShopComputer.style.right = "-300px";
  overlay.classList.add("invisible");
});
///////////////////////////
// search
search_Mobile.addEventListener("click", () => {
  searchabsolute.classList.toggle("visible");
});

/////////////////////////////
let img = [
  "./image/banner-1.jpg",
  "./image/banner-2.jpg",
  "./image/banner-3.jpg",
];
let index = 0;

function UpdateCircle() {
  imgSlider.setAttribute("src", img[index]);
  p1.forEach((toops, i) => {
    if (i === index) {
      toops.style.backgroundColor = "blue";
    } else {
      toops.style.backgroundColor = "gray";
    }
  });
}

function nextSlide() {
  index++;
  if (index > img.length - 1) {
    index = 0;
  }

  imgSlider.setAttribute("src", img[index]);
  UpdateCircle();
}
next.addEventListener("click", nextSlide);

pre.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = img.length - 1;
  }
  imgSlider.setAttribute("src", img[index]);
  UpdateCircle();
});

UpdateCircle();

setInterval(nextSlide, 3000);

let store1 = [
  {
    id: 1,
    name: "Samsung Galaxy Z Fold4",
    price: 1300,
    count: 1,
    src: "./image/phone_5.jpg",
  },
  {
    id: 2,
    name: "Apple Notebook Air 13",
    price: 1500,
    src: "./image/note_1.jpg",
  },
  {
    id: 3,
    name: "Dell Inspiron",
    price: 1000,
    src: "./image/note_6.jpg",
  },
  {
    id: 4,
    name: "Mouse Logitech g502",
    price: 500,
    src: "./image/mouse.jpg",
  },
  {id:5 , name:"Lenovo V15" , price:1500 ,  src: "./image/Lenovo.jpg"},
  {id:6 , name:"iPhone 12 Mini" , price:1000 ,  src: "./image/phone_2.jpg"},
  {id:7 , name:"Asus ZenBook 14" , price:1400 ,  src: "./image/note_2.jpg"},
  {id:8 , name:"MSI Stealth" , price:800 ,  src: "./image/note_5.jpg"},
];
let fragMent = $.createDocumentFragment();
store1.forEach((item) => {
  let divCol = $.createElement("div");
  divCol.className = "bg-white shadow-xl rounded-xl p-3 ";
  // divCol.style.padding='13px'
  //
  let divImg = $.createElement("div");
  divImg.className = "size-full ";
  //
  let img = $.createElement("img");
  img.className = "size-full";
  img.src = item.src;
  //
  let divCon = $.createElement("div");
  divCon.className = "rounded-xl absolute   -left-3 -top-[13px]";
  //
  let divTakh = $.createElement("div");
  divTakh.innerHTML = "25%";
  divTakh.className = "bg-[#05AFDC] rounded-xl p-3 text-white";
  
  // divCon.append(divTakh)
  divImg.append(img , divCon)
  //


  let divCoo = $.createElement("div");
  divCoo.className = 'flex flex-col gap-y-4'
  //
  let h1 = $.createElement('h1')
  h1.innerHTML = item.name
  h1.className = 'font-semibold'
  //
  let p = $.createElement('p')
  p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa porro architecto!   Lorem ipsum dolor sit amet consectetur.'
  p.className = 'line-clamp-2 font-light'
  //
  let divSixe = $.createElement('div')
  let size = $.createElement('p')
  let spam1 = $.createElement('span')
  let spam2 = $.createElement('span')
  let spam3 = $.createElement('span')
  let spam4 = $.createElement('span')
  spam1.innerHTML = 'S '
  spam2.innerHTML = 'M '
  spam3.innerHTML = 'L '
  spam4.innerHTML = 'Xl'
  size.innerHTML = 'Size: '
  size.append(spam1,spam2,spam3,spam4)
  divSixe.append(size)
  //
  let divRang = $.createElement('div')
  divRang.className = 'flex items-center gap-x-2'
  let pR1 = $.createElement('p')
  let pR2 = $.createElement('p')
  let pR3 = $.createElement('p')
  let pR4 = $.createElement('p')
  pR1.className = 'bg-red-500 rounded-full size-3'
  pR2.className = 'bg-blue-500 rounded-full size-3'
  pR3.className = 'bg-green-500 rounded-full size-3'
  pR4.className = 'bg-black rounded-full size-3'
  divRang.append(pR1, pR2 , pR3 , pR4)
  //
  let divPrice = $.createElement('div')
  divPrice.className = 'flex gap-x-2'
  let price = $.createElement('p')
  price.innerHTML ='$' + item.price 
  let tagh = $.createElement('p')
  tagh.innerHTML ='$'+ '1700'
  tagh.className = 'khat text-[#05AFDC]'
  divPrice.append(price, tagh)
  //
  let divBtn = $.createElement('div')
  divBtn.className = 'flex items-center justify-center'
  let btn = $.createElement('a')
  btn.innerHTML = 'VIEW DETAILS'
  btn.href = 'pro.html?id='+item.id + ''
  btn.className = ' w-full text-center rounded-xl text-white p-2 bg-[#05AFDC]'
  divBtn.append(btn)
  divCoo.append(h1 , p , divSixe , divRang , divPrice , divBtn)
  divCol.append(divImg , divCoo)

  fragMent.append(divCol)
  
                                      
                                       
});

stores.append(fragMent)



// let fragMent2 = $.createDocumentFragment()
// Notebook.forEach(item => {
//   let divCol = $.createElement("div");
//   divCol.className = "bg-white shadow-xl rounded-xl p-3 ";
//   // divCol.style.padding='13px'
//   //
//   let divImg = $.createElement("div");
//   divImg.className = "size-full ";
//   //
//   let img = $.createElement("img");
//   img.className = "size-full";
//   img.src = item.src;
//   //
//   let divCon = $.createElement("div");
//   divCon.className = "rounded-xl absolute   -left-3 -top-[13px]";
//   //
//   let divTakh = $.createElement("div");
//   divTakh.innerHTML = "25%";
//   divTakh.className = "bg-[#05AFDC] rounded-xl p-3 text-white";
  
//   // divCon.append(divTakh)
//   divImg.append(img , divCon)
//   //


//   let divCoo = $.createElement("div");
//   divCoo.className = 'flex flex-col gap-y-4'
//   //
//   let h1 = $.createElement('h1')
//   h1.innerHTML = item.name
//   h1.className = 'font-semibold'
//   //
//   let p = $.createElement('p')
//   p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa porro architecto!   Lorem ipsum dolor sit amet consectetur.'
//   p.className = 'line-clamp-2 font-light'
//   //
//   let divSixe = $.createElement('div')
//   let size = $.createElement('p')
//   let spam1 = $.createElement('span')
//   let spam2 = $.createElement('span')
//   let spam3 = $.createElement('span')
//   let spam4 = $.createElement('span')
//   spam1.innerHTML = 'S '
//   spam2.innerHTML = 'M '
//   spam3.innerHTML = 'L '
//   spam4.innerHTML = 'Xl'
//   size.innerHTML = 'Size: '
//   size.append(spam1,spam2,spam3,spam4)
//   divSixe.append(size)
//   //
//   let divRang = $.createElement('div')
//   divRang.className = 'flex items-center gap-x-2'
//   let pR1 = $.createElement('p')
//   let pR2 = $.createElement('p')
//   let pR3 = $.createElement('p')
//   let pR4 = $.createElement('p')
//   pR1.className = 'bg-red-500 rounded-full size-3'
//   pR2.className = 'bg-blue-500 rounded-full size-3'
//   pR3.className = 'bg-green-500 rounded-full size-3'
//   pR4.className = 'bg-black rounded-full size-3'
//   divRang.append(pR1, pR2 , pR3 , pR4)
//   //
//   let divPrice = $.createElement('div')
//   divPrice.className = 'flex gap-x-2'
//   let price = $.createElement('p')
//   price.innerHTML ='$' + item.price 
//   let tagh = $.createElement('p')
//   tagh.innerHTML ='$'+ '1700'
//   tagh.className = 'khat text-[#05AFDC]'
//   divPrice.append(price, tagh)
//   //
//   let divBtn = $.createElement('div')
//   divBtn.className = 'flex items-center justify-center'
//   let btn = $.createElement('a')
//   btn.innerHTML = 'VIEW DETAILS'
//   btn.href = 'pro.html?id='+item.id + ''
//   btn.className = ' w-full text-center rounded-xl text-white p-2 bg-[#05AFDC]'
//   divBtn.append(btn)
//   divCoo.append(h1 , p , divSixe , divRang , divPrice , divBtn)
//   divCol.append(divImg , divCoo)

//   fragMent2.append(divCol)
  
                                      
                                      
// })

// storeNotbook.append(fragMent2)

let navar = document.querySelector('.navar')

window.addEventListener('scroll' , () => {
  let scrollAllShow = window.scrollY
  
  let client = document.body.clientHeight

  let innerH = window.innerHeight

  let percent = scrollAllShow / (client - innerH)
  // کل ارتفاع قابل اسکرول=ارتفاع کل محتوای صفحه−ارتفاع قابل مشاهده پنجره مرورگر
  // 590 / 2000 - 303 = 1697

  // کل ارتفاع قابل اسکرول=3000−1000=2000 پیکسل
  
  // 590 / 1697 = 0.34
  let floor = Math.floor(percent * 100)
  navar.style.width = floor + '%'
  console.log(window.innerHeight);
})

