import React from 'react'

import './ButtonPills.scss';

const ButtonPills = () => {

    const scroll = (component) => {
        if(component){
            const section = document.querySelector( component );
            if(section){
                section.scrollIntoView( { behavior: 'smooth' } );


                const ready=document.querySelector(component);
                ready.classList.add('animate__fadeIn','animate__slower');

                setTimeout(() => {
                    ready.classList.remove( 'animate__fadeIn','animate__slower')
                }, 3000);
            }
        };
      };


    return ( 
        <div>
               

                    <div style={{background:'#FFF2E2', width:'60px',height:'60px',top:'450px',position:'absolute',borderRadius:'20px'}}>
                        <div style={{margin:'0 auto',justifyContent:'center',alignContent:'center',alignItems:'center',paddingTop:'15px'}} 
                            css={
                            css`
                                transition:all 300ms ease-in-out;
                                &:hover{
                                    transform:scale(1.1) rotate(3deg) ;
                                }
                            `}

                            >
                            <img height="100%" width="100%" src={require('../../imgs/uxkit/pills2-1.png')} alt=""/>
                        </div>
                    </div>
                    <div style={{width:'42%', left:'80px',marginTop:'15px',position:'absolute'}}>
                        <p style={{alignContent:'center',textAlign:'left',fontSize: '13px'}}>Check your test <span style={{color:'#8BC9DC',fontWeight:'bold'}}>result</span> and discuss with your doctor</p>
                    </div>
                    <div onClick={()=>scroll('#descriptionText')} style={{height:'25px',width:'25px',marginTop:'75px',left:'35px' ,position:'absolute'}}
                        css={css`
                        transition:all 300ms ease-in-out;
                        &:hover{
                            transform:translateY(2px) scale(1.1);
                            cursor:pointer;
                        }    
                        `
                        }
                    >
                        <img height="100%" width="100%" src={require('../../imgs/uxkit/arrow.png')} alt=""/>
                    </div>
        </div>
     );
}
 
export default ButtonPills;