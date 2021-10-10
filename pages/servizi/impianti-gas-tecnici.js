import ServicePage from "../../components/ServicePage";

const images = [
  {
    img: 'https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/2881154/pexels-photo-2881154.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'Burger',
  },
  {
    img: 'https://images.pexels.com/photos/9808733/pexels-photo-9808733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'Camera',
  },
  {
    img: 'https://images.pexels.com/photos/6474132/pexels-photo-6474132.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/4394359/pexels-photo-4394359.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'Hats',
    cols: 2,
    rows: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
];

function ImpiantiGasTecnici() {
  return (
      <ServicePage 
        backgroundImage="/gas.jpeg"
        title="Impianti Gas tecnici" 
        porfolioImages={images}
      />
    )
}
  
  export default ImpiantiGasTecnici;
  