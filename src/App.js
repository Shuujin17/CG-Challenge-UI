import NavBar from './components/NavBar/NavBar.vue';
import FiltersSection from './components/FiltersSection/FiltersSection.vue';
import ProductCard from './components/ProductCard/ProductCard.vue';
import Pagination from './components/Pagination/Pagination.vue';
import FooterSection from './components/FooterSection/FooterSection.vue';

export default { 
    name: 'Home',
    components: {
        NavBar,
        FiltersSection,
        ProductCard,
        Pagination,
        FooterSection
    },
    data() {
        return {
          products: [
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/37cb1a79-46ef-414a-846d-c8e5fd212d5f.webp', 
                icon: 'https://chicks-games.s3.amazonaws.com/868e80f5-c433-4a00-9596-21472fac7601' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/dec1612b-5007-4535-ad6f-5f3259987277', 
                icon: 'https://chicks-games.s3.amazonaws.com/868e80f5-c433-4a00-9596-21472fac7601' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/581a627b-158b-4b40-88db-25622a72c8c3', 
                icon: 'https://chicks-games.s3.amazonaws.com/868e80f5-c433-4a00-9596-21472fac7601' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/581a627b-158b-4b40-88db-25622a72c8c3', 
                icon: 'https://chicks-games.s3.amazonaws.com/868e80f5-c433-4a00-9596-21472fac7601' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/581a627b-158b-4b40-88db-25622a72c8c3', 
                icon: 'https://chicks-games.s3.amazonaws.com/868e80f5-c433-4a00-9596-21472fac7601' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/5996125b-661c-4671-9756-64b8fb99ebd0', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/5996125b-661c-4671-9756-64b8fb99ebd0', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/5996125b-661c-4671-9756-64b8fb99ebd0', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/5996125b-661c-4671-9756-64b8fb99ebd0', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: 450.00,
                otherPrice: 522.50,
                mainImage: 'https://chicks-products.s3.amazonaws.com/5996125b-661c-4671-9756-64b8fb99ebd0', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: null,
                otherPrice: null,
                mainImage: 'https://chicks-products.s3.amazonaws.com/10795d99-6462-47c9-b07b-a6aa1aae7602', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: null,
                otherPrice: null,
                mainImage: 'https://chicks-products.s3.amazonaws.com/10795d99-6462-47c9-b07b-a6aa1aae7602', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: null,
                otherPrice: null,
                mainImage: 'https://chicks-products.s3.amazonaws.com/10795d99-6462-47c9-b07b-a6aa1aae7602', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: null,
                otherPrice: null,
                mainImage: 'https://chicks-products.s3.amazonaws.com/10795d99-6462-47c9-b07b-a6aa1aae7602', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
            { 
                titleGame: 'Blue Partyhat',
                price: null,
                otherPrice: null,
                mainImage: 'https://chicks-products.s3.amazonaws.com/10795d99-6462-47c9-b07b-a6aa1aae7602', 
                icon: 'https://chicks-games.s3.amazonaws.com/8d7055e0-ae4a-4c35-b9ba-802e41bbc08f' 
            },
          ],
        };
      }
  };