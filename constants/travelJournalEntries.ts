export interface JournalEntry {
  title: string;
  date: string;
  href: string;
  key: string;
  description?: string;
}

export const TRAVEL_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    key: "sri-lanka",
    title: "Sri Lanka",
    date: "February 2023",
    href: "blog-cover-photo/sri-lanka.jpg",
    description:
      "My trip started in the coastal town of Weligama, where I spent the first half of my trip surfing and soaking up the sun at Solid Surf House. From there, I ventured further down the coast to Tangalle and Udawalawe National Park, where I had the chance to see majestic elephants up close. After bidding farewell to the beaches, I headed towards central Sri Lanka, with my first stop being the charming town of Ella. There, I woke up early to climb Ella Rock at sunrise and was rewarded with breathtaking views and the peace of being alone at the summit. From Ella, I embarked on the infamous train journey to Kandy - a seven-hour ride that left me standing the whole time! In Kandy, I took a day trip to Sigiriya, where I marveled at the ancient rock fortress and learned about the fascinating history of Sri Lanka. Finally, I headed back to Colombo, the bustling capital city, where I said goodbye to this amazing country and its friendly people.",
  },
  {
    key: "bali",
    title: "Bali",
    date: "2022",
    href: "blog-cover-photo/bali.jpg",
    description:
      "Out of 11 months I've travelled, 9 of them were based in Indonesia. I spent 3 months travelling all over from Bali to Lombok, Flores (Komodo Islands), Sumatara, and Java. After a month in the US seeing family and friends, I decided to come back because I couldn't stay away from the ocean, surfing, and the way of life there.",
  },
  {
    key: "taiwan",
    title: "Taiwan",
    date: "December 2022",
    href: "blog-cover-photo/taiwan.jpg",
    description:
      "My recent trip to Taiwan was a special one for me as it allowed me to connect with my family's roots and explore the island for the first time through a road trip with my mom. Over the course of two and half weeks, we traveled along the coast of Taiwan, visiting cities such as Taichung, Taipei, Kaohsiung, Tainan, Kenting, Taitung, Hualien, Yilan, and Jiufen. This experience gave me a deeper appreciation for my culture and the food and landscapes of my home country. One of the highlights of my trip was being able to visit my family after over 7 years. Our previously planned trip was canceled due to covid. It was an emotional experience seeing my 92 year old grandpa again. During my time in Taiwan, I indulged in the delicious cuisine, from night markets to street vendors and small shops, and found myself wishing I had more room in my stomach to eat all the food. My eyes were always bigger than my stomach. Overall, my time in Taiwan was a memorable adventure that allowed me to deepen my connection with my family's roots and experience the diversity of Taiwan.",
  },
];
