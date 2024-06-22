let clickBack = document.querySelector(".clickBack");

clickBack.addEventListener("click", () => {
  window.history.back();
});

let store1 = [
  {
    id: 1,
    name: "Samsung Galaxy Z Fold4 5G Mobile Phone without SIM Card Android Flip Smartphone 256 GB Grey Green",
    price: 1300,
    count: 1,
    src: "./image/phone_5.jpg",
    count: 1,
  },
  {
    id: 2,
    name: "Apple MacBook Air with Apple M1 chip (13 inch, 8GB RAM)",
    price: 1500,
    src: "./image/note_1.jpg",
    count: 1,
  },
  {
    id: 3,
    name: "Dell Inspiron 15 3530 Laptop, 15.6 Inch FHD 120Hz Display, Intel Core i7-1355U, 16 GB RAM, 512 GB SSD, Intel Iris Xe Graphics, Windows 11 Home, QWERTZ Keyboard, Silver",
    price: 1000,
    src: "./image/note_6.jpg",
    count: 1,
  },
  {
    id: 4,
    name: "Logitech G502 LIGHT SPEED wireless gaming mouse, HERO 16000 dpi sensor, wireless connection, USB port, RGB lighting, weight tuning, POWERPLAY compatible, PC / Mac, Black - German Packaging",
    price: 500,
    src: "./image/pro-wireless-carbon-gallery-1.png",
    count: 1,
  },
  {
    id: 5,
    name: "Lenovo V15",
    price: 1500,
    src: "./image/Lenovo.jpg",
    count: 1,
  },
  {
    id: 6,
    name: "Apple iPhone 15 (128GB) - Yellow",
    price: 1000,
    src: "./image/phone_2.jpg",
    count: 1,
  },
  {
    id: 7,
    name: "ASUS Zenbook 14 Laptop | 14 Inch FHD Anti-Glare IPS Display | AMD R9 5900HX | 8 GB RAM | 512GB SSD | AMD Radeon | Windows 11 | QWERTZ Keyboard | Pine Grey",
    price: 1000,
    src: "./image/note_2.jpg",
    count: 1,
  },
  {
    id: 8,
    name: "MSI Stealth 16Studio A13VG-036XES Notebook Gaming 16 Inch QHD+ (2560 x 1600), 240Hz (i7-13700H, 32GB RAM, 1TB SSD, RTX 4070 8GB, Free Dos) Star Blue Keyboard Spanish",
    price: 1000,
    src: "./image/note_5.jpg",
    count: 1,
  },
];

let title = document.querySelector(".title");
let imgs = document.querySelector(".imgs");
let pp = document.querySelector(".pp");
let h2 = document.querySelector("h2");
let uyj = document.querySelector(".uyj");

let searchRouther = location.search;

let searchUl = new URLSearchParams(searchRouther);

let getID = searchUl.get("id");

let find = store1.find((id) => {
  return id.id == getID;
});

if (find) {
  title.innerHTML = find.name;

  imgs.setAttribute("src", find.src);

  pp.innerHTML = "$" + find.price;
} else {
  location.href = "http://127.0.0.1:5500/pub/index.html";
}
let svgShop = document.querySelectorAll(".svgShop");
let menuShopComputer = document.querySelector(".menuShopComputer");
let overlay = document.querySelector(".overlay");
svgShop.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // جلوگیری از رسیدن کلیک به سند
    menuShopComputer.style.right = "0px";
    overlay.classList.remove("invisible");
  });
});
overlay.addEventListener("click", () => {
  menuShopComputer.style.right = "-300px";
  overlay.classList.add("invisible");
});

let add = document.querySelector(".add");
let UserLoacation = document.querySelector(".UserLoacation");
let userBasket = [];
function addItem() {
  let URLSearchParamsElem = new URLSearchParams(location.search);

  let getid = URLSearchParamsElem.get("id");

  let findId = store1.find((item) => {
    return item.id == getid;
  });
  userBasket.push(findId);
  totalPrice(userBasket);
  itemGeneator(userBasket);
}
let $ = document;
add.addEventListener("click", addItem);
let fragment3 = $.createDocumentFragment();
function itemGeneator(userElem) {
  UserLoacation.innerHTML = "";
  userElem.forEach((item) => {
    let divcol = $.createElement("div");
    divcol.className =
      "grid grid-cols-2 items-center border-b-2 pb-3 text-sm md:text-start pt-3";
    //
    let divimg = $.createElement("div");
    divimg.className = "size-[90px]";
    let img = $.createElement("img");
    img.src = item.src;
    img.className = "size-full";
    divimg.append(img);
    //
    let div2 = $.createElement("div");
    div2.className = "flex flex-col gap-y-2";
    let h1 = $.createElement("h1");
    let span1 = $.createElement("span");
    span1.className = "line-clamp-1";
    span1.innerHTML = item.name;
    h1.innerHTML = "Name:";
    h1.append(span1);
    //
    let pr = $.createElement("p");
    pr.innerHTML = "Price:";
    let span2 = $.createElement("span");
    span2.innerHTML = item.price;
    pr.append(span2);
    //
    let divInput = $.createElement("div");
    divInput.className = "flex items-center gap-x-2";
    let pQantiti = $.createElement("p");
    pQantiti.innerHTML = "Quantity:";
    let input = $.createElement("input");
    input.className =
      "outline-none bg-slate-200 w-[40px] md:w-[60px] rounded-xl text-center";
    input.value = item.count;
    input.addEventListener("change", () => {
      editCount(item.id, input.value);
    });
    divInput.append(pQantiti, input);
    //

    let divBtn = $.createElement("div");
    let btn = $.createElement("button");
   
    btn.className = "bg-red-600 px-3 py-1 text-white rounded-xl";
    btn.innerHTML = "Delete";
    btn.addEventListener("click", () => {
      removeitem(item.id);
    });
    divBtn.append(btn);
    div2.append(h1, pr, divInput, divBtn);

    divcol.append(divimg, div2);

    fragment3.append(divcol);
  });
  UserLoacation.append(fragment3);
}
let buy = $.querySelector(".buy");
function totalPrice(userElem) {
  let sum = 0;
  userElem.forEach((item) => {
    sum += item.count * item.price;
  });
  uyj.innerHTML = sum;
}

function removeitem(id) {
  let find = userBasket.find((item) => {
    return item.id === id;
  });
  userBasket.splice(find, 1);
  itemGeneator(userBasket);
  totalPrice(userBasket);
}

function editCount(ID, inputVal) {
  userBasket.forEach((item) => {
    if (item.id === ID) {
      item.count = inputVal;
    }
    if (item.count < 0) {
      removeitem();
    } else {
      totalPrice(userBasket);
    }
  });
}

buy.addEventListener('click' , () => {
  userBasket = []
  itemGeneator(userBasket)
  totalPrice(userBasket)
})