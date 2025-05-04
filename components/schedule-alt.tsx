export function ScheduleAlt() {
  const days = [
    {
      date: "15",
      month: "AUGUST",
      year: "2025",
      day: "FRIDAY",
      events: [
        { time: "15:00", artist: "Opening Ceremony", stage: "Main Stage" },
        { time: "16:00", artist: "Local Band Showcase", stage: "Second Stage" },
        { time: "17:00", artist: "Kunto Aji", stage: "Main Stage" },
        { time: "19:00", artist: "Barasuara", stage: "Main Stage" },
        { time: "20:30", artist: "Hindia", stage: "Main Stage" },
        { time: "22:00", artist: "DJ Set", stage: "Electronic Stage" },
      ],
    },
    {
      date: "16",
      month: "AUGUST",
      year: "2025",
      day: "SATURDAY",
      events: [
        { time: "15:00", artist: "Poetry Reading", stage: "Art Space" },
        { time: "16:00", artist: "Indie Showcase", stage: "Second Stage" },
        { time: "17:00", artist: "Lomba Sihir", stage: "Main Stage" },
        { time: "19:00", artist: "Efek Rumah Kaca", stage: "Main Stage" },
        { time: "20:30", artist: "Isyana Sarasvati", stage: "Main Stage" },
        { time: "22:00", artist: "Electronic Showcase", stage: "Electronic Stage" },
      ],
    },
    {
      date: "17",
      month: "AUGUST",
      year: "2025",
      day: "SUNDAY",
      events: [
        { time: "15:00", artist: "Community Discussion", stage: "Art Space" },
        { time: "16:00", artist: "Emerging Artists", stage: "Second Stage" },
        { time: "17:00", artist: "Danilla", stage: "Main Stage" },
        { time: "19:00", artist: "Feast", stage: "Main Stage" },
        { time: "20:30", artist: "Closing Party", stage: "Main Stage" },
      ],
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary text-lg mb-2">SCHEDULE</h2>
          <h3 className="text-4xl md:text-6xl font-bold">PROGRAM</h3>
        </div>

        <div className="space-y-16">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <div className="sticky top-24">
                  <h3 className="text-6xl md:text-8xl font-bold">{day.date}</h3>
                  <p className="text-xl text-primary">{day.month}</p>
                  <p className="text-muted-foreground">{day.day}</p>
                </div>
              </div>
              <div className="md:col-span-9">
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="grid grid-cols-12 gap-4 border-b border-border pb-6">
                      <div className="col-span-2">
                        <p className="text-xl font-mono">{event.time}</p>
                      </div>
                      <div className="col-span-7">
                        <h4 className="text-2xl font-bold">{event.artist}</h4>
                      </div>
                      <div className="col-span-3 text-right">
                        <p className="text-muted-foreground">{event.stage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
