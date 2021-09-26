import Carousel from 'antd/lib/carousel'
import React from 'react'
import { CatalogItem } from '../../../Contracts'
import useWindowSize from '../../../Hooks/useWindowSize'
import CatalogCard from './Components'

const CatalogSlider = (props : {list: Array<CatalogItem>}) => {

    const windowSize = useWindowSize()

    const output = props.list.map((v) => <div className="flex justify-center"  style={{display:'flex'}}>
        <CatalogCard {...v} />
    </div>)

    return windowSize.width && windowSize.width > 400 ?  (
        <div className="grid grid-cols-4">
        {output}
        </div>
    ) : (<Carousel autoplay dotPosition="top" >
        {output}
    </Carousel>)
}

export default CatalogSlider