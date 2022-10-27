import './Home.css'
import { Icon } from '@iconify/react';
import Container from './Container/Container'
export default function Home(){
    return(
        <>
         <div className='header'>
            <div className='header_div'>
                <div className='header_div_div'>
                    <b className='header_name'>Շահավետ առաջարկներ</b>
                    <b className='header_name_2'>Բոլոր ապրանքների համար</b>
                    <p className='header_name_text'>Պահպանեք ավելի շատ գումար և գնեք մինչեւ 70% զեղչով</p>
                    <button className='header_name_button'> Նոր խանութ</button>
                </div>
            </div>
            <div className='header_div'>
                <img className='header_div_img' src='./img/nkar.png'/>
            </div>
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
            <Container/>
        </>
    )
}