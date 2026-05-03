import { Link } from "wouter";

const logoUrl = "/logo.png";
const upmLogo = "/upm-logo.png";

const CONFERENCE_CHAIRS = [
  {
    name: "Prof. Dr. Ahmad Hazuwan Hamid",
    role: "Conference Chair",
    affiliation: "Universiti Putra Malaysia",
    department: "Department of Environment",
    country: "Malaysia",
  },
  {
    name: "Assoc. Prof. Dr. Siti Noor Syuhada Muhammad Rashid",
    role: "Co-Chair",
    affiliation: "Universiti Putra Malaysia",
    department: "Faculty of Environmental Studies",
    country: "Malaysia",
  },
];

const COMMITTEES = [
  {
    title: "Scientific Committee",
    members: [
      { name: "Prof. Dr. Nor Azam Ramli", affiliation: "Universiti Sains Malaysia", country: "Malaysia" },
      { name: "Prof. Dr. Mohd Talib Latif", affiliation: "Universiti Kebangsaan Malaysia", country: "Malaysia" },
      { name: "Dr. Thongchai Kanabkaew", affiliation: "Walailak University", country: "Thailand" },
      { name: "Dr. Sirinart Chio-srichan", affiliation: "Asian Institute of Technology", country: "Thailand" },
      { name: "Dr. Nguyen Thi Kim Oanh", affiliation: "Asian Institute of Technology", country: "Thailand" },
      { name: "Prof. Kazi Bayzid Kabir", affiliation: "Bangladesh University of Engineering & Technology", country: "Bangladesh" },
    ],
  },
  {
    title: "Organising Committee",
    members: [
      { name: "Dr. Md. Firoz Khan", affiliation: "Universiti Malaya", country: "Malaysia" },
      { name: "Dr. Nurul Amalin Fatihah Kamarul Zaman", affiliation: "Universiti Putra Malaysia", country: "Malaysia" },
      { name: "Dr. Kaveh Ostad Ali Askari", affiliation: "Universiti Putra Malaysia", country: "Malaysia" },
      { name: "Dr. Mohd Shahrul Mohd Nadzir", affiliation: "Universiti Kebangsaan Malaysia", country: "Malaysia" },
      { name: "Ms. Noor Farahin Adnan", affiliation: "Universiti Putra Malaysia", country: "Malaysia" },
      { name: "Ms. Siti Hazirah Azeman", affiliation: "Universiti Putra Malaysia", country: "Malaysia" },
    ],
  },
  {
    title: "Technical Committee",
    members: [
      { name: "Dr. Wan Nurdiyana Wan Mansor", affiliation: "Universiti Putra Malaysia", country: "Malaysia" },
      { name: "Dr. Murnira Othman", affiliation: "Universiti Putra Malaysia", country: "Malaysia" },
      { name: "Dr. Haris Hafizal Abd Hamid", affiliation: "Universiti Kebangsaan Malaysia", country: "Malaysia" },
      { name: "Ir. Ahmad Faris Ismail", affiliation: "Department of Environment Malaysia", country: "Malaysia" },
    ],
  },
  {
    title: "Secretariat",
    members: [
      { name: "Ms. Nurul Hidayah Ahmad", affiliation: "Universiti Putra Malaysia", country: "Malaysia" },
      { name: "Ms. Izzah Nabihah Rahmat", affiliation: "Universiti Putra Malaysia", country: "Malaysia" },
      { name: "Mr. Muhammad Aiman Mohd Ghazali", affiliation: "Universiti Putra Malaysia", country: "Malaysia" },
    ],
  },
];

const HOST_INSTITUTIONS = [
  {
    name: "Universiti Putra Malaysia",
    logo: upmLogo,
    url: "https://www.upm.edu.my",
    desc: "A leading research university in Malaysia, committed to advancing knowledge in agriculture, engineering, environmental sciences, and beyond.",
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.replace(/^(Prof\.|Dr\.|Assoc\.|Mr\.|Ms\.|Ir\.)\s*/gi, "").trim().split(" ");
  return (
    <span>
      {parts
        .filter((p) => p.length > 1)
        .slice(0, 2)
        .map((p) => p[0])
        .join("")
        .toUpperCase()}
    </span>
  );
}

const AVATAR_GRADIENTS = [
  "from-cyan-500 to-teal-600",
  "from-emerald-500 to-green-600",
  "from-sky-500 to-blue-600",
  "from-teal-500 to-emerald-600",
  "from-blue-500 to-cyan-600",
  "from-green-500 to-teal-600",
];

export default function Organizer() {
  return (
    <div className="min-h-screen gradient-bg">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-cyan-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Particles Without Borders" className="h-12 w-auto" />
            <div className="hidden sm:block leading-tight">
              <div className="font-bold text-sm gradient-text">Particles Without Borders</div>
              <div className="text-[10px] text-muted-foreground tracking-wide uppercase">KLCC · 16 Nov 2026</div>
            </div>
          </Link>
          <Link href="/" className="px-4 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-emerald-50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">The Team</div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-5">
            Meet the <span className="gradient-text">Organisers</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Particles Without Borders 2026 is brought to you by an international team of researchers, academics and industry professionals committed to advancing air quality science.
          </p>
        </div>
      </section>

      {/* Host Institution */}
      <section className="py-14 px-4 sm:px-6 bg-white border-y border-cyan-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Host Institution</div>
          <div className="grid md:grid-cols-2 gap-8">
            {HOST_INSTITUTIONS.map((inst) => (
              <a
                key={inst.name}
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-6 p-7 rounded-2xl border-2 border-cyan-100 bg-gradient-to-br from-cyan-50/60 to-emerald-50/40 shadow-sm hover:shadow-xl hover:border-primary hover:-translate-y-0.5 transition-all"
              >
                <div className="w-24 h-24 rounded-xl bg-white border border-cyan-100 shadow flex items-center justify-center p-2 flex-shrink-0">
                  <img src={inst.logo} alt={inst.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <div className="font-bold text-xl mb-1">{inst.name}</div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-primary mb-2">Host University</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{inst.desc}</p>
                  <div className="mt-3 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit website →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Chairs */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Leadership</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Conference Chairs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONFERENCE_CHAIRS.map((chair, i) => (
              <div key={i} className="p-7 rounded-2xl bg-white border-2 border-primary/20 shadow-sm flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]} flex items-center justify-center text-white text-xl font-bold shadow`}>
                  <Initials name={chair.name} />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">{chair.role}</div>
                  <div className="font-bold text-lg leading-snug">{chair.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{chair.affiliation}</div>
                  {chair.department && <div className="text-xs text-muted-foreground">{chair.department}</div>}
                  <div className="text-xs font-semibold text-primary mt-2">{chair.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      {COMMITTEES.map((committee, ci) => (
        <section key={ci} className={`py-16 px-4 sm:px-6 ${ci % 2 === 1 ? "bg-white" : ""}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Committee</div>
            <h2 className="text-3xl font-bold mb-8">{committee.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {committee.members.map((m, mi) => (
                <div key={mi} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-cyan-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${AVATAR_GRADIENTS[(ci * 7 + mi) % AVATAR_GRADIENTS.length]} flex items-center justify-center text-white text-sm font-bold shadow flex-shrink-0`}>
                    <Initials name={m.name} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm leading-snug">{m.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{m.affiliation}</div>
                    <div className="text-xs font-semibold text-primary mt-1">{m.country}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-primary to-secondary text-white shadow-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Want to join the committee?</h2>
          <p className="opacity-90 mb-6">We welcome scientists and practitioners from across the globe to contribute as reviewers or technical committee members.</p>
          <a
            href="mailto:secretariat@particleswithoutborders.org?subject=Committee%20Membership%20Enquiry"
            className="inline-block px-8 py-3.5 rounded-full bg-white text-primary font-semibold shadow-xl hover:-translate-y-0.5 transition"
          >
            Contact the Secretariat
          </a>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-slate-900 via-cyan-950 to-emerald-950 text-white py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-cyan-200/70">
          © 2026 Particles Without Borders · KLCC, Kuala Lumpur
        </div>
      </footer>
    </div>
  );
}
