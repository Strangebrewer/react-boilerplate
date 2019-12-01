import React from 'react';
import styled from 'styled-components';
import { ScaleLoader } from 'react-spinners';

const Spinner = () => {
   return (
      <LoadingContainer>
         <ScaleLoader
            color={'#09d3ac'}
            height={70}
            width={8}
            margin="5px"
            radius={4}
         />
      </LoadingContainer>
   );
}

export default Spinner;

const LoadingContainer = styled.div`
   background: ${props => props.theme.bg};
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   width: 100vw;
   position: fixed;
   top: 0;
   left: 0;
`;