import React, { useState } from "react";

function RestaurantPicker() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const topRestaurants = [
    {
      name: "Benu",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "French Laundry",
      location: "Yountville",
      stars: 4.5,
    },
    {
      name: "State Bird Provisions",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Gary Danko",
      location: "San Francisco",
      stars: 4.6,
    },
    {
      name: "Acquerello",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Atelier Crenn",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Saison",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Rich Table",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Chez Panisse",
      location: "Berkeley",
      stars: 4.5,
    },
    {
      name: "La Folie",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Manresa",
      location: "Los Gatos",
      stars: 4.5,
    },
    {
      name: "Kusakabe",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Kokkari Estiatorio",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Zuni Cafe",
      location: "San Francisco",
      stars: 4.0,
    },
    {
      name: "Quince",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Kin Khao",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Michael Mina",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Liholiho Yacht Club",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Octavia",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "SPQR",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Ippuku",
      location: "Berkeley",
      stars: 4.5,
    },
    {
      name: "The Progress",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "The Slanted Door",
      location: "San Francisco",
      stars: 4.0,
    },
    {
      name: "Mister Jiu's",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Trestle",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Shizen Vegan Sushi Bar & Izakaya",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "La Ciccia",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Nopa",
      location: "San Francisco",
      stars: 4.0,
    },
    {
      name: "House of Prime Rib",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Boulevard",
      location: "San Francisco",
      stars: 4.0,
    },
    {
      name: "Californios",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Hog Island Oyster Co",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Liholiho Yacht Club",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Coqueta",
      location: "San Francisco",
      stars: 4.0,
    },
    {
      name: "Rintaro",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Hinodeya Ramen Bar",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Tartine Bakery & Cafe",
      location: "San Francisco",
      stars: 4.0,
    },
    {
      name: "Saru Sushi Bar",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Zazie",
      location: "San Francisco",
      stars: 4.0,
    },
    {
      name: "Lolinda",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Monsieur Benjamin",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "The House",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Elephant Sushi",
      location: "San Francisco",
      stars: 4.5,
    },
    {
      name: "Ramen Shop",
      location: "Oakland",
      stars: 4.5,
    },
    {
      name: "Iyasare",
      location: "Berkeley",
      stars: 4.5,
    },
    {
      name: "La Mar Cebichería Peruana",
      location: "San Francisco",
      stars: 4.0,
    },
    {
      name: "Nopalito",
      location: "San Francisco",
      stars: 4.0,
    },
    {
      name: "Orenchi Beyond",
      location: "San Francisco",
      stars: 4.5,
    },
  ];

  const getRandomRestaurant = () => {
    const randomIndex = Math.floor(Math.random() * topRestaurants.length);
    setSelectedRestaurant(topRestaurants[randomIndex]);
  };

  return (
    <div>
      <h1>Top 50 Restaurants in the Bay Area</h1>
      <div className="rez-container">
        {selectedRestaurant ? (
          <div>
            <h2>You're getting Dinner at:</h2>
            <p>Name: {selectedRestaurant.name}</p>
            <p>Location: {selectedRestaurant.location}</p>
            <p>Stars: {selectedRestaurant.stars}</p>
          </div>
        ) : (
          <p id="rez-text">Click here to generate a Restaurant</p>
        )}
        <button id="generate-button" onClick={getRandomRestaurant}>
          Dinner Time! 
        </button>
      </div>
    </div>
  );
}

export default RestaurantPicker; 