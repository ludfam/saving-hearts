import Button from '@/components/button'
import Card from '@/components/card'
import Eventcard from '@/components/eventcard'
import Navbar from '@/components/navbar'
import { aims, cards } from '@/utils/data'
import Image from 'next/image'


export default function Home() {


  return (
    <main>
     <section className='w-full h-auto bg-[url("/assets/map.svg")] bg-cover bg-no-repeat container'>
        <div className='text-center flex flex-col lg:text-left lg:flex-row justify-between md:px-20 font-raleway'>
      <div className='flex items-center lg:items-start flex-col gap-5 mt-20  justify-center'>
            <h1 className='text-3xl  md:text-6xl font-bold lg:leading-[70px]'>Every life saved is a world transformed.</h1>
            <p className='text-lg text-grey font-poppins '>"Saving one life may not change the world, but for that one person, 
              the world changes forever."</p>

              <Button title="Donate" />
      </div>

      <div className='flex'>
            <img className='mt-10 lg:mt-0 xl:w-[1100px]' src='assets/hero2.png' />
      </div>
    </div>
     </section>

      <section className='bg-[#F5F5F5] px-16 lg:px-20 py-10'>
        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>What We Do</h1>
          <h1 className='w-[250px] font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px]'>We are here to help the helpless</h1>
        </div>
        <div className='w-full flex flex-col gap-5 lg:flex-row justify-center lg:gap-14 mt-10'>
           {
            aims.map((aim,index)=>(
              <div className='lg:w-[240px] text-center flex flex-col gap-4'key={index}>
                <p className="text-primaryy m-auto text-4xl" >{aim.icon}</p>  
                <h1 className='lg:text-2xl font-semibold text-gray-800'>{aim.title}</h1>
                <p className='w-[240px] m-auto font-poppins text-sm leading-relaxed text-gray-400'>{aim.text}</p>
              </div>
            ))
           }
          
        </div>
     </section>

      <section className='container'>

        <div className='grid lg:grid-cols-2 gap-10 lg:px-20 lg:gap-1 h-auto py-10'>

          <div className='text-center lg:text-left font-raleway lg:w-[90%] flex flex-col justify-center items-center lg:justify-start lg:items-start m-auto'>
            <h1 className='text-primaryy font-semibold text-lg pt-10 '>Who Are We</h1>
            <h1 className='text-3xl font-raleway lg:text-5xl font-semibold lg:leading-[60px]'>A Little About Us</h1>
            <p className='font-poppins text-sm leading-loose text-gray-500 lg:w-[500px] my-5'>Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. 
              Consectetur praesent morbi lobortis dolor lacus nascetur aliquam. 
              Eget sodales ipsum ullamcorper amet suspendisse consequat. Eu pulvinar eget bibendum velit. 
              Amet nulla sed malesuada morbi mauris sit auctor pharetra a. Aliquet eget pharetra viverra eget 
              feugiat nulla posuere nunc. Interdum purus commodo enim eget ipsum sem est viverra odio.</p>

              <Button title='Learn More'/>
        </div>

        <div className=' flex-shrink-0 w-full h-full'>
          <img className='w-full h-full' src='assets/about.png' />
        </div>
        </div>

    </section>

      <section className='container px-10 lg:px-24'>
        
        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>What We Do</h1>
          <h1 className='w-[250px] font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px]'>Latest Cause</h1>
        </div>
        <div className="flex flex-col gap-20 lg:flex-row lg:justify-between lg:bg-[url('/assets/shade.png')] bg-cover bg-no-repeat h-auto">
            {
              cards.map((card,index)=>(
                
                    <Card key={index}
                    image={card.image}
                    title={card.title}
                    text={card.text}
                     />
                
              ))
            }
        </div>
        
    </section>

      <section className='bg-[#F5F5F5]'>
        <div className='lg:px-24 py-16 px-10 container '>
        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>What We Do</h1>
          <h1 className='w-[250px] font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px]'>UpComing Events</h1>
        </div>

        <div className='flex justify-between'>

          <div className='flex flex-col gap-5 mt-7'>
            <Eventcard />
            <Eventcard />
            
           
          </div>

            <div className='flex flex-col justify-center w-[28%]  bg-[url("/assets/volunteer.png")] bg-cover bg-no-repeat  py-16 px-10 '>
              <h1 className='text-5xl font-raleway font-semibold gap-4 text-primaryy backdrop-blur-sm'>Volunteer<span className='text-5xl text-white '><br></br> To Help</span></h1>
              <p className='font-poppins text-sm leading-loose text-white  my-5'>Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra.
              </p>
          <Button title='Volunteer Now' />
          </div>

         
          
        </div>
        </div>
    </section>
   </main>
  )
}
