import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';

render(<>
    <GlobalStyles />
    <App />, 
    </>,
    document.getElementById('root'));