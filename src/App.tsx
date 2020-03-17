import React from 'react';
import './App.css';
import ApolloProvider from 'react-apollo/ApolloProvider';
import {ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks';
import {client} from "./graphql";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/Home";

export const HOME = '/';

function App() {
  return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <BrowserRouter>
              <Route path={HOME} component={Home} />
          </BrowserRouter>
        </ApolloHooksProvider>
      </ApolloProvider>
  );
}

export default App;
