import React from 'react';
import TennisCourt from '../components/TennisCourt';

export const CourtsViewing = () => {
    return (
    <div>
    <TennisCourt
  imageUrl='../static/images/courseImg.jpg'
  courtNumber={1}
  schedule={{
    1: ['7:30am', '8:30am', '9:30am', '10:30am', '11:30am', '12:30pm', '1:30pm'],
    2: ['8:30am', '10:30am'],
    3: ['7:30am', '11:30am'],
    4: ['8:30am', '12:30pm'],
    5: ['9:30am', '1:30pm'],
    6: ['10:30am', '2:30pm'],
    7: ['7:30am', '1:30pm'],
  }}
/>
    <TennisCourt
  imageUrl='../static/images/courseImg.jpg'
  courtNumber={2}
  schedule={{
    1: ['7:30am', '8:30am', '9:30am', '10:30am', '11:30am', '12:30pm', '1:30pm'],
    2: ['8:30am', '10:30am'],
    3: ['7:30am', '8:30am', '10:30am', '11:30am', '12:30pm'],
    4: ['8:30am', '12:30pm'],
    5: ['9:30am', '1:30pm'],
    6: ['10:30am', '2:30pm'],
    7: ['7:30am', '1:30pm'],
  }}
/>
    <TennisCourt
  imageUrl='../static/images/courseImg.jpg'
  courtNumber={3}
  schedule={{
    1: ['7:30am', '8:30am', '9:30am', '10:30am', '11:30am', '12:30pm', '1:30pm'],
    2: ['8:30am', '10:30am'],
    3: ['7:30am', '8:30am', '10:30am', '11:30am', '12:30pm'],
    4: ['8:30am', '12:30pm'],
    5: ['9:30am', '1:30pm'],
    6: ['12:30pm', '2:30pm'],
    7: ['7:30am', '1:30pm'],
  }}
/>
    <TennisCourt
  imageUrl='../static/images/courseImg.jpg'
  courtNumber={4}
  schedule={{
    1: ['7:30am', '8:30am', '9:30am', '10:30am', '11:30am', '12:30pm', '1:30pm'],
    2: ['8:30am', '10:30am'],
    3: ['7:30am', '8:30am', '10:30am', '11:30am', '12:30pm'],
    4: ['8:30am', '12:30pm'],
    5: ['7:30am', '10:30am', '11:30am', '12:30pm'],
    6: ['12:30pm', '2:30pm'],
    7: ['7:30am', '1:30pm'],
  }}
/>
</div>

    )
}

export default CourtsViewing;