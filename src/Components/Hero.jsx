import React from 'react'
import { MapPin, Clock, Search} from 'lucide-react'

const Hero = () => {
  return (
    <section className='bg-gradient-to-br from-blue-500 to-blue-700 text-white sm:py-28 py-16 text-center'>
        <h1 className='text-4xl sm:tet-5xl font-bold mb-4'> 
            Find Your Perfect <span className='text-yellow-400'>Rental Car</span></h1>
            <p className='text-lg sm:text-xl mb-12 text-gray-200'>Discover amazing deals on quality vehicles, Book now and drive away with confidecne</p>
        <div className='bg-white rounded-x1 shadow-lg p-4 sm:p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-4 items-end text-black'>
            <label ><MapPin/><span>Pickup Location</span></label>
            <select>
                <option>Select city</option>
                <option>New Delhi</option>
                <option>Gurugram</option>
                <option>Mumbai</option>

            </select>
        </div>
    </section>
  )
}

export default Hero
