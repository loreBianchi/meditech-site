import ServicePage from "../../components/ServicePage";

const images = [
  {
    img: 'https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg',
    title: 'Pipes',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/3421636/pexels-photo-3421636.jpeg',
    title: 'Pipes 2',
  },
  {
    img: 'https://images.pexels.com/photos/1029635/pexels-photo-1029635.jpeg',
    title: 'Pipe placeholder',
  },
  {
    img: 'https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/3306057/pexels-photo-3306057.jpeg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/763426/pexels-photo-763426.jpeg',
    title: 'Placeholder',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/257770/pexels-photo-257770.jpeg',
    title: 'Placeholder 2',
  },
  {
    img: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
    title: 'Fern',
  },
];

function PosaCablaggioTestaLetto() {
  return (
    <ServicePage 
      backgroundImage="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg" 
      title="Posa e Cablaggio Testaletto"
      porfolioImages={images}
    />
  )
}
  
  export default PosaCablaggioTestaLetto;
  