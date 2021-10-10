import ServicePage from "../../components/ServicePage";

const images = [
  {
    img: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg',
    title: 'Burxxger',
  },
  {
    img: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg',
    title: 'Camera',
  },
  {
    img: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg',
    title: 'Cofxfee',
  },
  {
    img: 'https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg',
    title: 'Coffxxijijee',
  },
  {
    img: 'https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg',
    title: 'Hatplpls',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/159279/pylon-current-electricity-strommast-159279.jpeg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
];

function CablaggioQuadriElettrici() {
  return (
    <ServicePage 
      backgroundImage="https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg" 
      title="Cablaggio Quadri Elettrici"
      porfolioImages={images}
    />
  )
}
  
  export default CablaggioQuadriElettrici;
  