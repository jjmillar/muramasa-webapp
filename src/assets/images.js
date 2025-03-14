const images = Object.entries(import.meta.glob('../../public/*.webp')).map(([path], index) => ({
  id: `${index + 1}`,
  image: path.replace('../../public/', '')
}));

export default images;
