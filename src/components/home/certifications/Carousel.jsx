import certifications from './data.json'

import React from 'react'
import Carousel from 'react-grid-carousel'

export const Gallery = () => {
  return (
    <Carousel cols={4} rows={1} gap={10} loop autoplay={5000}>
        {certifications.map((certification, index)=>(
                  <Carousel.Item>
                  <img width="100%" src={certification.url} />
                </Carousel.Item>
        ))}
    </Carousel>
  )
}
