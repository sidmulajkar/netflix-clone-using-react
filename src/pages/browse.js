import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
    //we need the series and films also we need slides
    

    const { films } = useContent('films');
    const { series } = useContent('series');
    //the api works need to work on browse page new timestamp at 4:57:54

    const slides = selectionFilter({ series, films });
    //pass it to the browse container
    return <BrowseContainer slides={slides} />;

}

