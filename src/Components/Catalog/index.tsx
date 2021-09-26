import React from 'react'
import { CatalogItem } from '../../Contracts'
import CatalogSlider from '../Shared/CatalogSlider'
import { list1, list2 } from './data'



const Catalog = () => {
    
    return (
        <div className="catalog my-10 mt-24" id="catalog">
            <div className="container mx-auto">
                <h4 className="catalog-subsection-head mb-6 text-center sm:text-left">Men's Eyeglasses | Top Collections</h4>
                <CatalogSlider list={list1} />
                <h4 className="catalog-subsection-head mb-6 mt-24 text-center sm:text-left">Women's Eyeglasses | Top Collections</h4>
                <CatalogSlider list={list2} />
            </div>
        </div>
    )
}

export default Catalog