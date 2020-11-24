import bcrypt from 'bcrypt';

const data = {
  users: [
    {
      name: 'JLee',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('1234', 10),
      isAdin: true
    },
    {
      name: 'moose',
      email: 'moose@gmail.com',
      password: bcrypt.hashSync('1234', 10),
      isAdin: false
    }
  ],
  products:[
    {
      name: 'Red Chinese Evergreen',
      altName: 'Aglaonema',
      image: '../images/aglaonema.jpg',
      lighting: 'Medium',
      price: 15,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      description: 'One of the easiest houseplants to grow, red aglaonema is also one of the most stylish. A relatively new variety to the houseplant world, this stunner shows off dark green leaves elegantly flushed with bright red or pink. Its colorful foliage makes red aglaonema a perfect home-decor accent.'
    },
    {
      name: 'African Mask Plant',
      altName: 'Alocasia polly',
      image: '../images/alocasia.jpg',
      lighting: 'Bright',
      price: 25,
      countInStock: 0,
      rating: 2,
      numReviews: 15,
      description:'The Alocasia polly, also known as the African Mask Plant, is native to subtropical Asia and Australia. This plant appreciates a bright and humid environment in the home or office. Its dark green leaves are shaped like an arrowhead with highly defined silvery green veins.  Though it likes bright light, the leaves can be sensitive to sunburn so its best to keep it slightly away from the window or behind a light curtain. Frequent waterings, plenty of light, and added humidity will keep your Alocasia looking its best. Alocasia are toxic to pets.'
    },
    {
      name: 'Aloe',
      altName: 'Aloe vera',
      image: '../images/aloe.jpg',
      lighting: 'Bright',
      price: 10,
      countInStock: 4,
      rating: 5,
      numReviews: 25,
      description: 'Aloe is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world.[3] It is cultivated for agricultural and medicinal uses.[3] The species is also used for decorative purposes and grows successfully indoors as a potted plant.'
    },
    {
      name: 'Flamingo Flower',
      altName: 'Anthurium',
      image: '../images/anthurium.jpg',
      lighting: 'Low',
      price: 15,
      countInStock: 8,
      rating: 4.5,
      numReviews: 20,
      description: 'Anthuriums are the world’s longest blooming houseplant – they are rarely without their showy blooms! Each bloom can last up to eight weeks, and new ones will pop up often. These aren’t actual flowers, but modified waxy leaves. Anthuriums flourish and bloom best in bright indirect light.'
    },
    {
      name: 'Lucky Bamboo',
      altName: 'Dracaena sanderiana',
      image: '../images/bamboo.jpg',
      lighting: 'Bright',
      price: 8,
      countInStock: 10,
      rating: 5,
      numReviews: 16,
      description: 'An important part of feng shui, lucky bamboo plants are said to bring good luck and fortune, especially if the plants were given as gifts. It also helps that they have a well-earned reputation as nearly indestructible; these tough stalks can survive in vases of pure water or in containers of soil, and in a wide variety of light conditions. Even a poorly kept lucky bamboo plant will live for a long time before it finally succumbs.'
    },
    {
      name: 'Coffee Plant',
      altName: 'Coffea arabica',
      image: '../images/coffee.jpg',
      lighting: 'Bright',
      price: 20,
      countInStock: 3,
      rating: 3.5,
      numReviews: 5,
      description: 'Coffee beans grow on an attractive little plant with glossy green leaves and a compact growth habit. Native to Ethiopia, the coffee plant (Coffea arabica) will flower in the spring with small white flowers and then bear half-inch berries that gradually darken from green to blackish pods. Each of these fruits contains two seeds, which eventually become the coffee beans you use to brew coffee.'
    },
    {
      name: 'Fiddleleaf Fig',
      altName: 'Ficus lyrata',
      image: '../images/fiddleleaf_fig.jpg',
      lighting: 'Full Sun',
      price: 35,
      countInStock: 2,
      rating: 3.5,
      numReviews: 26,
      description: 'The Fiddle Leaf Fig is easily recognizable and loved for its distinctive foliage. This tall, dramatic plant has very large, heavily veined, violin-shaped leaves that grow upright. Native to the tropical climate of Western Africa, the Fiddle Leaf Fig thrives in very warm, bright, and humid conditions.'
    },
    {
      name: 'Ginseng Ficus',
      altName: 'Ficus retusa',
      image: '../images/ginseng_ficus.jpg',
      lighting: 'Bright',
      price: 30,
      countInStock: 4,
      rating: 4,
      numReviews: 47,
      description: 'Native to Malaysia, Taiwan and other Southeast and East Asian countries, the Ginseng Ficus is noted for its thick, pot-bellied trunk and substantial exposed roots, giving the tree a every exotic and tropical feel. It is an excellent choice for bonsai specimens.'
    },
    {
      name: 'Zebra Haworthia',
      altName: 'Haworthia fasciata',
      image: '../images/haworthia.jpg',
      lighting: 'Full Sun',
      price: 10,
      countInStock: 7,
      rating: 5,
      numReviews: 5,
      description: 'Haworthia is a delightful little succulent that makes a very attractive small houseplant. These small, low growing plants form rosettes of fleshy green leaves that are generously covered with white, pearly warts or bands, giving them a distinctive appearance. Generally easy to grow, the same best practices that yield healthy aloe and echeveria plants will also produce beautiful Haworthia. Like other succulents, these plants appreciate bright light, adequate moisture in the summer, and relatively drier conditions in the winter. Avoid overwatering, but don’t let them dry out too much.'
    },
    {
      name: 'Swiss Cheese Monstera',
      altName: 'Monstera deliciosa',
      image: '../images/monstera.jpg',
      lighting: 'Bright',
      price: 65,
      countInStock: 2,
      rating: 4.5,
      numReviews: 67,
      description: 'Native to the rainforests of Central America, the Monstera deliciosa plant is also known as the "tropical split-leaf philodendron." This climbing evergreen is a popular easy-to-grow houseplant and a favorite of many interior designers for both residential and commercial spaces. Indoors, the plant grows about two feet high, its leathery, glossy, characteristic split and heart-shaped leaves coming from intricate aerial roots. Hardy in USDA Zones 10 through 12, Monstera deliciosa thrives in high humidity and bright lighting.'
    },
    {
      name: 'Peace Lily',
      altName: 'Spathiphyllum',
      image: '../images/peace_lily.jpg',
      lighting: 'Low',
      price: 20,
      countInStock: 4,
      rating: 4,
      numReviews: 55,
      description: 'The peace lily is a tropical species that is a favorite flowering houseplant. A striking plant when used in mass display, the peace lily blooms in spring with long-lasting flower stalks that hover gracefully over the foliage. They filter more indoor pollutants than most other plants, so are great for bedrooms or other frequented rooms. Inside the tropical plant\'s pores, toxic gases like carbon monoxide and formaldehyde are broken down and neutralized. A well-grown peace lily may bloom twice a year, resulting in several months of flowers.'
    },
    {
      name: 'Chinese Money Plant',
      altName: 'Pilea peperomioides',
      image: '../images/pilea.jpg',
      lighting: 'Bright',
      price: 15,
      countInStock: 1,
      rating: 3,
      numReviews: 61,
      description: 'Pilea foliage varies considerably, ranging from 3-inch textured and lance-shaped leaves to tiny heart-shaped and moss-like foliage. They are fairly low-maintenance and forgiving plants. With even minimal attention toward watering, they will generally thrive and continuously put out new foliage through the summer months. In the winter, the growth will slow. '
    },
    {
      name: 'Ponytail Palm',
      altName: 'Beaucarnea recurvata',
      image: '../images/ponytail_palm.jpg',
      lighting: 'Bright',
      price: 53,
      countInStock: 0,
      rating: 3.5,
      numReviews: 73,
      description: 'The ponytail palm makes a surprisingly interesting desktop plant, considering that when grown outdoors it can be a full-size tree that towers over homes. Indoors, these novel little trees are often grown in shallow pots, with a tuft of strappy green leaves emerging from a bulbous stem that seems to erupt from the soil. Contrary to their name, ponytail palms aren\'t actually related to palms, but classified within the asparacus family.'
    },
    {
      name: 'Marble Queen Pothos',
      altName: 'Epipremnum aureum',
      image: '../images/pothos.jpg',
      lighting: 'Low',
      price: 20,
      countInStock: 6,
      rating: 5,
      numReviews: 202,
      description: 'Pothos is arguably the easiest of all houseplants to grow. This trailing vine has pointed, heart-shaped green leaves, sometimes variegated with white, yellow, or pale green. While pothos likes bright, indirect light it can thrive in areas that don’t get a lot of sunlight or have only fluorescent lighting.1﻿ It\'s an excellent plant for locations such as offices and dorm rooms.'
    },
    {
      name: 'Prayer Plant',
      altName: 'Maranta leuconeura',
      image: '../images/prayer.jpg',
      lighting: 'Bright',
      price: 25,
      countInStock: 9,
      rating: 2,
      numReviews: 34,
      description: 'Named for Bartolomeo Maranta, an Italian physician and botanist of the sixteenth century, the Maranta genus includes a few dozen low-growing plants native to the American tropics. The plant gets its common name from the fact that its leaves stay flat during the day and then fold up like praying hands at night. A well-grown Maranta should have full, six-inch-long leaves rising from a short center stem and draping down. They are fairly common as houseplants, but not necessarily easy to keep growing over the long-term.'
    },
    {
      name: 'Rubber Tree',
      altName: 'Ficus elastica',
      image: '../images/rubber_tree.jpg',
      lighting: 'Bright',
      price: 45,
      countInStock: 1,
      rating: 3.5,
      numReviews: 12,
      description: 'the rubber plant, is an unusual-looking plant from the tropics of Southeast Asia with huge, soft leaves and an exotic name. In its natural habitat, it can grow 50 to 100 feet with an enormous canopy of draping, foot-long oval leaves. Like many ficuses, it has hanging roots and develops flanged trunks over time. In the home, it is an excellent standard plant that thrives with bright indirect light, regular watering, warmth, and fertilizer. It is winter hardy to USDA Zones 10 through 12; in colder climates it is grown as a houseplant.'
    },
    {
      name: 'Snake Plant',
      altName: 'Dracaena trifasciata',
      image: '../images/snake_plant.jpg',
      lighting: 'Bright',
      price: 25,
      countInStock: 3,
      rating: 5,
      numReviews: 43,
      description: 'The snake plant is one of the most popular and hardy of houseplants. An architectural species, it features stiff leaves that range from six inches to eight feet tall, depending on the variety. They are easy to grow and is nearly indestructible; they will thrive in either very bright light or almost dark corners of the house. An ideal container plant, it is excellent in a grouping and will grow equally well on the floor or on tabletop displays. These plants are also drought resistant.'
    },
    {
      name: 'Arrowhead Vine',
      altName: 'Syngonium podophyllum',
      image: '../images/syngonium.jpg',
      lighting: 'Bright',
      price: 35,
      countInStock: 8,
      rating: 4,
      numReviews: 27,
      description: 'The arrowhead vine is a tropical climber in the aroid family. Many varieties have variegated leaves to one degree or another, and like many aroids, the plant\'s leaf structure changes as it matures, going from a simple arrow shape to a deeply lobed or divided mature leaf. Provide them with bright, filtered light, warm and humidity and you will have a lush and healthy plant. '
    },
    {
      name: 'ZZ Gem',
      altName: 'Zamioculcas zamiifolia',
      image: '../images/zz_plant.jpg',
      lighting: 'Low',
      price: 35,
      countInStock: 0,
      rating: 4,
      numReviews: 23,
      description: 'ZZ plants are notorious for being low-maintenance, easy-to-care-for houseplants that even gardeners with the blackest of thumbs can keep alive. All they need to thrive is adequate light, and a good watering every couple of weeks. Characterized by their shiny, oval-shaped deep green leaves, ZZ plants make excellent additions to any home or office. Also drought tolerant.'
    },
    {
      name: 'Moth Orchid',
      altName: 'Phalaenopsis blume',
      image: '../images/orchid.jpg',
      lighting: 'Bright',
      price: 30,
      countInStock: 8,
      rating: 5,
      numReviews: 100,
      description: 'These are ideal orchids for beginners, since they tolerate clumsy repotting and watering efforts, and bloom on and off throughout the year. These orchids prefer diffused lighting conditions but are otherwise very easy to grow. There are about 75 recognized species within the genus and many dozens of readily available cultivars. They will thrive in indirect indoor lighting or a shady outdoor location.'
    }
  ]
}

export default data;