import React from "react";
import Image from "./Image.jsx";

function List() {
  const locations = [
    {
      id: 1,
      name: "Tel Aviv",
      image:
        "https://www.touristisrael.com/wp-content/themes/schwan/img/slider_layer.png",
      link: "https://media.timeout.com/images/105433594/750/422/image.jpg"
    },
    {
      id: 2,
      name: "London",
      image:
        "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
      link: "https://maps.google.com/?q=london"
    },
    {
      id: 3,
      name: "Helsinki",
      image:
        "https://d2mpqlmtgl1znu.cloudfront.net/AcuCustom/Sitename/DAM/015/Heksinki_AdobeStock_56312148_rm.jpg",
      link: "https://maps.google.com/?q=helsinki"
    },
    {
      id: 4,
      name: "Moscow",
      image:
        "https://static.themoscowtimes.com/image/article_1360/84/moscow-863527_1920.jpg",
      link: "https://maps.google.com/?q=moscow"
    }
  ];

  return (
    <div className="container">
      {locations.map(item => {
        return (
          <div className="location" key={item.id}>
            <h2>{item.name}</h2>
            <Image image={item.image} name={item.name} />
            <a href={item.link} target="blank">
              Google Maps
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default List;

// In the same project - remove the content of the created app (the image and text, you can keep the structure
//   and styles if you want), and add a list of travel location with image, name and a link to the place in google
//   maps. Do not repeat the list items code - use a functional component for that.
