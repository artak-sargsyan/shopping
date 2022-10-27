import './Container2.css'
export default function Container2(){
    return(
        <>
        <div className="About_cont_head">
            <div className='About_cont_head_div'>

            </div>
            <div className='About_cont_head_div2'>
                <h1>Մեր մասին</h1>
                <p className='About_cont_head_div2_pi'>«Հագուստի աշխարհ» խանութների ցանցը հագուստի ոլորտում մանրածախ և մեծածախ առևտրով զբաղվող խոշորագույն ընկերություններից մեկն է Հայաստանում:
                    Ընկերությունն ունի 25 խանութ Հայաստանի Հանրապետությունում, որից 9-ը տեղակայված են Երևանում՝ գրեթե բոլոր վարչական շրջաններում, և 16-ը՝ մարզերում:
                    Որպես ներմուծող և վաճառող ընկերություն՝ «Հագուստի աշխարհ» խանութների ցանցը հանդիսանում է գրավիչ գործատու և տնտեսվարող սուբյեկտ, ունի 15 տարվա փորձ այս 
                    ոլորտում, 700 և ավել աշխատակից:
                    Ընկերության գաղափարախոսությունն է՝ ապահովել 
                    ցանկացած գնողունակություն ունեցող սպառողին հագուստի
                    մեծ տեսականիով, ընձեռելով հնարավորություն գնումներ 
                    կատարելու քաղաքակիրթ ճանապարհով, իրեն զգալու կարևորված և արժանապատիվ:</p>
            </div>
        </div>
        <div className='About_cont_head'>
            <h1>Ներբեռնեք Մեր Ծրագիրը</h1>
        </div>
        <div className='About_cont_head_2'>
            <video className='About_video' autoplay muted controls>
                <source src='./img/2204.mp4'/>
            </video>
        </div>
        <div className='container'>
                <ul className='container_ul'>
                    <li className='container_ul_li'>
                        <img className='container_img' src='./img/shipping.jpg'/>
                        <button className='container_button cont_btn1'>Անվճար առաքում</button>
                    </li>
                    <li className='container_ul_li'>
                        <img className='container_img' src='./img/online.jpg'/>
                        <button className='container_button cont_btn2'>Օնլայն պատվեր</button>
                    </li>
                    <li className='container_ul_li'>
                        <img className='container_img' src='./img/money.jpg'/>
                        <button className='container_button cont_btn3'>Խնայել գումարը</button>
                    </li>
                    <li className='container_ul_li'>
                        <img className='container_img' src='./img/promotions.jpg'/>
                        <button className='container_button cont_btn4'>Բաժնետոմսեր</button>
                    </li>
                    <li className='container_ul_li'>
                        <img className='container_img' src='./img/happy.jpg'/>
                        <button className='container_button cont_btn5'>Երջանիկ վաճառք</button>
                    </li>
                    <li className='container_ul_li'>
                        <img className='container_img' src='./img/support.jpg'/>
                        <button className='container_button cont_btn6'>Աջակցություն 24/7</button>
                    </li>
                </ul>
            </div>
        <div className='container_end'>
            <div className='container_end_div'>
                  <h2 className='container_end_div_h2'>Բաժանորդագրվեք նորություններին</h2>
                  <p className='container_end_div_pi'>Ստացեք էլփոստով թարմացումներ մեր վերջին խանութի և հատուկ առաջարկների մասին</p>
            </div>
            <div className='container_end_div'>
               <input className='container_end_div_input' type={'email'} placeholder='Ձեր էլ. փոստի հասցեն'/>
               <button className='container_end_div_button'>Գրանցվել</button>
            </div>
        </div>
        </>
    )
}