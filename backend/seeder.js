import mongoose from "mongoose";
import dotenv from 'dotenv';
import Package from "./models/package.js";
import Destination from "./models/destination.js";
dotenv.config();
const destinations = [
  {
    placeName: 'Goa Beach',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop&crop=center',
    price: 9999,
    description: 'Goa is renowned for its stunning beaches, vibrant nightlife, historic churches, and Portuguese heritage. With golden sands, turquoise waters, and beach shacks offering local delicacies, Goa is perfect for both relaxation and adventure seekers.',
    location: 'Goa, India'
  },
  {
    placeName: 'Manali Hills',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&crop=center',
    price: 7999,
    description: 'Manali is a charming hill station nestled in the Himalayas, known for its snow-covered mountains, lush green valleys, and adventure sports like skiing and paragliding. It is an ideal getaway for nature lovers and thrill-seekers.',
    location: 'Himachal Pradesh, India'
  },
  {
    placeName: 'Jaipur City',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop&crop=center',
    price: 8999,
    description: 'Also called the Pink City, Jaipur is famous for its royal palaces, majestic forts, and rich Rajasthani culture. Visitors can explore Hawa Mahal, Amber Fort, and vibrant local markets filled with handicrafts and traditional jewelry.',
    location: 'Rajasthan, India'
  },
  {
    placeName: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop&crop=center',
    price: 10999,
    description: 'Kerala\'s backwaters offer a serene experience with houseboat cruises through a network of tranquil canals, lagoons, and lakes. The lush greenery, coconut palms, and peaceful villages create a magical and rejuvenating environment.',
    location: 'Alleppey, Kerala, India'
  },
  {
    placeName: 'Leh-Ladakh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
    price: 12999,
    description: 'Leh-Ladakh is an arid, mountainous region offering breathtaking landscapes, ancient monasteries, and high-altitude passes. Adventure enthusiasts flock here for biking, trekking, and visiting Pangong Lake and Nubra Valley.',
    location: 'Ladakh, India'
  },
  {
    placeName: 'Andaman Islands',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop&crop=center',
    price: 13999,
    description: 'The Andaman Islands are a tropical paradise known for pristine beaches, coral reefs, and water sports like scuba diving and snorkeling. Radhanagar Beach and Cellular Jail are among the top attractions on the islands.',
    location: 'Andaman & Nicobar, India'
  },
  {
    placeName: 'Shimla Hills',
    image: 'https://images.unsplash.com/photo-1609086577273-8b0c3d8e7b51?w=800&h=600&fit=crop&crop=center',
    price: 6999,
    description: 'The Queen of Hills, Shimla offers colonial architecture, scenic mountain railways, and panoramic views of the Himalayas. Famous for Mall Road, Christ Church, and Ridge, it\'s perfect for honeymooners and family vacations.',
    location: 'Himachal Pradesh, India'
  },
  {
    placeName: 'Rishikesh Adventure',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center',
    price: 5999,
    description: 'Known as the Yoga Capital of the World, Rishikesh offers spiritual retreats, river rafting on the Ganges, and adventure sports. The sacred ghats and ashrams provide a perfect blend of spirituality and adventure.',
    location: 'Uttarakhand, India'
  },
  {
    placeName: 'Hampi Heritage',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&crop=center',
    price: 7499,
    description: 'A UNESCO World Heritage Site, Hampi is an ancient city with magnificent ruins of the Vijayanagara Empire. Explore stone temples, boulder landscapes, and royal complexes that tell tales of a glorious past.',
    location: 'Karnataka, India'
  },
  {
    placeName: 'Udaipur Lakes',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop&crop=center',
    price: 9499,
    description: 'The City of Lakes, Udaipur mesmerizes with its romantic palaces, serene lakes, and royal heritage. Lake Pichola, City Palace, and Jag Mandir offer a fairy-tale experience in the heart of Rajasthan.',
    location: 'Rajasthan, India'
  },
  {
    placeName: 'Darjeeling Tea Gardens',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop&crop=center',
    price: 8499,
    description: 'Famous for its tea gardens and the Darjeeling Himalayan Railway, this hill station offers stunning views of Kanchenjunga, toy train rides, and peaceful monasteries amidst rolling green hills.',
    location: 'West Bengal, India'
  },
  {
    placeName: 'Munnar Hills',
    image: 'https://images.unsplash.com/photo-1575377222312-dd1a63a51638?w=800&h=600&fit=crop&crop=center',
    price: 6499,
    description: 'Munnar is a picturesque hill station in Kerala known for its sprawling tea plantations, misty mountains, and cool climate. The Eravikulam National Park and tea museums make it a nature lover\'s paradise.',
    location: 'Kerala, India'
  }
];

const packages = [
  {
    name: 'Golden Triangle Tour',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&crop=center',
    description: 'This package takes you through India\'s most iconic cities — Delhi, Agra, and Jaipur. Experience the grandeur of Mughal architecture, the magnificence of Rajputana forts, and vibrant street life, all in one tour.',
    location: 'Delhi, Agra, Jaipur',
    duration: '5 Days / 4 Nights',
    highlights: ['Taj Mahal', 'Amber Fort', 'India Gate', 'Qutub Minar']
  },
  {
    name: 'South India Temple Tour',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&crop=center',
    description: 'A cultural tour through South India\'s architectural marvels, this package explores centuries-old temples known for their intricate carvings, spiritual aura, and historical significance.',
    location: 'Tamil Nadu, India',
    duration: '7 Days / 6 Nights',
    highlights: ['Meenakshi Temple', 'Brihadeeswara Temple', 'Shore Temple', 'Rameswaram']
  },
  {
    name: 'Himalayan Adventure Retreat',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
    description: 'Designed for thrill-seekers and nature lovers, this package includes treks, river rafting, and camping in the pristine Himalayan wilderness with breathtaking views and starry nights.',
    location: 'Uttarakhand & Himachal',
    duration: '6 Days / 5 Nights',
    highlights: ['River Rafting', 'Camping', 'Mountain Trekking', 'Valley Views']
  },
  {
    name: 'Spiritual North India Tour',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop&crop=center',
    description: 'Visit the sacred cities along the Ganges. Explore centuries-old temples, participate in the Ganga Aarti, and gain a deep spiritual insight into India\'s rich religious traditions.',
    location: 'Varanasi, Haridwar, Rishikesh',
    duration: '6 Days / 5 Nights',
    highlights: ['Ganga Aarti', 'Kashi Vishwanath Temple', 'Ashrams of Rishikesh']
  },
  {
    name: 'Royal Rajasthan Heritage Tour',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop&crop=center',
    description: 'Experience the royal lifestyle of India with this luxury tour across the historic palaces, forts, and deserts of Rajasthan. Enjoy camel rides, cultural shows, and regal hospitality.',
    location: 'Jaipur, Jodhpur, Udaipur',
    duration: '8 Days / 7 Nights',
    highlights: ['City Palace', 'Mehrangarh Fort', 'Lake Pichola', 'Desert Safari']
  },
  {
    name: 'Coastal Karnataka & Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop&crop=center',
    description: 'Explore India\'s western coast with a perfect blend of serene beaches, ancient temples, and laid-back vibes. Ideal for both heritage exploration and relaxation.',
    location: 'Goa, Gokarna, Udupi',
    duration: '7 Days / 6 Nights',
    highlights: ['Om Beach', 'Murudeshwar Temple', 'Goa Forts', 'Seafood Delicacies']
  },
  

];


const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected.');

    await Destination.deleteMany(); // Clears previous data
    await Package.deleteMany();

    await Destination.insertMany(destinations); //add new data
    await Package.insertMany(packages);

    console.log('Data seeded successfully!');
    process.exit();
  } catch (error) {
    console.error(' Error seeding data:', error);
    process.exit(1);
  }
};

seedDatabase();