import React from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'

const Banner = () => {
  return (
    <section className="bg-[url('/Header-BG.png')] bg-cover bg-center pt-35 min-h-screen relative">
          <div className="container flex ">

            {/* Header Content */}
            <div className='max-w-2/3'>
                <h1 className='font-bold text-6xl text-primary'>Receive funds faster.<br/> Manage money smarter.</h1>
                <p className='font-secondary text-xl font-semibold pt-5 max-w-[625px] text-primary/60'>A modern payment platform designed to help growing businesses collect, store, and move money with confidence.</p>
                <div className="search-bar bg-[#F1F1F1] flex items-center rounded-md h-fit w-full">
                    <Input placeholder="Enter Your Business Email" />
                      <Button className="rounded-l-none px-4 flex-wrap font-primary font-bold text-xl">
                         Get Started
                      </Button>
                </div>
            </div>
            
            {/* Header-card */}
            <div className='max-w-1/3'></div>
          </div>
       </section>
  )
}

export default Banner