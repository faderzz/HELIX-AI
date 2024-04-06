import React from 'react'
import Navbar from '~/components/navbar'
import ProfileCard from '~/components/profile';

export default function profile(props) {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <div className="container  gap-12 px-4 py-16">
        <Navbar />
        
      </div>
      <div className="flex justify-center items-center">
        <ProfileCard/>
      </div>
    </main>
  );
}
