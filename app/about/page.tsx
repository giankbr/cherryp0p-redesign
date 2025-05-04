import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'ARIAN ARIFIN',
      role: 'Festival Director',
      image: '/placeholder.svg?height=400&width=400',
    },
    {
      name: 'FARIZ JABBA',
      role: 'Creative Director',
      image: '/placeholder.svg?height=400&width=400',
    },
    {
      name: 'KANYA KUSUMA',
      role: 'Production Manager',
      image: '/placeholder.svg?height=400&width=400',
    },
    {
      name: 'PETRA SIHOMBING',
      role: 'Music Curator',
      image: '/placeholder.svg?height=400&width=400',
    },
  ];

  const milestones = [
    {
      year: '2018',
      title: 'CHERRYPOP BEGINS',
      description: 'Festival pertama digelar dengan skala kecil di Yogyakarta dengan 15 musisi lokal.',
    },
    {
      year: '2019',
      title: 'EXPANSION',
      description: 'Cherrypop berkembang dengan menambahkan program seni dan film, menghadirkan 25 musisi.',
    },
    {
      year: '2020',
      title: 'DIGITAL EDITION',
      description: 'Pandemi mengubah format menjadi festival digital dengan streaming live performance.',
    },
    {
      year: '2021',
      title: 'HYBRID FORMAT',
      description: 'Kombinasi event fisik terbatas dan digital streaming dengan kolaborasi lintas disiplin.',
    },
    {
      year: '2022',
      title: 'FULL RETURN',
      description: 'Kembali dengan format penuh, menghadirkan 40 musisi dan seniman dari seluruh Indonesia.',
    },
    {
      year: '2023',
      title: 'INTERNATIONAL ACTS',
      description: 'Pertama kalinya menghadirkan musisi internasional berkolaborasi dengan musisi lokal.',
    },
    {
      year: '2024',
      title: 'MULTI-CITY',
      description: 'Cherrypop mengadakan pre-event di Jakarta, Bandung, dan Surabaya sebelum festival utama.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1 bg-black text-white dark:bg-black dark:text-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image src="/placeholder.svg?height=1080&width=1920" alt="Cherrypop Festival Crowd" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white">
              ABOUT <span className="text-primary">US</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">Cherrypop Festival adalah panggung bagi kreativitas subkultur anak muda Indonesia.</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-primary text-lg mb-2">OUR STORY</h2>
                <h3 className="text-4xl font-bold mb-6 text-white">CHERRYPOP FESTIVAL</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Cherrypop, festival musik tahunan di Yogyakarta yang digagas oleh Swasembada Kreasi, adalah panggung bagi kreativitas subkultur anak muda. Dari musisi hingga pembuat film, dari
                    perupa hingga pegiat kuliner, berbagai disiplin bertemu untuk berkreasi, berdialog, dan berbagi energi.
                  </p>
                  <p>
                    Berawal dari sebuah gig kecil di tahun 2018, Cherrypop berkembang menjadi salah satu festival musik independen terbesar di Indonesia. Dengan semangat DIY (Do It Yourself) dan
                    kolaborasi, festival ini terus tumbuh dan menjadi rumah bagi berbagai ekspresi kreatif.
                  </p>
                  <p>
                    Cherrypop bukan sekadar festival, melainkan ruang untuk membangun narasi dan merayakan semangat kolaborasi. Lebih dari sekadar hiburan, Cherrypop menjadi tempat subkultur anak muda
                    untuk membangun diskursus, menjalin jejaring, dan merayakan keberagaman.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl blur-xl opacity-70"></div>
                <Image src="/placeholder.svg?height=800&width=800" alt="Cherrypop Festival" width={800} height={800} className="rounded-xl relative z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-zinc-900 dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-2 border-primary p-8">
                <h2 className="text-3xl font-bold mb-6 text-white">VISION</h2>
                <p className="text-lg text-gray-300">
                  Menjadi platform yang menghubungkan, menginspirasi, dan memberdayakan komunitas kreatif di Indonesia melalui pengalaman festival yang inklusif dan berkelanjutan.
                </p>
              </div>
              <div className="border-2 border-white p-8">
                <h2 className="text-3xl font-bold mb-6 text-white">MISSION</h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">—</span>
                    <span>Menciptakan ruang yang aman dan inklusif bagi ekspresi kreatif dari berbagai latar belakang dan disiplin.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">—</span>
                    <span>Memfasilitasi kolaborasi antara seniman, musisi, dan kreator untuk mendorong inovasi dan pertukaran ide.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">—</span>
                    <span>Mempromosikan praktik berkelanjutan dalam penyelenggaraan festival dan mendukung ekonomi lokal.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-primary text-lg mb-2">OUR TEAM</h2>
            <h3 className="text-4xl font-bold mb-12 text-white">THE PEOPLE BEHIND CHERRYPOP</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 dark:bg-zinc-800">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-black dark:bg-black p-1">
                  <div className="group">
                    <div className="relative aspect-square overflow-hidden">
                      <Image src={member.image || '/placeholder.svg'} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-gray-400">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 bg-zinc-900 dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-primary text-lg mb-2">MILESTONES</h2>
            <h3 className="text-4xl font-bold mb-12 text-white">OUR JOURNEY</h3>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-3xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  <div className="col-span-10 md:col-span-3">
                    <h4 className="text-xl font-bold text-white">{milestone.title}</h4>
                  </div>
                  <div className="col-span-12 md:col-span-8 md:col-start-5">
                    <p className="text-gray-300">{milestone.description}</p>
                    <div className="mt-4 border-b border-zinc-700 dark:border-zinc-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-primary text-lg mb-2">PARTNERS</h2>
            <h3 className="text-4xl font-bold mb-12 text-white">OUR COLLABORATORS</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-800 h-32 hover:border-primary transition-colors">
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=Partner+${index + 1}`}
                    alt={`Partner ${index + 1}`}
                    width={160}
                    height={80}
                    className="max-h-full w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
