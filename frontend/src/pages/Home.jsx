import React, { useContext } from 'react';
import Nav from '../Component/Nav';
import Card from '../Component/Card';
import { listingDataContext } from '../Context/ListingContext';

function Home() {
  const { newListData } = useContext(listingDataContext);

  return (
    <div className='min-h-screen bg-[#f9f9f9]'>
      {/* Navbar */}
      <Nav />

      {/* Listings Grid */}
      <section className='w-full px-4 md:px-10 mt-[250px] md:mt-[180px]'>
        <div className='flex flex-wrap justify-center gap-6'>
          {newListData.length > 0 ? (
            newListData.map((list) => (
              <Card
                key={list._id}
                title={list.title}
                landMark={list.landMark}
                city={list.city}
                image1={list.image1}
                image2={list.image2}
                image3={list.image3}
                rent={list.rent}
                id={list._id}
                ratings={list.ratings}
                isBooked={list.isBooked}
                host={list.host}
              />
            ))
          ) : (
            <p className='text-gray-500 text-lg'>No properties found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
