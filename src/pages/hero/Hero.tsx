import github from '../../assets/svg/github.svg'
import linkedin from '../../assets/svg/linkedin.svg'

export default function Hero() {
  console.log(github)
  return (
    <section className='md:px-4 md:w-full'>
      <div className='sm:p-10 p-6 pt-20 flex flex-col md:fixed'>
      <h3 className='text-base sm:text-lg'>Hi, my name is</h3>
      <h2 className='text-2xl sm:text-4xl text-accent font-bold'>Harry Holubiev</h2>
      <h2 className='text-2xl  sm:text-4xl text-primary font-light'>I am a <span className='text-accent font-bold'>Frontend Developer</span></h2>
      <p className='text-base sm:text-lg mt-2 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='flex gap-2 mt-2'>
        <img src={github} className='w-8 h-8' alt="Github Link" />
        <img src={linkedin} className='w-8 h-8' alt="LinkedIn Link" />
      </div>
      <div className='flex gap-2 justify-center sm:self-start'>
        <button className='p-2 sm:flex-auto sm:p-2.5 rounded-full bg-accent font-light flex-1 text-lg text-main mt-4'>Download CV</button>
        <button className='p-2 sm:flex-auto sm:p-2.5 rounded-full bg-accent font-light flex-1 text-lg text-main mt-4'>Contact Me</button>
      </div>
      </div>
    </section>
  )
}
