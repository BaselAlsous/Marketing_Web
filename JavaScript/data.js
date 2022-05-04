// Defintion Data
const gardensData=[
    {
        id:'item1',
        img:'Image\\Gardens\\item1.PNG',
        product:'كرسي عش البلب',
        price:'30 د.أ',
        descriptions:[
            'الحجم : 30 م2',
            'الطول 1.5 م',
            'العرض : 1 م',
            'المساحة : 1.5 م2',
            'الحد الأدنى للطول : 1.5 م',
            'الحد الأدنى للعرض : 1 م',
            'الحد الأدنى للمساحة : 1.5 م2',
            'الحد الأقصى للطول :1.6 م',
            'الحد الأقصى للعرض : 1 م',
            'الحد الأقصى للمساحة : 1.6 م2',
        ],
        price_part:'10 د.أ',
        numberOfMonth:'3 اشهر',
    },
    {
        id:'item2',
        img:'Image\\Gardens\\item2.PNG',
        product:'طقم كراسي حديقة',
        price:'40 د.أ',
        descriptions:[
            'الحجم : 3 م2',
            'الطول : 1.5 م',
            'العرض : 2.0 م',
            'المساحة : 3.0 م2',
            'عدد الكراسي : 2',
        ],
        price_part:'10 د.أ',
        numberOfMonth:'4 اشهر',
    },
    {
        id:'item3',
        img:'Image\\Gardens\\item3.PNG',
        product:'باربيكيو متحرك',
        price:'50 د.أ',
        descriptions:[
            'الحجم : 1.0 م2',
            'الطول : 1.0 م',
            'العرض : 0.5 م',
            'المساحة : 1.0 م2',
            'الحد الأدنى للطول : 1.0 م',
            'الحد الأدنى للعرض : 0.5 م',
            'الحد الأدنى للمساحة : 1.0 م2',
            'الحد الأقصى للطول : 1.0 م',
        ],
        price_part:'10 د.أ',
        numberOfMonth:'5 اشهر',
    },
    {
        id:'item4',
        img:'Image/Gardens/item4.jpg',
        product:'خرطوم مياه',
        price:'40 د.أ',
        descriptions:[
            'الحجم : 0.2 سم',
            'الطول : 15.0 م',
            'المساحة : 15.0 م2',
            'الحد الأدنى للطول : 10.0 م',
            'الحد الأدنى للعرض : 0.5 سم',
            'الحد الأدنى للمساحة : 15.0 م2',
        ],
        price_part:'10 د.أ',
        numberOfMonth:'4 اشهر',
    },
    {
        id:'item5',
        img:'Image\\Gardens\\item5.jpg',
        product:'خرطوم مياه',
        price:'18 د.أ',
        descriptions:[
            'الحجم : 0.2 سم',
            'الطول : 15.0 م',
            'المساحة : 5.0 م2',
            'الحد الأدنى للطول : 10.0 م',
            'الحد الأدنى للعرض : 0.2 سم',
            'الحد الأدنى للمساحة : 3.0 م2',
        ],
        price_part:'6 د.أ',
        numberOfMonth:'3 اشهر',
    },
    {
        id:'item6',
        img:'Image\\Gardens\\item6.jpg',
        product:'نافورة ماء',
        price:'100 د.أ',
        descriptions:[
            'الحجم : 5.0 م2',
            'الطول : 2.0 م',
            'المساحة : 5.0 م2',
            'الحد الأدنى للطول : 2.0 م',
            'الحد الأدنى للعرض : 3.0 م',
            'الحد الأدنى للمساحة : 5.0 م2',
            'الحد الاقصى للطول : 3.0 م',
            'الحد الاقصى للعرض : 3.0 م',
        ],
        price_part:'10 د.أ',
        numberOfMonth:'10 اشهر',
    },
    ];
    const proEquipmentData=[
    {
        id:'item1',
        img:'Image\\Professional_Rquipment\\item1.PNG',
        product:'حقيبة ظهر للكاميرا',
        price:'90 د.أ',
        descriptions:[
            "عدد الجيب : 5",
            "الوان : اسود - احمر - ابيض",
            "الاحجام : صغير - متوسط - كبير",
        ],
        price_part:'10 د.أ',
        numberOfMonth:'9 اشهر',
    },
    {
        id:'item2',
        img:'Image\\Professional_Rquipment\\item2.PNG',
        product:'حقيبة معدات',
        price:'60 د.أ',
        descriptions:[
            'الحجم : 40 سم2',
            "2 زرادية",
            "2 مفك" ,
            "علبة براغي + مسامير",
            "منشار",
            "مطرقة",
            "متر قياس",
        ],
        price_part:'10 د.أ',
        numberOfMonth:'6 اشهر',
    },
    {
        id:'item3',
        img:'Image\\Professional_Rquipment\\item3.PNG',
        product:'دريل شحن',
        price:'49.99 د.أ',
        descriptions:[
            'الحجم : 60 سم2',
            'الطول 50 سم',
            " فرتاشات سميكة + رفيعة",
            "بطارية طويلة العمر",
            "شاحن أصلي",
        ],
        price_part:'10 د.أ',
        numberOfMonth:'5 اشهر',
    },
    {
        id:'item4',
        img:'Image\\Professional_Rquipment\\item4.jpg',
        product:'حقيبة معدات شخصية',
        price:'20 د.أ',
        descriptions:[
            'الحجم : 30 سم2',
            'الطول 70 سم',
            "عدد الجيب : 5"
        ],
        price_part:'5 د.أ',
        numberOfMonth:'4 اشهر',
    },
    {
        id:'item5',
        img:'Image\\Professional_Rquipment\\item5.jpg',
        product:'فرد مفكات كهربائي',
        price:'30 د.أ',
        descriptions:[
            'الحجم : 60 سم2',
            "جميع انواع المفكات",
            "شاحن أصلي",
            "بطارية طويلت العمر",
            "مفك جكات بقياسات مختلفة",
        ],
        price_part:'10 د.أ',
        numberOfMonth:'3 اشهر',
    },
    {
        id:'item6',
        img:'Image\\Professional_Rquipment\\item6.jpg',
        product:' مفك متعدد الاستخدام',
        price:'9 د.أ',
        descriptions:[
            'الطول المفك: 25 سم',
            'المساحة : 25 سم2',
            'الحد الأدنى للطول المفك : 15 سم',
            'الحد الأدنى للمساحة : 15 سم2',
            'الحد الأقصى للطول المفك:35 سم',
            'الحد الأقصى للمساحة : 35 سم2',
            "عدد المفكات : 2",
            "جميع أنواع المفكات"
        ],
        price_part:'3 د.أ',
        numberOfMonth:'3 اشهر',
    },
    ];
    const eletroData=[
        {
            id:'item1',
            img:'Image\\Electronics\\item1.PNG',
            product:'سماعةاير بود',
            price:'99 د.أ',
            descriptions:[
                "عدد السماعات : 1",
                "الوان : اسود - احمر - ابيض",
            ],
            price_part:'10 د.أ',
            numberOfMonth:'10 اشهر',
        },
        {
            id:'item2',
            img:'Image\\Electronics\\item2.PNG',
            product:'غسالة سامسونغ',
            price:'390 د.أ',
            descriptions:[
                'الحجم : 1 م2',
                " 2 طن",
                "1700 دوؤة",
                "الوان : ابيض - اسود - سلفر",
            ],
            price_part:'30 د.أ',
            numberOfMonth:'13 اشهر',
        },
        {
            id:'item3',
            img:'Image\\Electronics\\item3.PNG',
            product:'شاشة شاومي',
            price:'239.99 د.أ',
            descriptions:[
                'الحجم : 60 بوصة',
                "4K",
                "بلوتوث",
                "WIfI",
            ],
            price_part:'20 د.أ',
            numberOfMonth:'12 اشهر',
        },
        {
            id:'item4',
            img:'Image\\Electronics\\item4.jpg',
            product:'سامسونغ A7',
            price:'180 د.أ',
            descriptions:[
                "RAM 2",
                "SD 32.0",
                "الوان : ابيض - احمر - اسود ",
            ],
            price_part:'20 د.أ',
            numberOfMonth:'9 اشهر',
        },
        {
            id:'item5',
            img:'Image\\Electronics\\item5.jpeg',
            product:'iPhon 11',
            price:'700 د.أ',
            descriptions:[
                "RAM 8",
                "SD 252.0",
                "الوان : ابيض - احمر - اسود - ذهبي "
            ],
            price_part:'35 د.أ',
            numberOfMonth:'20 اشهر',
        },
        {
            id:'item6',
            img:'Image\\Electronics\\item6.jpg',
            product:'ثلاجة راغلي',
            price:'350 د.أ',
            descriptions:[
                'الطول : 2 م',
                'المساحة : 1 م2',
                "فريزر كبير",
                "الوان : ابض - اسود سلفر"
            ],
            price_part:'25 د.أ',
            numberOfMonth:'16 اشهر',
        },
    ];
    const HousewareData=[
        {
            id:'item1',
            img:'Image\\Houseware\\item1.jpg',
            product:'مقعد مفرد',
            price:'59.99 د.أ',
            descriptions:[
                'الحجم : 30 م2',
                'الطول 1.5 م',
                'العرض : 1 م',
                'المساحة : 1.5 م2',
                'الحد الأدنى للطول : 1.5 م',
                'الحد الأدنى للعرض : 1 م',
                'الحد الأدنى للمساحة : 1.5 م2',
                'الحد الأقصى للطول :1.6 م',
                'الحد الأقصى للعرض : 1 م',
                'الحد الأقصى للمساحة : 1.6 م2',
            ],
            price_part:'10 د.أ',
            numberOfMonth:'6 اشهر',
        },
        {
            id:'item2',
            img:'Image\\Houseware\\item2.jpg',
            product:'غاز',
            price:'299.99 د.أ',
            descriptions:[
                'الحجم : 1 م2',
                " 9 عيون",
                "الأحجام : كبير - متوسط",
                "الوان : ابيض - اسود - سلفر",
            ],
            price_part:'30 د.أ',
            numberOfMonth:'10 اشهر',
        },
        {
            id:'item3',
            img:'Image\\Houseware\\item3.jpg',
            product:'خزانة كتب',
            price:'49.99 د.أ',
            descriptions:[
                'الطول 1 م',
                'العرض : 2 م',
                'المساحة : 2 م2',
                "عدد الظرفات : 2"
            ],
            price_part:'10 د.أ',
            numberOfMonth:'5 اشهر',
        },
        {
            id:'item4',
            img:'Image\\Houseware\\item4.jpg',
            product:'طقم كراسي ',
            price:'280 د.أ',
            descriptions:[
                "مقاعد 8",
                "الوان : ابيض - احمر - اسود - بني - سكني ",
                "خشب زان"
            ],
            price_part:'20 د.أ',
            numberOfMonth:'14 اشهر',
        },
        {
            id:'item5',
            img:'Image\\Houseware\\item5.jpg',
            product:'فرامة لحم',
            price:'90 د.أ',
            descriptions:[
                "شفؤات : ناعم - خشن",
                "الوان : ابيض - اسود - سلفر "
            ],
            price_part:'10 د.أ',
            numberOfMonth:'9 اشهر',
        },
        {
            id:'item6',
            img:'Image\\Houseware\\item6.jpg',
            product:'ثلاجة راغلي',
            price:'350 د.أ',
            descriptions:[
                'الطول : 2 م',
                'المساحة : 1 م2',
                "فريزر كبير",
                "الوان : ابض - اسود سلفر"
            ],
            price_part:'25 د.أ',
            numberOfMonth:'16 اشهر',
        },
    ];
    const sportMachinesData=[
        {
            id:'item1',
            img:'Image\\Sport_Machines\\item1.jpg',
            product:' مكينة بنش مائل',
            price:'89.99 د.أ',
            descriptions:[
                'الطول 1.0 م',
                'العرض : 1 م',
                'المساحة : 6 م2',
                "بار دولي",
                "اوزان :( 5 - 30 ) كيلو",
                " + ماكينة عضلات القدم",
            ],
            price_part:'10 د.أ',
            numberOfMonth:'9 اشهر',
        },
        {
            id:'item2',
            img:'Image\\Sport_Machines\\item2.jpg',
            product:'قضيب سحب',
            price:'59.99 د.أ',
            descriptions:[
                'الحجم : 1 م2',
                "الأحجام : كبير - صغير",
                "الوان : ابيض - اسود - سلفر",
            ],
            price_part:'10 د.أ',
            numberOfMonth:'6 اشهر',
        },
        {
            id:'item3',
            img:'Image\\Sport_Machines\\item3.jpg',
            product:'بسكليت رياضي',
            price:'89.99 د.أ',
            descriptions:[
                'الطول 1.5 م',
                'العرض : 1 م',
                'المساحة : 1.5 م2',
                "( سرعات : ( 1 - 12 ",
                "يظهر عدد دقات القلب"
            ],
            price_part:'10 د.أ',
            numberOfMonth:'5 اشهر',
        },
        {
            id:'item4',
            img:'Image\\Sport_Machines\\item4.jpg',
            product:'مكينة العاب رياضيه متكامله  ',
            price:'150 د.أ',
            descriptions:[
                "اوزان متعددة",
                "الوان : ابيض - احمر - اسود - سكني ",
                "يشمل تمارين الصدر والظهر والاكتاف",
            ],
            price_part:'15 د.أ',
            numberOfMonth:'10 اشهر',
        },
        {
            id:'item5',
            img:'Image\\Sport_Machines\\item5.jpg',
            product:'مكينة العاب رياضيه متكامله ',
            price:'90 د.أ',
            descriptions:[
                "اوزان متعددة",
                "الوان : ابيض - احمر - اسود - سكني ",
                "يشمل تمارين الصدر والظهر و الأقدام",
            ],
            price_part:'10 د.أ',
            numberOfMonth:'9 اشهر',
        },
    ];
    const data={
    'Gardens':gardensData,
    'proEquipment':proEquipmentData,
    'eletro':eletroData,
    'Houseware':HousewareData,
    'sportMachines':sportMachinesData
    };

    // Array Item Cart
        export let itemCart =[];

// Event Button Browse
let myChoise = document.querySelectorAll('.my-choise');
// Loop In Button
    myChoise.forEach(function(item){
        // Event When I click on Button
        item.addEventListener('click',function(){
            // Defintion
                let popup=document.querySelector('.popup');
                let parentElement=document.createElement('div');
                // Get ID
                let key = this.getAttribute('key') ;
            // Style
                document.body.style.overflowY='hidden';
                popup.style.display='block';
            // Add Classes
                parentElement.classList.add('items','parent');
            // Loop In data
                data[key].forEach(function(item){
                    // Defintion
                        let div=document.createElement('div');
                    // Coponent div
                        div.innerHTML=`
                        <div class="item" id="${item.id}" >
                        <div class="image">
                            <img src="${item.img}" class="fullimg">
                        </div>
                        <hr />
                        <div class="desc">
                            <div class="suptitle text-center">
                                <h4>${item.product}</h4>
                            </div>
                            <div class="coins">
                                <div class="installments text-center">
                                    <span>  سعر التقسيط  </span>
                                    <br>
                                    <span>${item.price}</span>
                                </div>
                                <div class="cash text-center">
                                    <span> سعر الكاش  </span>
                                    <br>
                                    <span>${item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;
                    // Append div in Parent Element
                        parentElement.appendChild(div);
                });
            // Append Parent Element in Inner Popup
                document.querySelector('.popup .innerPopup').appendChild(parentElement);
            // Defintion
                let selectProduct=document.querySelectorAll('.popup .innerPopup .items .item');
            // Loop in All Item
                selectProduct.forEach(function(ele){
                    // Event When Click On Item
                        ele.onclick=function(){
                            // Defintion
                                let getId=this.getAttribute('id');
                            // Loop In data
                                data[key].forEach(function(item){
                                    // Condition
                                        if(item.id==getId) {
                                            // Clear Popup
                                                document.querySelector('.popup .innerPopup .parent').remove();
                                            // Defintion
                                                let div=document.createElement('div');
                                                let ul=document.createElement('ul');
                                            // Add Classes
                                                div.classList.add('selected','parent');
                                            // Loop In Description data
                                                for(let i in item.descriptions){
                                                    ul.innerHTML+=`
                                                    <li>${item.descriptions[i]}</li>
                                                    `;
                                                }
                                            // Coponent div
                                                div.innerHTML=`
                                                    <div class="details-img">
                                                        <div class="details">
                                                            <h2>${item.product}</h2>
                                                            <span>وصف المنتج</span>
                                                            ${ul.innerHTML}
                                                        </div>
                                                        <div class="image">
                                                            <img src=${item.img} class="fullimg">
                                                        </div>
                                                    </div>
                                                    <div class="box">
                                                        <div class="box-price">
                                                            <h3>سعر الكاش ${item.price}</h3>
                                                        </div>
                                                        <div class="box-price">
                                                            <h3>سعر التقسيط ${item.price_part} , ${item.numberOfMonth}</h3>
                                                        </div>
                                                    </div>
                                                    <div class="two-icon">
                                                        <div class="icon">
                                                            <i class="fa-solid fa-heart"></i>
                                                            <span>كفالة سنة</span>
                                                        </div>
                                                        <div class="icon">
                                                            <i class="fa-solid fa-shopping-cart"></i>
                                                            <span>توصيل سريع</span>
                                                        </div>
                                                    </div>
                                                    <div class="adv styletext">اشتري الان ودفع لاحقا</div>
                                                    <div class="browse" cust-attr='${item.id}'>اطلبه الان</div>
                                                    <div class='back'>
                                                            <i class="fa-solid fa-circle-arrow-left"></i>
                                                    </div>
                                                `;
                                            // Append Div in Inner Popu
                                                document.querySelector('.popup .innerPopup').appendChild(div);
                                            // Defintion
                                                let backBtn=document.querySelector('.popup .innerPopup .selected .fa-solid.fa-circle-arrow-left');
                                            // Event Button back
                                                backBtn.onclick=function(){
                                                    // Clear Selected
                                                        document.querySelector('.popup .innerPopup .selected.parent').remove();
                                                    // Append Parent Element in Inner Popup
                                                        document.querySelector('.popup .innerPopup').appendChild(parentElement);
                                                }
                                            // Defintion
                                                let orderItNow=document.querySelector('.popup .innerPopup .selected .browse');
                                            // Event Button Order Item Now
                                                orderItNow.onclick=function(){
                                                    // Add Item In Array Cart
                                                    itemCart.push(item);
                                                        let snackbar=document.querySelector('#snackbar');
                                                        snackbar.innerHTML='تمت الاضافة للسلة';
                                                        snackbar.classList.add('show');
                                                        setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
                                            }
                                        }
                                    }
                                );
                            }
                        }
                    );
        }
    );
});



let selectItemFromHomePage=document.querySelectorAll('.item');
selectItemFromHomePage.forEach(function(ele){
    ele.onclick=function(){
        let key=this.getAttribute('key');
        let id=this.getAttribute('id');
        document.body.style.overflowY='hidden';
        let popup=document.querySelector('.popup');
        popup.style.display='block';
        let div=document.createElement('div');
        div.classList.add('selected','parent');
        data[key].forEach(function(item){
            if(item.id==id){
                let ul=document.createElement('ul');
                for(let i in item.descriptions){
                    ul.innerHTML+=`
                    <li>${item.descriptions[i]}</li>
                    `;
                }
                div.innerHTML=`
                    <div class="details-img">
                        <div class="details">
                            <h2>${item.product}</h2>
                            <span>وصف المنتج</span>
                            ${ul.innerHTML}
                        </div>
                        <div class="image">
                            <img src=${item.img} class="fullimg">
                        </div>
                    </div>
                    <div class="box">
                        <div class="box-price">
                            <h3>سعر الكاش ${item.price}</h3>
                        </div>
                        <div class="box-price">
                            <h3>سعر التقسيط ${item.price_part} , ${item.numberOfMonth}</h3>
                        </div>
                    </div>
                    <div class="two-icon">
                        <div class="icon">
                            <i class="fa-solid fa-heart"></i>
                            <span>كفالة سنة</span>
                        </div>
                        <div class="icon">
                            <i class="fa-solid fa-shopping-cart"></i>
                            <span>توصيل سريع</span>
                        </div>
                    </div>
                    <div class="adv styletext">اشتري الان ودفع لاحقا</div>
                    <div class="browse" cust-attr='${item.id}'>اطلبه الان</div>
                `;
                document.querySelector('.popup .innerPopup').appendChild(div);
                let orderItNow=document.querySelector('.popup .innerPopup .selected .browse');
                orderItNow.onclick=function(){
                itemCart.push(item);
                    let snackbar=document.querySelector('#snackbar');
                    snackbar.innerHTML='تمت الاضافة للسلة';
                    snackbar.classList.add('show');
                    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000)
                }
            }
        });

    }
});

