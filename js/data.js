import { getRandomInteger, getRandomArrayElement } from './util.js';

const NAMES = ['Артём', 'Иван', 'Мария', 'Анна', 'Кекс', 'Лёша', 'Ольга', 'Дмитрий'];
const DESCRIPTIONS = ['Красивый закат', 'Мой кот', 'Поездка на море', 'Любимый город', 'Вкусный ужин', 'Прогулка в парке'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)} ${getRandomArrayElement(MESSAGES)}`,
  name: getRandomArrayElement(NAMES),
});

const createComments = () => {
  const count = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 1; i <= count; i++) {
    comments.push(createComment(i));
  }
  return comments;
};

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

export const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};
