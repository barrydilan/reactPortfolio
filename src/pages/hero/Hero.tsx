import github from '../../assets/svg/github.svg'
import linkedin from '../../assets/svg/linkedin.svg'

export default function Hero() {
  return (
    <section className='mt-10 p-6 flex flex-col '>
      <h3 className='text-base'>Hi, my name is</h3>
      <h2 className='text-2xl'>Harry Holubiev</h2>
      <h2 className='text-2xl'>I am a Frontend Developer</h2>
      <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='flex gap-2 mt-2'>
        <img src={github} className='w-8 h-8' alt="Github Link" />
        <img src={linkedin} className='w-8 h-8' alt="LinkedIn Link" />
      </div>
      <div className='flex flex-col gap-2 justify-center'>
        <button className='p-2 border-2 rounded-full border-black mt-6'>Download CV</button>
        <button className='p-2 border-2 rounded-full border-black mt-6'>Contact Me!</button>
      </div>
    </section>
  )
}
