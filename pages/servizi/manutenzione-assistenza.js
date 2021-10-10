import ServicePage from "../../components/ServicePage";

const images = [
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

function ManutenzioneAssistenza() {
  return (
    <ServicePage 
      backgroundImage="https://images.pexels.com/photos/4305372/pexels-photo-4305372.jpeg" 
      title="Manutenzione e Assistenza tecnica"
      porfolioImages={images}
    />
  )
}
  
  export default ManutenzioneAssistenza;
  