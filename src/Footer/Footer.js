import './Footer.css'
import { Icon } from '@iconify/react';

export default function Footer(){
    return(
        <>
        <div className='footer'>
            <div className='footer_div'>
                <img className='footer_div_img' src='./img/logo.png'/>
                <h3>Կապ</h3>
                <p className='footer_div_pi'><b className='footer_div_bi'>Հասցե:</b>  L.MARZ Q. VANADZOR</p>
                <p className='footer_div_pi'><b className='footer_div_bi'>Հեռախոս:</b>  +374-933-312-05</p>
                <p className='footer_div_pi'><b className='footer_div_bi'>Ժամ:</b>  10:00-20:00,Երկ-Շբթ</p>
                <h3 className='footer_div_h3'>Հետևեք մեզ</h3>
                <div>
                    <a href='#'>
                    <Icon className='footer_div_icon' icon="dashicons:facebook-alt" />
                    </a>
                    <a href='#'>
                    <Icon className='footer_div_icon' icon="fe:instagram" />
                    </a>
                    <a href='#'>
                    <Icon className='footer_div_icon' icon="ic:twotone-telegram" />
                    </a>
                </div>
            </div>
            <div className='footer_div'>
                <h3>Օգտվող</h3>
                <a className='footer_div_a' href='#'>Մեր մասին</a>
                <a className='footer_div_a' href='#'>Առաքման տեղեկություններ</a>
                <a className='footer_div_a' href='#'>Պայմաններ եւ դրույթներ</a>
                <a className='footer_div_a' href='#'>Կապ մեզ հետ</a>
            </div>
            <div className='footer_div'>
                <h3>Իմ Հաշիվը</h3>
                <a className='footer_div_a' href='#'>Մուտք գործել</a>
                <a className='footer_div_a' href='#'>Քարտի Դիտում</a>
                <a className='footer_div_a' href='#'>Օգնություն</a>
            </div>
            <div className='footer_div'>
                <h3>Ներբեռնեք ծրագիրը</h3>
                <p className='footer_div_a' > Ներբեռնեք App Store - ից կամ Google Play-ից</p>
               <div className='footer_div_div1'>
                    <div className='footer_div_div2'>
                        <p className='footer_div_div1_pi'><Icon className='App_icon' icon="ic:round-apple" />App Store</p>
                    </div>
                    <div className='footer_div_div2'>
                    <Icon className='google_icon' icon="logos:google-play" />
                    </div>
               </div>
               <p className='footer_div_div_pi'>Պաշտպանված վճարային համակարգեր</p>
               <div className='footer_footer'>
                    <Icon className='footer_footer_icon' icon="logos:visaelectron" width="40" height="40" />
                    <Icon className='footer_footer_icon' icon="logos:mastercard" width="40" height="40" />
                    <Icon className='footer_footer_icon' icon="logos:maestro" width="40" height="40" />
               </div>
            </div>
        </div>
        </>
    )
}