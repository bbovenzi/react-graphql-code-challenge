import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import 'styles/base.css';
import Results from 'components/Results'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1>Users</h1>
        <Results />
      </div>
    </ApolloProvider>
  )
};

export default App;
