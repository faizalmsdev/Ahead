    import React from 'react';
    import apple from '../../Assests/Images/download.png';
    import star from '../../Assests/Images/star.png';
    import mobile from '../../Assests/Images/mobile.png';
    import ss from '../../Assests/Images/ss.png'
    import ghost from '../../Assests/Canvas/cuteghost.png';
    import ghost2 from '../../Assests/Canvas/ghostwithheadset.png';
    import bat from '../../Assests/Canvas/bats.png';
import { Slide,Flip } from 'react-reveal';

    const Hero = () => {
    return (
        <section className='p-10'>
            <div className='rounded-xl flex flex-row pl-[22px] pr-[52px] bg-slate-200 pt-[40px] pb-[120px] h-[650px] ml-10 w-[94%]'>
                    <Slide left>
                        <div className='ml-10 mt-[80px] '>
                            <h3 className=''>Ahead app</h3>
                            <h1 className='text-bold text-7xl flex-wrap w-[600px] leading-11 font-black'>Master your life by mastering emotions</h1>
                            <div className='flex-1 flex gap-10 mt-6'>
                                <img src={apple} height={52} width={160} alt="download option" />
                                <div className='flex flex-col flex-1 gap-2'>
                                    <div className='flex gap-1'>
                                        <img src={star} height={24} width={24} alt="star img" />
                                        <img src={star} height={24} width={24} alt="star img" />
                                        <img src={star} height={24} width={24} alt="star img" />
                                        <img src={star} height={24} width={24} alt="star img" />
                                        <img src={star} height={24} width={24} alt="star img" />
                                    </div>
                                    <p>100+ AppStore reviews</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Flip right>
                        <div className='container'>
                            <div className='dotted-circle absolute'></div>
                            <div className='circle shadow-md '></div>
                            <img src={mobile} alt="mobile png" height={520} width={258} className='mobile ' />
                            <img src={ss} alt="screenshots" height={500} width={228} className='ss' />
                        </div>
                    </Flip>
                    
            </div>
        
        
            <img src={ghost} alt="ghost img" className='ghost' height={110} width={110} />
            <img src={ghost2} alt="ghost img" className='ghost2' height={120} width={120} />
            <img src={bat} alt="bat png" width={120} className='ghost3' />
        </section>
    )
    }

    export default Hero
