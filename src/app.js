import React from 'react';
import { JumbotronContainer } from '../src/containers/jumbotron';
import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';

export default function App() {
  return( 
  <>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
  </>
  );
}
