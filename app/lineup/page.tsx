import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import Image from 'next/image';

export default function LineupPage() {
  const days = [
    { day: 'DAY 1', date: '15', month: 'AUG' },
    { day: 'DAY 2', date: '16', month: 'AUG' },
    { day: 'DAY 3', date: '17', month: 'AUG' },
  ];

  const day1Artists = [
    { name: 'HINDIA', time: '20:00', stage: 'Main Stage' },
    { name: 'EFEK RUMAH KACA', time: '18:30', stage: 'Main Stage' },
    { name: 'BARASUARA', time: '17:00', stage: 'Main Stage' },
    { name: 'SHEILA ON 7', time: '15:30', stage: 'Main Stage' },
    { name: 'PETERPAN', time: '14:00', stage: 'Main Stage' },
  ];

  const day2Artists = [
    { name: 'NOAH', time: '20:00', stage: 'Main Stage' },
    { name: 'SLANK', time: '18:30', stage: 'Main Stage' },
    { name: 'GIGI', time: '17:00', stage: 'Main Stage' },
    { name: 'DEWA 19', time: '15:30', stage: 'Main Stage' },
    { name: 'PADI', time: '14:00', stage: 'Main Stage' },
  ];

  const day3Artists = [
    { name: 'COLDPLAY', time: '20:00', stage: 'Main Stage' },
    { name: 'U2', time: '18:30', stage: 'Main Stage' },
    { name: 'THE BEATLES', time: '17:00', stage: 'Main Stage' },
    { name: 'QUEEN', time: '15:30', stage: 'Main Stage' },
    { name: 'LED ZEPPELIN', time: '14:00', stage: 'Main Stage' },
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
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                LINE<span className="text-primary">UP</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">Musisi terbaik Indonesia akan tampil di Main Stage Cherrypop Festival 2025.</p>
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
            <div className="mb-12">
              <div className="grid grid-cols-2 gap-px bg-border">
                {days.map((day, index) => (
                  <a key={index} href={`#day-${index + 1}`} className="bg-background p-6 text-center hover:bg-accent/5 transition-colors">
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
                  <p className="text-muted-foreground">{day.date} {day.month} 2025</p>
                </div>

                <div className="space-y-4">
                  {getArtistsForDay(dayIndex).map((artist, artistIndex) => (
                    <div key={artistIndex} className="flex items-center justify-between p-6 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{artistIndex + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{artist.name}</h3>
                          <p className="text-muted-foreground">{artist.stage}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{artist.time}</p>
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
                  <p className="text-muted-foreground">Jogja Expo Center, Yogyakarta</p>
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
