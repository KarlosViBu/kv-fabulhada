import { FC } from 'react';
// import { Box, IconButton, Typography } from '@mui/material';
import { LessIcon } from '../iconos';
import { AddIcon } from '../iconos';

interface Props {
  currentValue: number;
  maxValue: number;

  // Methods
  updatedQuantity: (newValue: number) => void;
}

export const ItemCounter:FC<Props> = ({ currentValue, updatedQuantity, maxValue }) => {

  const addOrRemove = ( value: number ) => {
    if ( value === -1 ) {
      if ( currentValue === 1 ) return;

      return updatedQuantity( currentValue - 1);
    }

    if ( currentValue >= maxValue ) return;

    updatedQuantity( currentValue + 1 );
  }

  return (
    <div className='flex justify-center'>
        <button onClick={ () => addOrRemove(-1) }>
            {/* <Icon icon="ic:round-remove-circle-outline" color="#154" width="30" /> */}
            <LessIcon />
        </button>
        <span className='text-xl text-center'> {currentValue} </span>
        <button onClick={ () => addOrRemove(+1) }>
            {/* <Icon icon="ic:round-add-circle-outline" color="#154" width="30" /> */}
            <AddIcon />
        </button>
    </div>
  )
}
