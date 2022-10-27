import './Container3.css'
import { Icon } from '@iconify/react';

export default function Container3(){
    return(
        <>
        <div className='Blog_cont_head'>
            <div className='Blog_cont_head_div'>
                <h1  className='Blog_cont_head_div_h1'>13/01</h1>
                
            </div>
            <div className='Blog_cont_head_div_2'>
                <h3>Բամբակյա սառոչկաներ</h3>
                <p></p>
                <a href='#'></a>

            </div>
        </div>
        <div className='Blog_cont_head'>
            <div className='Blog_cont_head_div_3'>
            <h1 className='Blog_cont_head_div_h1'>13/04</h1>

            </div>
            <div className='Blog_cont_head_div_2'>
            <h3>Բամբակյա սառոչկաներ</h3>
                <p></p>
                <a href='#'></a>
            </div>
        </div>
        <div className='Blog_cont_head'>
            <div className='Blog_cont_head_div_4'>
            <h1  className='Blog_cont_head_div_h1'>12/01</h1>

            </div>
            <div className='Blog_cont_head_div_2'>
            <h3>Բամբակյա սառոչկաներ</h3>
                <p></p>
                <a href='#'></a>
            </div>
        </div>
        <div className='Blog_cont_head'>
            <div className='Blog_cont_head_div_5'>
            <h1  className='Blog_cont_head_div_h1'>16/01</h1>

            </div>
            <div className='Blog_cont_head_div_2'>
            <h3>Բամբակյա սառոչկաներ</h3>
                <p></p>
                <a href='#'></a>
            </div>
        </div>
        <div className='container_button_click'>
                    <div className='container_button_click_div'>
                        <button className='cont_buttoner'>1</button>
                        <button className='cont_buttoner'>2</button>
                        <button className='cont_buttoner'><Icon icon="iconoir:arrow-right" /></button>
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