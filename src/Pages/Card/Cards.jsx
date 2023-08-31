import React from 'react';
import ghost from '../../Assests/Canvas/halloween.png'
import Card from '../../Components/Card';
import { emojiData , colorPalette , hoverColorPalette } from '../../Constants';
import { Slide } from 'react-reveal';

const Cards = () => {
  // console.log('colorPalette length:', colorPalette.length);
  return (
    <section className='section-m1'>
        <div className='flex  section-m'>
          <h1 className='absolute text-4xl font-bold'>Does this sound familiar... </h1>
          <img src={ghost} height={32} width={32} alt='img' className='ml-10 relative bottom-9 left-[32%]' />
        </div>
        <Slide right>
          <div class="flex flex-col bg-white m-auto p-auto">
              <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                    {emojiData.map((data,index)=>(
                      <Card key={index} emoji={data.emoji} title={data.title} emojiDescription={data.emojiDescription}
                        colorClass={colorPalette[index % colorPalette.length]} 
                        hoverColorClass = {hoverColorPalette[index % hoverColorPalette.length]}
                      />
                    ))}
                </div>
              </div>
          </div>
        </Slide>
        
    </section>
  )
}

export default Cards
