import ServicePage from "../../components/ServicePage";

const images = [
  {
    img: 'https://images.pexels.com/photos/5872386/pexels-photo-5872386.jpeg',
    title: 'Breakfast',
  },
  {
    img: 'https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg',
    title: 'Burger',
  },
  {
    img: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
    title: 'Camera',
  },
  {
    img: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg',
    title: 'Coffee',
  },
  {
    img: 'https://images.pexels.com/photos/357440/pexels-photo-357440.jpeg',
    title: 'Hats',
  },
  {
    img: 'https://images.pexels.com/photos/942316/pexels-photo-942316.jpeg',
    title: 'Basketball',
  },
  {
    img: 'https://images.pexels.com/photos/3416547/pexels-photo-3416547.jpeg',
    title: 'Fern',
  },
  {
    img: 'https://images.pexels.com/photos/257770/pexels-photo-257770.jpeg',
    title: 'Placeholder 2',
  },
];

function ImpiantiGasMedicinali() {
  return (
      <ServicePage 
        backgroundImage="https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg" 
        title="Impianti Gas Medicinali"
        porfolioImages={images}
     />
  )
}
  
  export default ImpiantiGasMedicinali;
  