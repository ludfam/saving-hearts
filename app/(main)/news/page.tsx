import React from 'react'
import {
   Tabs, 
   TabsContent, 
   TabsList, 
   TabsTrigger} 
   from "@/components/ui/tabs"


const News = () => {
  return (
    <div>
      <section className='bg-[url("/assets/news.png")] bg-cover h-[50vh] lg:bg-cover bg-no-repeat lg:h-[80vh] flex justify-center items-center'>
        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>What We Do</h1>
          <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-white'>News & Events</h1>
        </div>

      </section>

      {/* <section className='px-10 py-5 max-w-6xl mx-auto'>

      <Tabs defaultValue="account" className=" mx-auto ">
        <TabsList className=''>
          <TabsTrigger className='text-lg w-[200px] ' value="news">News</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>
        <TabsContent value="news">Make changes to your account here.</TabsContent>
        <TabsContent value="events">Change your password here.</TabsContent>
      </Tabs>

      </section> */}
    </div>
  )
}

export default News