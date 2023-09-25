import github from '../../assets/svg/github.svg'
import linkedin from '../../assets/svg/linkedin.svg'

export default function Hero() {
  console.log(github)
  return (
    <section className='md:px-4'>
      <div className='sm:p-10 md:pt-20 p-6 flex gap-y-1 flex-col md:sticky md:top-0 w-full'>
      <h3 className='text-base sm:text-4xl font-light sm:leading-10 sm:tracking-wider '>Hi, my name is</h3>
      <h2 className='text-2xl sm:text-4xl text-accent font-bold'>Harry Holubiev</h2>
      <h2 className='text-2xl sm:text-4xl text-primary font-light'>I am a <span className='text-accent font-bold'>Frontend Developer</span></h2>
      <div className='flex gap-2 mt-2'>
        <img src={github} className='w-8 h-8' alt="Github Link" />
        <img src={linkedin} className='w-8 h-8' alt="LinkedIn Link" />
      </div>
      <div className='flex gap-2 justify-center sm:self-start mt-8'>
        <button className='p-2 sm:flex-auto sm:p-2.5 sm:text-sm rounded-full bg-accent font-light flex-1 lg:text-lg text-primary mt-4'>Download CV</button>
        <button className='p-2 sm:flex-auto sm:p-2.5 sm:text-sm rounded-full bg-accent font-light flex-1 lg:text-lg text-primary mt-4'>Contact Me</button>
      </div>
      </div>
    </section>
  )
}
