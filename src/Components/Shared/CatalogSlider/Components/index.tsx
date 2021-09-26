import Card from 'antd/lib/card';
import React from 'react'
import { CatalogItem } from '../../../../Contracts';

const CatalogCard = (props : CatalogItem) => {
    return (
        <Card
        hoverable
        className="catalog-card"
         >
        <div className="relative">
            <img src={props.image} />
            <div className="absolute bottom-1 left-2  catalog-card-content">
                <h1 className="font-semibold">{props.title}</h1>
                <h4>{props.subtitle}</h4>
            </div>
        </div>
    </Card>
    )
}

export default CatalogCard;