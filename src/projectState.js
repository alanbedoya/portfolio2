import athlete from './assets/img/athlete-small.png';
import athlete2 from './assets/img/athlete2.png';
import racer from './assets/img/theracer-small.png';
import racer2 from './assets/img/the-racer2.jpg';
import coffee from './assets/img/coffee.jpg';
import coffee2 from './assets/img/coffee2.jpg';

export const ProjectState = () => {
  return [
    {
      title: 'Project 1',
      mainImg: athlete,
      secondImg: athlete2,
      url: '/work/project1',
      work: [
        {
          title: 'Project 1/3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ab!',
        },
        {
          title: 'Project 2/3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sint hic!',
        },
        {
          title: 'Project 3/3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sint hic!',
        },
      ],
    },
    {
      title: 'Project 2',
      mainImg: racer,
      secondImg: racer2,
      url: '/work/project2',
      work: [
        {
          title: 'Project 1/3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ab!',
        },
        {
          title: 'Project 2/3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sint hic!',
        },
        {
          title: 'Project 3/3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sint hic!',
        },
      ],
    },
    {
      title: 'Project 3',
      mainImg: coffee,
      secondImg: coffee2,
      url: '/work/project3',
      work: [
        {
          title: 'Project 1/3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ab!',
        },
        {
          title: 'Project 2/3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sint hic!',
        },
        {
          title: 'Project 3/3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sint hic!',
        },
      ],
    },
  ];
};
