import axios from 'axios';
export const PER_PAGE = 12;
export const getImages = async (searchQuery, page) => {
  const response = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: '32978266-8edcc363cd76f71cafd891553',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: 12,
      safesearch: true,
    },
  });
  return response.data;
};
