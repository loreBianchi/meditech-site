import ServicePage from "../../components/ServicePage";

const images = [
  {
    img: 'https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg',
    title: 'Pipes',
    rows: 2,
    cols: 1,
  },
  {
    img: 'https://images.pexels.com/photos/3769151/pexels-photo-3769151.jpeg',
    title: 'Pipes',
    rows: 2,
    cols: 1,
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
];

function PosaCablaggioPensili() {
  return (
    <ServicePage 
      backgroundImage="https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000" 
      title="Posa e Cablaggio Pensili sale operatorie"
      porfolioImages={images}
    />
  )
}
  
  export default PosaCablaggioPensili;
  