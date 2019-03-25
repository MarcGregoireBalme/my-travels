import React from "react";
import Travel from "./Travel"
const travels = [
  {
    destination: 'Paris',
    country : 'france',
    photo : 'https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_960_720.jpg',
    distance : '100',
  },
  {
    destination: 'Londre',
    country : 'england',
    photo : 'https://www.nacel.fr/medias/_cache/villes/20/imagePrincipale/1920_1440/sejour-linguistique-londres.jpg',
    distance : '200',
  },
  {
    destination: 'berlin',
    country : 'allemagne',
    photo : 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/b5/berlin.jpg',
    distance : '110',
  },
  {
    destination: 'Rio',
    country : 'Brazil',
    photo :'https://www.actu-environnement.com/images/illustrations/breves/32486_fb.jpg',
    distance : '2000',
  },
  {
    destination: 'Tokyo',
    country : 'Japan',
    photo : 'https://photos.tui.fr/vnf/Produits/JPNCT002_tokyo-mont-fuji-circuits-japon-tui.jpg',
    distance : '2100',
  }
]
const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
))}
  </div>
);
export default Travels;
