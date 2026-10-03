import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const mono = "font-['DM_Mono'] text-[10px] font-medium uppercase tracking-[.12em]"
const serif = "font-['DM_Serif_Display']"

function App() {
  const [isOpen , setIsOpen] = useState(false)
  const page = useRef(null)
  const surprise = useReff(null)


  useLayoutEffect(() => {
    const lenis = new Lenis({duration: 1.2 , smoothWheel:true})
    const context = gsap.context(() => {
      gsap.timeline({defaults: {ease: 'power3.out'}})
      .from('[data-gsap="nav"]' , {y: -24 , opacity: 0 , duration: 0.8})
       .from('[data-gsap="hero-copy"]', { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.35')
        .from('[data-gsap="visual"]', { scale: 0.88, opacity: 0, rotate: 3, duration: 1.1 }, '-=0.8')
        .from('[data-gsap="note"]', { y: 18, opacity: 0, duration: 0.6 }, '-=0.45')

     gsap.to('[data-gsap="visual"]', { yPercent: 13, rotate: -2, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.from('[data-gsap="memory"]', { y: 60, stagger: 0.14, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '[data-gsap="memory-grid"]', start: 'top 78%', toggleActions: 'play none none none', once: true } })
      gsap.from('[data-gsap="details"]', { y: 45, stagger: 0.12, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '[data-gsap="details-section"]', start: 'top 78%', toggleActions: 'play none none none', once: true } })
      gsap.from('[data-gsap="letter"]', { y: 70, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '[data-gsap="letter"]', start: 'top 78%', toggleActions: 'play none none none', once: true } })
    }, page)
    
let rafId 
const raf = (time) => {lenis.raf(time); rafId = requestAnimationFrame(raf)}
rafId = requestAnimationFrame(raf)
lenis.on('scroll' , ScrollTrigger.update)
return () => {cancelAnimationFrame(rafId); context.revert();lenis.destroy()} } , [])
 


const openSurprise = () => {
  setIsOpen(true) 
  requestAnimationFrame(() => {
    surprise.current?.scrollIntoView({behavior: 'smooth' , block: 'center'})
      gsap.fromTo('.confetti', { y: -20, opacity: 0, scale: 0.4 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.04, ease: 'back.out(2)' })
    })

}



  return (

<main ref={page} className="overflow-hidden bg-[#f5eee5] text-[#25211d">
  <nav data-gsap="nav" className="flex h-[92px] items-center justify-between border-b border-[#1f1d1c] px-[6vw] max-[780px]:h-[76px] max-[780px]:px-[7vw]">
    <a className={`flex items-center gap-3 text-[#25211d] no-underline ${mono} `}href="#top" aria-label='Birthday home'>
      <span className={`grid size-[30px] place-items-center rounded-full bg-[#ec6d52] text-white ${serif} text-xl italic normal-case`}>A</span>
      <span>for my favorite person</span></a>
      <span className={`${mono} text-[#726a60] max-[780px]:hidden`}>a little note · 2026</span>
  </nav>

      <section id="top" className="relative grid min-h-[calc(100vh-92px)] grid-cols-[1fr_.9fr] items-center gap-[8vw] px-[10vw] py-[8vh] pb-[10vh]
       max-[780px]:block max-[780px]:min-h-0 max-[780px]:px-[9vw] max-[780px]:py-[14vh] max-[780px]:pb-[15vh]">
        <div className="relative z-10 max-w-[560px]">
          <p data-gsap="hero-copy" className={`mb-8 flex items-center gap-2.5 ${mono} text-[#726a60]`}>
            <span className="inline-block h-px w-[26px] bg-[#ec6d52]" />Today is all about you</p>
          <h1 data-gsap="hero-copy" className={`m-0 text-[clamp(4.5rem,8.7vw,8rem)] font-normal leading-[.86] tracking-[-.05em] ${serif}`}>
            Happy birthday,<br /><em className="text-[#ec6d52]">beautiful.</em></h1>
          <p data-gsap="hero-copy" className="mt-9 mb-7 max-w-[340px] text-[15px] leading-[1.7] text-[#726a60]">
            A tiny corner of the internet, made for the girl who makes ordinary days feel like something worth celebrating.</p>
          <button data-gsap="hero-copy" className={`group cursor-pointer border-0 bg-[#25211d] px-[21px] py-[15px] text-white transition duration-300
             hover:-translate-y-1 hover:bg-[#ec6d52] ${mono}`} type="button" onClick={openSurprise}>Open your surpris
              <span className="ml-[22px] align-[-2px] text-[19px] transition-transform group-hover:translate-x-1" aria-hidden="true">
                ↗</span></button>
          <p data-gsap="note" className={`mt-[72px] text-[#726a60] ${mono} tracking-[.08em] max-[780px]:mt-12`}>
            scroll slowly · there is more below</p>
        </div>

        <div className="relative perspective-[900px] max-[780px]:mx-auto max-[780px]:mt-[90px] max-[780px]:mb-5 max-[780px]:max-w-[390px]">
          <span className="absolute left-1/2 top-[44%] h-[150px] w-[470px] -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] rounded-[50%] border border-[#25211d]/25 animate-orbit-spin max-[780px]:w-[105%]" aria-hidden="true" />
          <span className="absolute left-1/2 top-[44%] h-[125px] w-[420px] -translate-x-1/2 -translate-y-1/2 rotate-[48deg] rounded-[50%] border border-[#ec6d52] animate-orbit-spin-reverse max-[780px]:w-[94%]" aria-hidden="true" />
          <span className="absolute right-[4%] top-[4%] z-10 text-[37px] text-[#f29ab2] animate-twinkle" aria-hidden="true">✦</span>
          <span className="absolute bottom-[12%] left-[3%] z-10 size-[18px] rounded-full bg-[#7bc8d2] shadow-[0_0_0_7px_rgba(123,200,210,.18)] animate-bob" aria-hidden="true" />
          <div data-gsap="visual" className="relative mx-auto w-full max-w-[410px] rotate-[4deg] bg-[#f5c84c] p-4 pb-12 shadow-[24px_28px_0_rgba(37,33,29,.09)] animate-card-float">
            <div className="absolute left-1/2 top-[-22px] z-10 h-[42px] w-[124px] -translate-x-1/2 rotate-[-4deg] bg-[#ec6d52]" />
            <div className="aspect-[.8] bg-[linear-gradient(140deg,rgba(236,109,82,.1),rgba(199,215,107,.1)),url('https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center saturate-[.88]" role="img" aria-label="A sunlit bouquet of flowers" />
            <div className={`absolute bottom-3.5 left-[22px] text-[14px] leading-[1.1] ${serif}`}>you make life<br /><strong className="text-xl">more colorful</strong></div>
            <span className={`absolute right-5 bottom-3 rotate-[-12deg] rounded-full border border-[#ec6d52] px-1.5 py-2 text-center text-[8px] leading-[1.1] text-[#ec6d52] ${mono}`}>made<br />with love</span>
          </div>
        </div>
      </section>

      <section className="relative grid overflow-hidden grid-cols-[.8fr_1.2fr] gap-[8vw] bg-[#ec6d52] px-[10vw] py-[15vh] text-white max-[780px]:block max-[780px]:px-[8vw] max-[780px]:py-[14vh]">
        <span className={`pointer-events-none absolute -right-8 -top-16 text-[clamp(12rem,28vw,27rem)] leading-none text-white/[.07] ${serif}`} aria-hidden="true">us</span>
        <span className="pointer-events-none absolute bottom-[25%] left-[4%] size-16 rounded-full border border-[#f5c84c]/60 max-[780px]:size-10" aria-hidden="true" />
        <div className="relative z-10">
          <p className={`mb-8 flex items-center gap-2.5 text-white/75 ${mono}`}><span className="inline-block h-px w-[26px] bg-[#f5c84c]" />A few things I love</p>
          <h2 className={`m-0 max-w-[570px] text-[clamp(3.7rem,6.3vw,6.8rem)] font-normal leading-[.86] tracking-[-.05em] ${serif}`}>Life with you<br /><em className="text-[#f5c84c]">feels like this.</em></h2>
          <p className="mt-[34px] max-w-[320px] text-[14px] leading-[1.75] text-white/85 max-[780px]:mb-7">The loud laughs, the quiet car rides, and all the little in-between moments. You turn an ordinary day into a story I want to keep.</p>
          <p className="max-w-[285px] border-l-2 border-[#f5c84c] pl-4 text-[13px] italic leading-[1.7] text-white/75">“The best parts are usually the ones we never planned.”</p>
        </div>
        <div data-gsap="memory-grid" className="grid grid-cols-2 gap-3.5 self-center max-[430px]:block">
          {[['01', 'Your laugh', 'My favorite sound, in every room.', '#c7d76b', '✳'], ['02', 'Soft mornings', 'Slow coffee and nowhere else to be.', '#25211d', '✦'], ['03', 'Every little thing', 'Somehow, you make it all feel like magic.', '#f5c84c', '♡'], ['04', 'The way you care', 'You make ordinary people feel extraordinary.', '#f29ab2', '✦'], ['05', 'Our little world', 'A thousand tiny moments that feel like home.', '#7bc8d2', '✷'], ['06', 'Big dreams', 'I love watching you become who you are meant to be.', '#f5eee5', '↗'], ['07', 'Your safe place', 'With you, even the quiet feels warm.', '#ec6d52', '♡']].map(([number, title, text, background, spark], index) => (
            <article data-gsap="memory" key={title} className={`relative flex min-h-[210px] flex-col justify-between overflow-hidden p-[23px] text-[#25211d] transition duration-300 hover:-translate-y-2 hover:rotate-x-3 hover:shadow-[12px_14px_0_rgba(37,33,29,.16)] max-[780px]:min-h-[155px] max-[780px]:p-4 max-[430px]:mb-3 max-[430px]:min-h-[180px] ${index === 0 ? 'row-span-2 min-h-[434px] max-[780px]:min-h-[320px]' : ''} ${index === 1 ? 'text-[#f5eee5]' : ''}`} style={{ backgroundColor: background }}>
              <span className="font-['DM_Mono'] text-[11px] opacity-65">{number}</span><i className={`absolute right-[22px] top-[19px] text-[25px] not-italic animate-twinkle ${index === 1 ? 'text-[#7bc8d2]' : index === 2 ? 'text-[#f29ab2]' : 'text-[#ec6d52]'}`}>{spark}</i><h3 className={`mt-auto mb-1 text-[32px] font-normal ${serif} max-[780px]:text-[25px]`}>{title}</h3><p className="text-[12px] opacity-70">{text}</p>
            </article>
          ))}
        </div>
        <div data-gsap="memory" className="col-span-2 mt-10 border-t border-white/35 pt-6 max-[780px]:mt-12">
          <p className={`mb-4 text-white/65 ${mono}`}>our tiny rituals</p>
          <div className="grid grid-cols-3 gap-3 text-[#25211d] max-[600px]:grid-cols-1">
            {[['late-night talks', 'when five minutes becomes two hours'], ['shared playlists', 'every song has a little piece of us'], ['just because', 'the best surprises never need a reason']].map(([title, text]) => (
              <div key={title} className="flex items-baseline justify-between gap-4 border-b border-white/30 pb-3 max-[600px]:pb-2"><strong className={`text-[17px] font-normal ${serif}`}>{title}</strong><span className="text-right text-[11px] text-white/75">{text}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section data-gsap="details-section" className="relative overflow-hidden bg-[#7bc8d2] px-[10vw] py-[13vh] text-[#25211d] max-[780px]:px-[8vw] max-[780px]:py-[12vh]">
        <span className="absolute -right-8 -top-12 size-48 rounded-full border border-[#25211d]/20" aria-hidden="true" />
        <span className="absolute bottom-8 left-[8%] text-4xl text-[#f29ab2] animate-twinkle" aria-hidden="true">✦</span>
        <div className="relative z-10 grid grid-cols-[.8fr_1.2fr] items-end gap-[8vw] max-[780px]:block">
          <div data-gsap="details">
            <p className={`mb-7 flex items-center gap-2.5 text-[#25211d]/65 ${mono}`}><span className="inline-block h-px w-[26px] bg-[#ec6d52]" />for the year ahead</p>
            <h2 className={`m-0 max-w-[460px] text-[clamp(3.5rem,6vw,6.2rem)] font-normal leading-[.88] tracking-[-.05em] ${serif}`}>More of the<br /><em className="text-[#ec6d52]">good stuff.</em></h2>
          </div>
          <div className="grid grid-cols-3 gap-3 max-[780px]:mt-12 max-[520px]:grid-cols-1">
            {[['01', 'More sunsets', 'The kind that make you stop and look up.'], ['02', 'More dancing', 'Especially in the kitchen, for no reason.'], ['03', 'More becoming', 'Room to grow into every beautiful version of you.']].map(([number, title, text]) => (
              <article data-gsap="details" key={title} className="border-t border-[#25211d]/35 pt-4 max-[520px]:grid max-[520px]:grid-cols-[48px_1fr] max-[520px]:gap-3">
                <span className={`${mono} text-[#25211d]/60`}>{number}</span>
                <div><h3 className={`mt-8 mb-2 text-[25px] font-normal leading-none ${serif} max-[520px]:mt-0`}>{title}</h3><p className="text-[12px] leading-[1.6] text-[#25211d]/70">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={surprise} className="flex flex-col items-center bg-[#f5eee5] px-[10vw] py-[15vh] max-[780px]:px-[8vw] max-[780px]:py-[14vh]">
        <div className={`mb-6 flex w-full items-center gap-3 text-[#726a60] ${mono}`}><span className="inline-block h-px w-[26px] bg-[#ec6d52]" />just for you</div>
        <article data-gsap="letter" className="relative min-h-[530px] w-full max-w-[740px] overflow-hidden border border-[#25211d]/20 bg-[#fffaf3] p-[29px_38px_38px] shadow-[13px_13px_0_#c7d76b] max-[780px]:min-h-[640px] max-[780px]:p-6 max-[780px]:shadow-[8px_8px_0_#c7d76b] max-[430px]:min-h-[700px]">
          <div className={`flex justify-between text-[#ec6d52] ${mono}`}><span>dear birthday girl,</span><span className="text-[23px]">♡</span></div>
          <div className="max-w-[500px] pt-20 pb-7 max-[780px]:pt-[70px]"><h2 className={`m-0 text-[clamp(3.8rem,7vw,6.7rem)] font-normal leading-[.86] tracking-[-.05em] ${serif}`}>Here’s to another<br /><em className="text-[#ec6d52]">year of you.</em></h2><p className="mt-[37px] max-w-[440px] text-[14px] leading-[1.8] text-[#726a60] max-[430px]:text-[13px]">I hope this year brings you the kind of happiness you give so effortlessly to everyone around you. More sunsets, more spontaneous plans, more reasons to dance in the kitchen.</p><p className="max-w-[440px] text-[14px] leading-[1.8] text-[#726a60] max-[430px]:text-[13px]">Thank you for being exactly who you are. I love you endlessly.</p><div className={`mt-[30px] text-[21px] italic text-[#ec6d52] ${serif}`}>yours, always <span className="ml-2 not-italic">♥</span></div></div>
          {!isOpen && <div className="absolute bottom-[38px] right-[39px] text-center text-[#726a60] max-[780px]:right-6 max-[780px]:bottom-6 max-[430px]:static max-[430px]:mt-8"><span className="text-[30px] text-[#f5c84c]">✦</span><p className={mono}>your letter is waiting</p><button className={`border border-[#25211d] bg-transparent px-3.5 py-2.5 text-[#25211d] hover:bg-[#25211d] hover:text-white ${mono}`} type="button" onClick={openSurprise}>tap to open</button></div>}
          {isOpen && <div className="absolute bottom-10 right-[45px] flex gap-5 text-[22px] text-[#ec6d52] max-[780px]:right-6 max-[780px]:bottom-6" aria-hidden="true"><i className="confetti not-italic">✦</i><i className="confetti text-[#f5c84c] not-italic">♥</i><i className="confetti not-italic">✳</i><i className="confetti not-italic">✦</i><i className="confetti text-[#f5c84c] not-italic">♥</i></div>}
        </article>
      </section>
      <footer className={`flex justify-between border-t border-[#25211d]/20 px-[6vw] py-6 text-[#726a60] ${mono} max-[780px]:px-[8vw] max-[780px]:text-[8px]`}><span>made with all my love</span><span className="max-[430px]:hidden">07 · 09 · 2026</span><span>♡</span></footer>
    </main>
  )
}

export default App
