// import React from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// // const apiKey = process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY; // Substitua com sua chave da API do Google Maps

// const Map = () => {
//   const markers = [
//     {
//       id: 1,
//       nome: "SorriFácil, Pça. Souza Naves",
//       lat: -23.8859932,
//       lng: -51.2376807,
//       icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//     },
//   ];

//   const center = { lat: -23.8859932, lng: -51.2376807 }; // Coordenadas do centro do mapa

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
//     language: "pt"
//   }); 

//   const onMapLoad = (map) => {
//     const google = window.google;
//     const bounds = new google.maps.LatLngBounds();
//     //const bounds = new window.google.maps.LatLngBounds();
//     markers.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
//     map.fitBounds(bounds);
//   };

//   return (
//     <div>
//     {!isLoaded ? (
//           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'transparent'}}>
//               <p>Carregando..</p>
//           </div>
//       ) : (
//     <GoogleMap
//       mapContainerStyle={{ width: "100%", height: "400px" }} // Defina a largura e altura do contêiner do mapa
//       center={center}
//       zoom={17}
//       onLoad={onMapLoad}
//       // apiKey={apiKey} // Fornecer sua chave da API do Google Maps
//     >
//       {markers.map((marker) => (
//         <Marker
//           key={marker.id}
//           position={{ lat: marker.lat, lng: marker.lng }}
//           icon={marker.icon}
//         />
//       ))}
//     </GoogleMap>)}
//     </div>
   
//   );
// };

// export default Map;
