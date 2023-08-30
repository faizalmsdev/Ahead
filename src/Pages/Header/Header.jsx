    import React from 'react';
    import logo from '../../Assests/Canvas/logo.png';
    import Fade from 'react-reveal/Fade';
    import Button from '../../Components/Button';

    const Header = () => {
    return (
        <header className='flex justify-between m-5 sticky top-0 '>
            <Fade left>
                <div>
                    <img src={logo} alt="Logo png" height={42} width={42} className='rounded' />
                </div>
            </Fade>
            <Fade top>
                <div className='flex gap-12 mt-3'>
                    <a href="/" className='decoration-none'><li className='list-none hover:font-normal font-semibold text-slate-600'>Emotions</li></a>
                    <a href="/" className='decoration-none'><li className='list-none hover:font-normal font-semibold text-slate-600'>Manifesto</li></a>
                    <a href="/" className='decoration-none'><li className='list-none hover:font-normal font-semibold text-slate-600'>Self-awareness test</li></a>
                    <a href="/" className='decoration-none'><li className='list-none hover:font-normal font-semibold text-slate-600'>Work with us</li></a>
                </div>
            </Fade>
            <Fade right>
                <div className=''>
                    <Button label="Download app" />
                </div>
            </Fade>
        </header>
    )
    }

    export default Header
