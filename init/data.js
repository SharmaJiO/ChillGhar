const users = [
  { username: "arjun_sharma", email: "arjun@example.com" },
  { username: "priya_mehta",  email: "priya@example.com" },
  { username: "rohit_verma",  email: "rohit@example.com" },
  { username: "sneha_gupta",  email: "sneha@example.com" },
  { username: "karan_patel",  email: "karan@example.com" },
];

const listings = [
  // ── Club ──────────────────────────────────────────────────────────────────
  {
    title: "Kitty Su",
    description: "One of Delhi's most iconic nightclubs with world-class DJs and a vibrant dance floor.",
    image: { url: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800", filename: "kitty_su" },
    category: "Club", price: 2500, location: "New Delhi", country: "India",
  },
  {
    title: "Tito's Bar & Club",
    description: "Goa's legendary beach club famous for its energetic nights and beachside vibe.",
    image: { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800", filename: "titos" },
    category: "Club", price: 1800, location: "Baga, Goa", country: "India",
  },
  {
    title: "Social Mumbai",
    description: "A hybrid workspace by day and pulsating club by night in the heart of Mumbai.",
    image: { url: "https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800", filename: "social_mumbai" },
    category: "Club", price: 1500, location: "Mumbai", country: "India",
  },
  {
    title: "The Bfloor",
    description: "Bangalore's underground club scene with cutting-edge electronic music.",
    image: { url: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=800", filename: "bfloor" },
    category: "Club", price: 2000, location: "Bangalore", country: "India",
  },
  {
    title: "Prive Nightclub",
    description: "Kolkata's premier nightclub with top resident DJs and premium cocktails.",
    image: { url: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800", filename: "prive" },
    category: "Club", price: 1200, location: "Kolkata", country: "India",
  },

  // ── Cafe ──────────────────────────────────────────────────────────────────
  {
    title: "Blue Tokai Coffee",
    description: "Specialty single-origin Indian coffees in a cozy, minimalist setting.",
    image: { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800", filename: "blue_tokai" },
    category: "Cafe", price: 400, location: "New Delhi", country: "India",
  },
  {
    title: "Cafe Mondegar",
    description: "Mumbai's iconic Irani cafe with Mario Miranda murals and chilled beer.",
    image: { url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800", filename: "mondegar" },
    category: "Cafe", price: 600, location: "Colaba, Mumbai", country: "India",
  },
  {
    title: "Brahma Brews",
    description: "A quirky cafe in Rishikesh serving filter coffee and Himalayan teas.",
    image: { url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800", filename: "brahma_brews" },
    category: "Cafe", price: 300, location: "Rishikesh", country: "India",
  },
  {
    title: "Third Wave Coffee",
    description: "Modern cafe chain with specialty brews, cold coffees and healthy bites.",
    image: { url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800", filename: "third_wave" },
    category: "Cafe", price: 350, location: "Bangalore", country: "India",
  },
  {
    title: "Flurys",
    description: "Kolkata's heritage Swiss confectionery and tea room since 1927.",
    image: { url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800", filename: "flurys" },
    category: "Cafe", price: 500, location: "Park Street, Kolkata", country: "India",
  },

  // ── Live Music ────────────────────────────────────────────────────────────
  {
    title: "Hard Rock Cafe Delhi",
    description: "Live rock performances every weekend with classic American food and rock memorabilia.",
    image: { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800", filename: "hard_rock_delhi" },
    category: "Live Music", price: 1200, location: "New Delhi", country: "India",
  },
  {
    title: "Blue Frog Mumbai",
    description: "Legendary live music venue hosting indie, jazz and electronic artists.",
    image: { url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800", filename: "blue_frog" },
    category: "Live Music", price: 900, location: "Mumbai", country: "India",
  },
  {
    title: "Windmills Craftworks",
    description: "Bangalore's top craft beer bar with regular live indie music nights.",
    image: { url: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800", filename: "windmills" },
    category: "Live Music", price: 800, location: "Bangalore", country: "India",
  },
  {
    title: "Someplace Else",
    description: "Kolkata's iconic live music bar running nightly performances since 1996.",
    image: { url: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?w=800", filename: "someplace_else" },
    category: "Live Music", price: 700, location: "Kolkata", country: "India",
  },
  {
    title: "Café Morrison",
    description: "Pune's beloved classic rock bar with live bands playing Doors and Zeppelin covers.",
    image: { url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800", filename: "morrison" },
    category: "Live Music", price: 600, location: "Pune", country: "India",
  },

  // ── Rooftop ───────────────────────────────────────────────────────────────
  {
    title: "Aer Mumbai",
    description: "India's highest rooftop bar atop Four Seasons with stunning Mumbai skyline views.",
    image: { url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800", filename: "aer_mumbai" },
    category: "Rooftop", price: 3000, location: "Worli, Mumbai", country: "India",
  },
  {
    title: "Unplugged Courtyard",
    description: "Open-air rooftop in Connaught Place with live acoustic music and city views.",
    image: { url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800", filename: "unplugged" },
    category: "Rooftop", price: 1500, location: "New Delhi", country: "India",
  },
  {
    title: "Skyye Bar",
    description: "Bangalore's most glamorous rooftop with infinity pool and panoramic views.",
    image: { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800", filename: "skyye" },
    category: "Rooftop", price: 2200, location: "Bangalore", country: "India",
  },
  {
    title: "Ophelia Rooftop",
    description: "Hyderabad's chic rooftop bar with HITEC City views and signature cocktails.",
    image: { url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800", filename: "ophelia" },
    category: "Rooftop", price: 1800, location: "Hyderabad", country: "India",
  },
  {
    title: "Jungle by Night",
    description: "Rooftop dining in Jaipur's Pink City with fort views and Rajasthani cuisine.",
    image: { url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800", filename: "jungle_night" },
    category: "Rooftop", price: 1200, location: "Jaipur", country: "India",
  },

  // ── Gaming Zone ───────────────────────────────────────────────────────────
  {
    title: "Smaaash Delhi",
    description: "India's largest gaming and entertainment arena with VR, cricket simulators and bowling.",
    image: { url: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800", filename: "smaaash" },
    category: "Gaming Zone", price: 800, location: "New Delhi", country: "India",
  },
  {
    title: "Timezone Mumbai",
    description: "Family entertainment center with arcade games, laser tag and bumper cars.",
    image: { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800", filename: "timezone" },
    category: "Gaming Zone", price: 600, location: "Mumbai", country: "India",
  },
  {
    title: "Inorbit Game Zone",
    description: "Bangalore's popular gaming hub with the latest arcade machines and e-sports setups.",
    image: { url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800", filename: "inorbit" },
    category: "Gaming Zone", price: 500, location: "Bangalore", country: "India",
  },
  {
    title: "Fun City Hyderabad",
    description: "Massive indoor gaming park with rides, arcades and a dedicated kids zone.",
    image: { url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800", filename: "fun_city" },
    category: "Gaming Zone", price: 700, location: "Hyderabad", country: "India",
  },
  {
    title: "Netzone Gaming Lounge",
    description: "Kolkata's premier e-sports lounge with high-end PCs and console gaming setups.",
    image: { url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800", filename: "netzone" },
    category: "Gaming Zone", price: 300, location: "Kolkata", country: "India",
  },

  // ── Nature ────────────────────────────────────────────────────────────────
  {
    title: "Chopta Valley Camp",
    description: "Serene camping retreat in the Himalayas with stargazing and forest trails.",
    image: { url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800", filename: "chopta" },
    category: "Nature", price: 2500, location: "Uttarakhand", country: "India",
  },
  {
    title: "Coorg Wilderness Resort",
    description: "Eco-resort inside a coffee plantation with birdwatching and waterfall hikes.",
    image: { url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800", filename: "coorg" },
    category: "Nature", price: 3500, location: "Coorg, Karnataka", country: "India",
  },
  {
    title: "Sundarbans River Camp",
    description: "Unique mangrove forest camp with boat safaris and Royal Bengal Tiger spotting.",
    image: { url: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800", filename: "sundarbans" },
    category: "Nature", price: 4000, location: "Sundarbans, West Bengal", country: "India",
  },
  {
    title: "Spiti Valley Retreat",
    description: "High-altitude desert experience with ancient monasteries and dramatic landscapes.",
    image: { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", filename: "spiti" },
    category: "Nature", price: 3000, location: "Spiti, Himachal Pradesh", country: "India",
  },
  {
    title: "Munnar Tea Garden Walk",
    description: "Guided walks through lush tea estates with panoramic Western Ghats views.",
    image: { url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800", filename: "munnar" },
    category: "Nature", price: 800, location: "Munnar, Kerala", country: "India",
  },

  // ── Event ─────────────────────────────────────────────────────────────────
  {
    title: "Sunburn Festival",
    description: "Asia's biggest electronic music festival with international DJs in Goa.",
    image: { url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800", filename: "sunburn" },
    category: "Event", price: 5000, location: "Vagator, Goa", country: "India",
  },
  {
    title: "Jaipur Literature Festival",
    description: "World's largest free literary festival featuring global authors and thinkers.",
    image: { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800", filename: "jlf" },
    category: "Event", price: 0, location: "Jaipur", country: "India",
  },
  {
    title: "Hornbill Festival",
    description: "Nagaland's grand cultural festival celebrating tribal heritage and traditions.",
    image: { url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800", filename: "hornbill" },
    category: "Event", price: 200, location: "Kohima, Nagaland", country: "India",
  },
  {
    title: "NH7 Weekender",
    description: "India's happiest music festival featuring indie, rock and world music acts.",
    image: { url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800", filename: "nh7" },
    category: "Event", price: 3500, location: "Pune", country: "India",
  },
  {
    title: "Comic Con India",
    description: "India's biggest pop culture convention with cosplay, gaming and celebrity meet-and-greets.",
    image: { url: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=800", filename: "comiccon" },
    category: "Event", price: 800, location: "New Delhi", country: "India",
  },
];

module.exports = { listings, users };