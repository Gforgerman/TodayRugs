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
          En Today, desde 2020, convertimos tus espacios en arte. Cada tapete es una obra única tejida con pasión. Personaliza tu estilo con nosotros. ¡Transforma tu hogar hoy!
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