import './Container4.css'
import { Icon } from '@iconify/react';

export default function Container4(){
    return(
        <>
        <div className='Contact_header'>
            <div className='Contact_header_div'>
                <p className='Contact_header_pi'>Կապ մեզ հետ</p>
                <h2 className='Contact_header_h2'>Այցելեք մեր գործակալության գտնվելու վայրերից մեկը կամ կապվեք մեզ հետ </h2>
                <b className='Contact_header_h2'>Գլխավոր գրասենյակ</b>
                <p className='Contact_header_pi_22'><Icon className='Contact_header_icon' icon="entypo:address" /> L.MARZ Q.VANADZOR</p>
                <p className='Contact_header_pi_22'><Icon className='Contact_header_icon' icon="clarity:email-solid" /> palyan06@bk.ru</p>
                <p className='Contact_header_pi_22'><Icon className='Contact_header_icon' icon="foundation:telephone" /> +374-933-312-05</p>
                <p className='Contact_header_pi_22'> <Icon className='Contact_header_icon' icon="tabler:clock-hour-10" />10:00-20:00,Երկ-Շբթ</p>
            </div>
            <div className='Contact_header_div'>
            <iframe className='Contact_header_div_qartez' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <div className='Contact_header_2'>
            <div className='Contact_header_2_div'>
                <p className='Contact_header_2_div_name'>ԹՈՂՆԵԼ ՀԱՂՈՐԴԱԳՐՈՒԹՅՈՒՆ</p>
                <h2 className='Contact_header_2_div_name'>Մենք ուրախ կլինենք լսել ձեզ</h2>
                <input className='Contact_header_2_div_input' type={'text'} placeholder='Ձեր անունը'/>
                <input className='Contact_header_2_div_input' type={'email'} placeholder='Էլ. փոստ'/>
                <input className='Contact_header_2_div_input_2' type={'text'} placeholder='Ձեր հաղորդագրությունը'/>
                <button className='Contact_header_2_button'>Ներկայացնել</button>
            </div>
            <div className='Contact_header_2_div_2'>
                <div className='container_head_div_div'>
                    <p className='container_head_div_div_pi'></p>
                    <p className='container_head_div_div_name_text'>
                        <b>Արտակ Կարապետյան</b>
                        <p className='container_head_div_texter'>Ավագ մարքեթինգի մենեջեր</p>
                        <p className='container_head_div_texter'>Հեռախոս։ +374-945-468-78</p>
                        <p className='container_head_div_texter'>Էլ-փոստ։ karapetyan25@gmail.com</p>
                    </p>
                </div>
                <div className='container_head_div_div'>
                    <p className='container_head_div_div_pi pi2'></p>
                    <p className='container_head_div_div_name_text'>
                        <b>Տիգրան Պողոսյան</b>
                        <p className='container_head_div_texter'>Ավագ մարքեթինգի մենեջեր</p>
                        <p className='container_head_div_texter'>Հեռախոս։ +374-995-468-28</p>
                        <p className='container_head_div_texter'>Էլ-փոստ։ Poxosyan25@gmail.com</p>
                    </p>
                </div>
                <div className='container_head_div_div'>
                    <p className='container_head_div_div_pi pi3'></p>
                    <p className='container_head_div_div_name_text'>
                        <b>Կարապետ Համբարցումյան</b>
                        <p className='container_head_div_texter'>Ավագ մարքեթինգի մենեջեր</p>
                        <p className='container_head_div_texter'>Հեռախոս։ +374-987-358-18</p>
                        <p className='container_head_div_texter'>Էլ-փոստ։ Hambarcumyan25@gmail.com</p>
                    </p>
                </div>
            </div>
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