import mobile from '@assets/device-phone-mobile.svg';
import github from '@assets/github.svg';
import pin from '@assets/map-pin.svg';

import envelope from '@assets/envelope.svg';
import globe from '@assets/globe-alt.svg';
import linkedin from '@assets/linkedin.svg';
import scholar from '@assets/scholar.svg';

export const data = {
  name: 'Alvaro Joaquín Gaona',
  location: {
    value: 'Buenos Aires, Argentina',
    icon: pin,
  },
  contact: {
    email: {
      address: 'alvgaona@gmail.com',
      icon: envelope,
    },
    tel: {
      address: '+54 (911) 6797-1081',
      icon: mobile,
    },
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/alvgaona',
        icon: github,
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/alvaro-gaona',
        icon: linkedin,
      },
      {
        name: 'Website',
        url: 'alvgaona.com',
        icon: globe,
      },
      {
        name: 'Google Scholar',
        url: '',
        icon: scholar,
      },
    ],
  },
  education: [
    {
      title: 'University of Buenos Aires',
      description: 'Graduate in Electrical Engineering',
      location: 'Buenos Aires, Argentina',
      span: 'Sep. 2013 - Sep. 2019',
      bullets: [
        '”Deep Recurrent Learning for Heart Sounds Segmentation based on Instantaneous Frequency Features”, Graduate Thesis, 2019. University of Buenos Aires. Grade 100/100.',
        'GPA: 3.5/4.0',
      ],
    },
    {
      title: 'University of Buenos Aires',
      description: 'Industrial Engineering (Incomplete)',
      location: 'Buenos Aires, Argentina',
      span: 'Mar. 2010 - Sep. 2013',
    },
    {
      title: 'Instituto Social Militar Dr. Dámaso Centeno',
      description:
        'Secondary Education with Option in Mathematics and Natural Sciences',
      location: 'Buenos Aires, Argentina',
      span: 'Mar. 2003 - Dec. 2009',
    },
  ],
};
