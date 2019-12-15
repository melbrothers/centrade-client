import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './sectionbox.styles.scss';

const SectionBox = ({ title1, title2, bgColor, fontColor, btnText, otherStyles, imgUrl, altText }) => (
  <div my={4} color='text.primary' style={{ backgroundColor: bgColor ? bgColor : 'inherit', color: fontColor ? fontColor : 'white' }} className={`section ${bgColor ? 'withBgColor' : 'white'} ${otherStyles ? otherStyles : ''}`}>
    <div className='title-block'>
      <Typography variant="h3" component="h1" gutterBottom className='title1'>
        {title1 ? title1 : ''}
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom className='title2'>
        {title2 ? title2 : ''}
      </Typography>

    </div>
    <div className={`image-block ${imgUrl ? '' : 'hide'}`} >
      <img src={imgUrl} alt={altText ? altText : 'image alt'} />
    </div>
    {
      btnText ? <Button ariant="contained" className='section-btn'>{btnText}</Button> : null
    }

  </div>
);

export default SectionBox;

