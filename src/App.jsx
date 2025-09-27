import { useState } from 'react'
import './App.css'
import Tenisnike from './assets/carr.png'
import Tenisnike2 from './assets/carr..png'
import Tenisnike3 from './assets/carr.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Tenisnike4 from './assets/carri1.png'
import Tenisnike5 from './assets/carr2.png'
import Tenisnike6 from './assets/carri3.png'
import Tenisnike7 from './assets/carri4.jpg'
import Logo from './assets/lg.png'
import 'swiper/css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header>    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={Tenisnike4} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={Tenisnike5} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={Tenisnike6} alt="" className="img-prod" /></SwiperSlide>
      <SwiperSlide><img src={Tenisnike7} alt="" className="img-prod" /></SwiperSlide>
    </Swiper>
</header>
      <section className="produtos">

        {/*Produto 1 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike}alt="" className="img-prod" />
            <h2>BMW iX1 xDrive30 M Sport</h2>
            <p className="desc">É um SUV elétrico de 313 cv, com ate 440km de autonomia com recarga rápida</p>
            <p className="preco">R$ 455.950,00</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (472)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 2 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike2}alt="" className="img-prod" />
            <h2>BMW i7 xDrive60 M Sport</h2>
            <p className="desc">É um sedã elétrico de luxo com 544cv,tração integral e tem até 625km de autonomia.</p>
            <p className="preco">R$ 1.373.950</p>
          <div className="avaliacao"> <span>★ ★ ☆ ☆ ☆</span> (172)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 3 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike3}alt="" className="img-prod" />
            <h2>BMW i5 M60</h2>
            <p className="desc">O **BMW i5 M60** é um sedã elétrico esportivo com 601 cv, tração integral, até 516 km de autonomia e tecnologia de ponta com conforto premium.
</p>
            <p className="preco">R$ 795.950</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (28)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>                      
      </section>
       <section className="destaque">
        <iframe 
        width="100%" 
        height="315"
        src="https://www.youtube.com/embed/JIVp3erJDMo?autoplay=1&mute=1&loop=1&playlist=JIVp3erJDMo" 
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
</iframe>   
        </section>

        <footer>

          <img src={Logo} alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App