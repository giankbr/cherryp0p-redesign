'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect } from 'react';

export default function LineupPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Animate title and subtitle
      gsap.fromTo(
        '.lineup-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.lineup-title',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.lineup-subtitle',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: '.lineup-subtitle',
            start: 'top 80%',
          },
        }
      );

      // Animate day tabs
      gsap.fromTo(
        '.day-tab',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.day-tabs',
            start: 'top 80%',
          },
        }
      );

      // Animate artist cards
      gsap.fromTo(
        '.artist-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.artist-grid',
            start: 'top 80%',
          },
        }
      );
    }
  }, []);
  const days = [
    { day: 'DAY 1', date: '15', month: 'AUG' },
    { day: 'DAY 2', date: '16', month: 'AUG' },
    { day: 'DAY 3', date: '17', month: 'AUG' },
  ];

  const day1Artists = [
    { name: 'HINDIA', time: '21:30', stage: 'Main Stage', image: '/placeholder.svg', isFeatured: true },
    { name: 'KUNTO AJI', time: '18:00', stage: 'Main Stage', image: '/placeholder.svg' },
    { name: 'BARASUARA', time: '19:00', stage: 'Main Stage', image: '/placeholder.svg' },
  ];

  const day2Artists = [
    { name: 'ISYANA SARASVATI', time: '21:00', stage: 'Main Stage', image: '/placeholder.svg' },
    { name: 'EFEK RUMAH KACA', time: '20:00', stage: 'Main Stage', image: '/placeholder.svg' },
    { name: 'LOMBA SIHIR', time: '17:00', stage: 'Main Stage', image: '/placeholder.svg' },
  ];

  const day3Artists = [
    { name: 'FEAST', time: '19:30', stage: 'Main Stage', image: '/placeholder.svg', isFeatured: true },
    { name: 'DANILLA', time: '18:30', stage: 'Main Stage', image: '/placeholder.svg' },
  ];

  const getArtistsForDay = (dayIndex: number) => {
    switch (dayIndex) {
      case 0:
        return day1Artists;
      case 1:
        return day2Artists;
      case 2:
        return day3Artists;
      default:
        return day1Artists;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h1 className="lineup-title text-6xl md:text-8xl font-bold mb-4">
                LINE<span className="text-primary">UP</span>
              </h1>
              <p className="lineup-subtitle text-xl text-muted-foreground max-w-3xl">Musisi terbaik Indonesia akan tampil di Main Stage Cherrypop Festival 2025.</p>
            </div>

            {/* Stage Info */}
            <div className="mb-16 border border-primary p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">MAIN STAGE</h2>
                  <p className="text-muted-foreground">Panggung utama Cherrypop Festival 2025</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-block border border-border px-4 py-2">
                    <p className="text-sm text-muted-foreground">KAPASITAS</p>
                    <p className="text-xl font-bold">10,000 ORANG</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day Tabs */}
            <div className="mb-12 day-tabs">
              <div className="grid grid-cols-3 gap-px bg-border">
                {days.map((day, index) => (
                  <a key={index} href={`#day-${index + 1}`} className="day-tab bg-background p-6 text-center hover:bg-accent/5 transition-colors">
                    <p className="text-primary text-sm mb-1">{day.day}</p>
                    <h3 className="text-3xl font-bold">
                      {day.date} {day.month}
                    </h3>
                  </a>
                ))}
              </div>
            </div>

            {/* Day Lineups */}
            {days.map((day, dayIndex) => (
              <div key={dayIndex} id={`day-${dayIndex + 1}`} className="mb-16">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold mb-2">{day.day}</h2>
                  <p className="text-muted-foreground">
                    {day.date} {day.month} 2025
                  </p>
                </div>

                <div className="artist-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getArtistsForDay(dayIndex).map((artist, artistIndex) => (
                    <div
                      key={artistIndex}
                      className={`artist-card relative overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 ${artist.isFeatured ? 'col-span-2 row-span-2' : ''}`}
                    >
                      <div className="relative aspect-square">
                        <Image src={artist.image} alt={artist.name} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{artist.name}</h3>
                          <div className="flex flex-col gap-2">
                            <p className="text-white/80">{artist.stage}</p>
                            <p className="text-xl font-bold text-primary">{artist.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="mt-16 p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4">Important Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-2">Gates Open</h4>
                  <p className="text-muted-foreground">13:00 WIB each day</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">First Performance</h4>
                  <p className="text-muted-foreground">14:00 WIB each day</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Last Performance</h4>
                  <p className="text-muted-foreground">22:00 WIB each day</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Venue</h4>
                  <p className="text-muted-foreground">Lapangan Kenari, Yogyakarta</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
