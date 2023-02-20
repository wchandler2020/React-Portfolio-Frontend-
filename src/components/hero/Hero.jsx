import React from 'react';
import html from '../../images/html.png'
import css from '../../images/css.jpg'
import django from '../../images/django.png'
import java from '../../images/java.png'
import python from '../../images/python.png'
import javascript from '../../images/javascript.png'
import sql from '../../images/sql.png'
import react from '../../images/react.png'
import hero from '../../images/hero.png'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>THANKS FOR STOPPING BY</h3>
            <h1>
              Hi, I’m <span>William Chandler</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Python Developer.", ' Java Developer', " React Developer.", ' All Around Great Guy.']} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>CONNECT WITH ME</h4>
                <div className='button socials'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                  <h4>MY SKILL</h4>
                  <div className="skills">
                  <button className='btn_shadow'>
                    <img src={html} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={css} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={javascript} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={react} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={python} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={django} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={java} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={sql} alt='' />
                  </button>
                </div> 
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero