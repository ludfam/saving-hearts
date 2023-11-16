import SimpleSlider from '@/components/slider';
import React from 'react'



const Page = () => {

  return (
    <div>
          <section className='bg-[url("/assets/aboutpg.png")] bg-cover h-[50vh] lg:bg-cover bg-no-repeat lg:h-[80vh] flex justify-center items-center'>
              <div className='font-raleway text-center'>
                  <h1 className='text-primaryy font-semibold text-lg pt-5'>Who Are We</h1>
                  <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-white'>About Us</h1>
              </div>
              
        </section>

          <section className='px-10 py-5 container-custom flex flex-col lg:flex-row lg:gap-10'>
           
              <div className=''>
                <img src='/assets/about1&2.png' alt="" />

              </div>
              <div >
                  <div className='py-5 lg:py-0 font-raleway text-center lg:text-right'>
                      <h1 className='text-primaryy font-semibold text-lg pt-5 '>Who Are We</h1>
                      <h1 className=' font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>About Us</h1>
                  </div>

                  <p className=' text-center lg:text-right font-poppins text-sm leading-loose text-gray-500 lg:w-[500px] my-5'>Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor
                      lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet suspendisse consequat. Eu pulvinar eget bibendum velit. Amet nulla sed malesuada morbi
                      mauris sit auctor pharetra a.
                      Aliquet eget pharetra viverra eget feugiat nulla posuere nunc. Interdum purus commodo enim eget ipsum sem est viverra odio
                      Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor
                      lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet suspendisse consequat. Eu pulvinar eget bibendum velit. Amet nulla sed
                      malesuada morbi mauris sit auctor pharetra a. Aliquet eget pharetra viverra eget feugiat nulla posuere nunc. Interdum purus commodo
                      enim eget ipsum sem est viverra odio..</p>

              </div>
        </section>

          <section className='px-10 py-5 lg:container-custom h-auto bg-[#F8C181]'>
              <h1 className='text-center text-white font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>Partners</h1>
        </section>

          <section className='px-10 py-5 lg:container-custom flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-around'>
              <div className='m-auto w-[300px] h-auto  lg:w-[450px] lg:h-[467px]  rounded-3xl shadow-2xl border-2 border-primaryy py-16 px-9 flex flex-col gap-6'>
                  <h1 className=' text-center font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>Our<span className='text-primaryy'> Mission</span></h1>
                  <p className='text-center font-poppins text-sm leading-loose text-gray-500 my-5'>Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor
                      lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet suspendisse consequat. Eu pulvinar eget bibendum velit. Amet nulla sed malesuada morbi
                      mauris sit auctor pharetra a.
                     </p>


            </div>

              <div className='w-[300px] h-auto lg:w-[450px] lg:h-[467px] rounded-3xl shadow-2xl border-2 border-primaryy py-16 px-9 flex flex-col gap-6 m-auto'>
                  <h1 className=' text-center font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>Our<span className='text-primaryy'> Vision</span></h1>
                  <p className='text-center font-poppins text-sm leading-loose text-gray-500 my-5'>Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor
                      lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet suspendisse consequat. Eu pulvinar eget bibendum velit. Amet nulla sed malesuada morbi
                      mauris sit auctor pharetra a.
                  </p>


              </div>
            
        </section>

          <section className='px-7 py-5 bg-[#40444D] lg:container-custom h-auto'>
             <SimpleSlider />
            
        </section>
    </div>
  )
}

export default Page