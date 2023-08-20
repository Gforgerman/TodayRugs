import React from 'react';
import './AboutUsMin.scss';
import Nosotros from './../../../../../assets/img/nosotros.png';
import Text from '../../../atoms/text/Text';
import { Button } from '@chakra-ui/react';

const AboutUsMin = () => {
  return (
    <div className='today-aboutusmin'>
      <div className="contain-aboutmin">
        <div className="empty" />
        <div className="textabout">
          <img src={Nosotros}/>
          <Text tag={'p'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
          <Button colorScheme='white' variant='link'>
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMin;