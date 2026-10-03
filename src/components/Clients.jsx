import { motion } from "framer-motion";

const clients = [
  {
    name: "Thinketh",
    handle: "@Thinketh-",
    platform: "YouTube",
    followers: "2.86M",
    views: "3.2M",
    image:
      "https://yt3.googleusercontent.com/3m3fy0riruXTWF7T-wpOicMBz0XCQZEEDQVPTGKtu-6NmRJDEUpnR1sosIsHLtQlpq7tvrcf4JQ=s160-c-k-c0x00ffffff-no-rj",
    video: "https://www.youtube.com/shorts/qIwoSpOtJak",
    profile: "https://www.youtube.com/@Thinketh-",
  },
  {
    name: "Divyansh Bhardwaj",
    handle: "@divyanshbhardwaj.j",
    platform: "YouTube",
    followers: "155K",
    views: "3.2M",
    image:
      "https://yt3.googleusercontent.com/OsMgwfkPoVYGeyeSM34nQk2PbbJmbTjJueBO2AhDCY0tQoS5-tWakIAi-o5ngmMiEmZ9HP24=s160-c-k-c0x00ffffff-no-rj",
    video: "https://www.youtube.com/shorts/Xj6Ua-We71M",
    profile: "https://www.youtube.com/@divyanshbhardwaj.j",
  },

  {
    name: "DBMC",
    handle: "@dbmc.in",
    platform: "Instagram",
    followers: "6,766",
    views: "860",
    image:
      "https://scontent.cdninstagram.com/v/t51.75761-19/500294409_17909983920139393_7473500468833272770_n.jpg?_nc_cat=102&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=heDWZt8c4oQQ7kNvwEZLAC-&_nc_oc=AdoH4byk2nudNyv9ERWMONFRFae0hpBFb4QR0FzYb8TCUy07o-8IKh7K7Zig5z5bMpI&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=fvJINY_08SqZlJ111v2eYA&_nc_ss=7b6a8&oh=00_AQMB0S-FyaseQw3J3LHTaFKGzQc-42gDcoMmiwpN6VcEmg&oe=6AC69DF5",
    video: "https://www.instagram.com/reel/Dd_PUjdSmRR/",
    profile: "https://www.instagram.com/dbmc.in/",
  },
  {
    name: "Travel Salahkaar",
    handle: "@travelsalahkar",
    platform: "Instagram",
    followers: "696",
    views: "233",
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-19/516271401_17972359766907036_8167572591631961681_n.jpg?_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=Og9kFYacbqYQ7kNvwEZyc3_&_nc_oc=AdoeJ3PJ166JyTlkquuHLu1sSyN_t6JGxv-12aVZCX8cSwMBTaqzNPvEtKHDS2edMJw&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=OkGkZI5WWVvXTPgYS-AoAQ&_nc_ss=7b6a8&oh=00_AQPKWh-PvoX8qbYszxP4Ae9_xEkWTBO042n5_hSmlI85Pw&oe=6AC688D7",
    video: "https://www.instagram.com/reels/DcS2U-bs_L5/",
    profile: "https://www.instagram.com/",
  },
  {
    name: "FastEMI Official",
    handle: "@fastemiofficial",
    platform: "Instagram",
    followers: "161",
    views: "551",
    image:
      "https://scontent.cdninstagram.com/v/t51.82787-19/731137724_18117071995718750_8112339475503266745_n.jpg?_nc_cat=109&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=ZyrCfmOxO2IQ7kNvwEkMwUR&_nc_oc=Adoer1znzwKBbTVE-4m0KGYiX4inTTrk4dfq-jpyAxEu5VeNU-J2DpyyRMGywRG4G-M&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=K7Gwa_dI1_9RQmx8rXG3Ow&_nc_ss=7b6a8&oh=00_AQNJieYg3_J2r9cv4kOB3y6K6QfqO-iObqmg4YNxdsA6RQ&oe=6AC68346",
    video: "https://www.instagram.com/reel/DcLHVJ2I_hz/",
    profile: "https://www.instagram.com/",
  },
  {
    name: "Stable Money",
    handle: "@Stable_Money",
    platform: "YouTube",
    followers: "7.59K",
    views: "21.03M",
    image:
      "https://yt3.googleusercontent.com/you8-c_SazsXx7XaNVnwMOXAG4ftUdT8wfjS0QSZGDUww32z9gdo2Sy-nljiZvAkw4cXGgz6=s160-c-k-c0x00ffffff-no-rj",
    video: "https://youtu.be/CGGPGxSwghk",
    profile: "https://www.youtube.com/@Stable_Money",
  },
  {
    name: "Tan Man Dhan",
    handle: "@tanmandhanse",
    platform: "YouTube",
    followers: "262K",
    views: "4K",
    image:
      "https://yt3.googleusercontent.com/bfidJ44fVVf97wMh9vOY1fg74zRejI5ZDNtN1xDnG9SivGztpYy9SdcbUpxYwP771O6hjObA=s160-c-k-c0x00ffffff-no-rj",
    video: "https://www.youtube.com/shorts/zdlLqL5Ln6E",
    profile: "https://www.youtube.com/@tanmandhanse",
  },
];

const stats = [
  {
    value: "300+",
    label: "Videos Delivered",
  },
  {
    value: "60M+",
    label: "Views Generated",
  },
];

function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] px-5 py-28 text-white md:px-8 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="grid gap-8 md:grid-cols-12"
        >
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            Clients
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <h2 className="max-w-4xl text-4xl leading-[0.95] tracking-[-0.045em] md:text-6xl lg:text-7xl">
              Creators and brands
              <span className="text-white/30"> I&apos;ve worked with.</span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              Short-form edits built to hold attention, tell stories and
              generate reach.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="bg-[#0a0a0a] px-6 py-10 md:px-10 md:py-14"
            >
              <p className="text-6xl font-medium tracking-[-0.06em] md:text-8xl">
                {stat.value}
              </p>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <div className="mt-20">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            Clients
            </p>

            <span className="font-mono text-[10px] text-white/20">07</span>
          </div>

          <div className="border-t border-white/10">
            {clients.map((client, index) => (
              <motion.a
                key={client.name}
                href={client.video}
                target="_blank"
                rel="noreferrer"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                className="group block border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.025] md:py-9"
              >
                <div className="grid gap-6 md:grid-cols-[60px_1fr_auto] md:items-center">
                  {/* Number */}
                  <span className="font-mono text-[10px] text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Client */}
                  <div className="flex items-center gap-5">
                    {/* Client Image */}
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/[0.035] transition-all duration-300 group-hover:border-white/25">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Name */}
                    <div className="min-w-0">
                      <h3 className="text-xl tracking-[-0.03em] text-white md:text-3xl">
                        {client.name}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-white/30">
                          {client.handle}
                        </span>

                        <span className="text-white/15">/</span>

                        <span className="font-mono text-[9px] uppercase tracking-wider text-white/30">
                          {client.platform}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-8 md:flex md:items-center md:gap-10">
                    <div>
                      <p className="font-mono text-base text-white md:text-lg">
                        {client.followers}
                      </p>

                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
                        Followers
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-base text-white md:text-lg">
                        {client.views}
                      </p>

                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
                        Featured Views
                      </p>
                    </div>

                    <span className="hidden text-xl text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white md:block">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default Clients;
