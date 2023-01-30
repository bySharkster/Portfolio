import React from 'react'
import Link from 'next/link'
import { GoBack } from '@/components/GoBack';

export default function ComingSoon ()  {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/hHpVwKQ/desktop-1920x1080.png")` }}>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-medium text-center mb-4 text-white">Coming Soon</h1>
      <p className="text-lg text-center mb-8 text-white">The website is under development. I&apos;ll be launching soon!</p>
      <GoBack></GoBack>
      </div></div>
  );
}
