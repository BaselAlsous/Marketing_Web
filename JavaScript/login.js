document.getElementById('logup').addEventListener('click', function() {
    let popup = document.querySelector('.popup');
    popup.style.display = 'block';
    let parent = document.createElement('div');
    parent.classList.add('parent' , 'reg');
    parent.innerHTML = ` 
    <form>
                    <div class="title">
                        <h2>انشاء حساب</h2>
                    </div>
                    <div class="custmer-data">
                        <div class="name">
                            <input type="text"  placeholder="الاسم الاول" required>
                            <input type="text"  placeholder="الاسم الثاني" required>
                        </div>
                        <div class="id-num">
                            <input type="text"  placeholder="الرقم الوطني" required>
                        </div>
                        <div class="phone">
                            <input type="text"  placeholder="رقم الهاتف" required>  
                        </div>
                        <div class="email">
                            <input type="text"  placeholder="البريد الالكتروني" required>   
                        </div>
                        <div class="password">
                            <input type="text"  placeholder="كلمة المرور" required>
                            <input type="text"  placeholder="تأكيد كلمة المرور" required>
                        </div>
                        <div class="date">
                            <select  required>
                                <option value="" hidden>اليوم</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="25">24</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>                                
                            </select>
                            <select  required>
                                <option value="" hidden>الشهر</option>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5">5</option>
                                <option value="6" >6</option>
                                <option value="7" >7</option>
                                <option value="8" >8</option>
                                <option value="9" >9</option>
                                <option value="10" >10</option>
                                <option value="11" >11</option>
                                <option value="12" >12</option>
                            </select>
                            <select  required>
                                <option value="" hidden>السنة</option>
                                <option value="x>1980" >غير ذالك</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                            </select>
                        </div>
                        <div class="done">
                            <input type="submit" value="تسجيل">
                        </div>
                        <div class="have-acc">
                            <input type="checkbox" name="login" value="false">
                            <label for="login"> هل لديك حساب بلفعل؟</label>
                        </div>
                    </div> 
                    </form>
                    <form>

                    <div class="signin">
                                <div class="email">
                                    <input type="text"  placeholder="البريد الالكتروني" required id="UN">   
                                </div>
                            <div class="password">
                                <input type="text"  placeholder="كلمة المرور" required id="PW">
                            </div>
                            <div class="done">
                            <input type="submit" value="دخول" id="admin">
                        </div>
                    </div>
                    </form>
    `;
    document.querySelector('.popup .innerPopup').appendChild(parent);
    document.querySelector('.done input').addEventListener('click', function(e){
        e.preventDefault();
        console.log("HELLO");
    });
    document.getElementById('admin').onclick=function(){
        let username=document.getElementById('UN').value;
        let password=document.getElementById('PW').value;
        if(username==='admin@gmail.com' && password==='12345678'){
            window.location='admin.html';
        }else{
            let snackbar=document.querySelector('#snackbar');
            snackbar.innerHTML=' تاكد من كلمة السر او البريد الالكتروني ';
            snackbar.classList.add('show');
            setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000)
        }




    }
    document.querySelector('.have-acc input').addEventListener('click', function(e){
        let show = document.querySelector('.signin');
        if(show.style.visibility==='visible'){
            show.style.visibility = 'hidden';
        }else{
            show.style.visibility = 'visible';
        }
    
    });



});