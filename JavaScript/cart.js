import {itemCart} from './data.js' ;
// Start Popup Cart Pluse


console.log(itemCart);
// Defintion
let cartPluse = document.querySelector('.cart-pluse');
let popup = document.querySelector('.popup');

// Event Show Popup
cartPluse.addEventListener('click', function () {
    console.log(itemCart);
    popup.style.display = 'block';
    document.body.style.overflowY='hidden';
    // Defintion
        let myCart = document.createElement('div');
    // Add Classes To New Div
        myCart.classList.add('myCart' , 'parent');
        if(itemCart == ''){
            document.querySelector('.popup .innerPopup').style.display = "flex";
            document.querySelector('.popup .innerPopup').style.justifyContent = "center";
            document.querySelector('.popup .innerPopup').style.alignItems = "center";
            let notFond = document.createElement('div');
            notFond.classList.add('notFond' , 'parent');
            notFond.style.position = 'relative';
            notFond.style.width = '180px';
            notFond.style.height = '60px';
            notFond.innerHTML = `
            <i class="fa-solid fa-circle-xmark"></i>
            <span>Not have items</span>
            `;
            document.querySelector('.popup .innerPopup').appendChild(notFond);
            console.log('good');
        }else{
            // Append Components Into New Div
                itemCart.forEach(function (item) {
                    myCart.innerHTML += `
                            <div id="${item.id}"  class = "item-popup">
                                <div class="imageItemPopup" >
                                    <img  class="fullimg" src=${item.img} alt="item">
                                </div>
                                <div class ="descItemPopup" >
                                    <div class ="titleDescPopup styletext" >
                                        <span>${item.product}</span>
                                    </div>
                                    <div class ="subTitleDescPopup" >
                                        <span>???????? ?????????? 3 ????????????</span>
                                        <br>
                                        <br>
                                        <span>???????? ?????????????? : ??????????</span>
                                    </div>
                                <div>
                                    <div class="subdesc"> <h4>?????? ?????????????? ${item.price_part} - ?????? ???????????? ${item.numberOfMonth}</h4></div>
                                    <div class="complete" > <button>????????????????</button> </div>
                                </div>
                            </div>
                    `;
                });
            // Append New Div Into Inner Popup
                document.querySelector('.popup .innerPopup').appendChild(myCart);

            // Event Select Item
                document.querySelectorAll('.complete button').forEach(function (event) {
                    event.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Get Id item Selected
                        let id = event.parentElement.parentElement.parentElement.parentElement.getAttribute('id');
                    for (let i = 0; i < itemCart.length; i++) {
                        if (itemCart[i].id == id) {
                        // Delete Div My Cart
                            document.querySelector('.popup .innerPopup .myCart').remove();
                            document.querySelector('.popup .innerPopup').style.width = "40%";
                            document.querySelector('.popup .innerPopup').style.height = "570px";
                            document.querySelector('.popup .innerPopup').style.marginLeft = "-20%";
                            document.querySelector('.popup .innerPopup').style.top = "60%";
                        // Defintion
                            let itemSelected = document.createElement('div');
                        // Add Classes To New Div
                            itemSelected.classList.add('selected' , 'parent');
                        // Append Components Into New Div
                            itemSelected.innerHTML = `
                            <div class = "logoCart" >
                                <img src="Image/Logo/logo.jpg" alt="Logo">
                            </div>
                            <div class = "check" >
                                <h3>?????????? ????????????</h3>
                                <div class = "iconCheck"> <i class="fa-solid fa-check"></i> </div>
                                </div>
                            <div class = "address" >
                                <h3>?????????? ??????????</h3>
                                <div class = "inputAddress">
                                <input type = "text" name = "Address" placeholder = "?????????? ??????????????" />
                                </div>
                            </div>
                            <div class = "type" >
                                <h3>?????????? ??????????</h3>
                                <div class = "inputType">
                                <input type = "text" name = "type" placeholder = "?????? ???? ??????????" />
                                </div>
                            </div>
                            <div class = "done" >
                                <button>?????????? ????????????</button>
                            </div>
                            `;
                        // Append New Div Into Inner Popup
                            document.querySelector('.popup .innerPopup').appendChild(itemSelected);
                        // Add Anther Class to Inner Popup
                            document.querySelector('.popup .innerPopup').classList.add('selected');
                        // Defintion
                        let orderItNow=document.querySelector('.popup .innerPopup .selected .done');
                        // Event Button Order Item Now
                            orderItNow.onclick=function(){
                                    let snackbar=document.querySelector('#snackbar');
                                    snackbar.innerHTML='???? ??????????????';
                                    snackbar.classList.add('show');
                                    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000)
                            }
                        }
                    }
                    });
                });
        }
});
