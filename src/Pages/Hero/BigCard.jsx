    import React from 'react';
    import ghost from '../../Assests/Canvas/cuteghost.png'


    const BigCard = () => {
    return (
        <section className='p-10 h-[90vh]'>
            <div className='rounded-xl  pr-[2px] bg-[#FFE4E1] bg-opacity-50 pb-[120px] h-[78%] ml-24 w-[84%]'>
                <div className='section-m'>
                    <h3 className='mb-[12px]'>Built out of frustration</h3>
                    <h1 className='text-4xl font-bold'>Meet the ahead app</h1>
                </div>
                <div className='flex flex-row gap-[320px] px-[78px] mx-[32px] my-[32px] mt-[48px]'>
                    <div className='s4-logo-container'>
                        <img src={ghost} width={202} height={32} alt="logo" className='s4-logo ml-5 absolute right-[69.5%] top-[246%] z-10' />
                        <div className='circle2' />
                    </div>
                    <div className='ml-[132px] w-[460px]'>
                        <p className='text-lg leading-7 mb-4'>A personalized pocket coach that provides bite-sized,science-driven tools to boost emotional intelligence.</p>
                        <p className='text-lg leading-7'>Think of it as a pocket cheerleader towards a better,more fulfilling.</p>
                    </div>
                </div>
            </div>
        </section>
    )
    } 

    export default BigCard
