const destinations = [
    {
      name: "Cancún",
      subtitle: "Beach energy and spring break vibes",
      image:
        "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Miami",
      subtitle: "Style, nightlife, and weekend escapes",
      image:
        "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Puerto Rico",
      subtitle: "Island views, culture, and unforgettable scenery",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  
  export default function DestinationShowcase() {
    return (
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Top Destinations
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Explore places students actually want to go
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Built around popular student trips, group travel, and memorable experiences.
            </p>
          </div>
  
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10"
              >
                <div
                  className="h-[420px] bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-bold">{destination.name}</h3>
                  <p className="mt-2 max-w-xs text-slate-300">
                    {destination.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }