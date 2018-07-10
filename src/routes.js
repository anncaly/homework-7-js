import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Counter from "./components/Counter";
import PostsListContainer from "./containers/PostsListContainer.jsx";

export default [
  { path: '/',
  	component: PostsListContainer,
    exact: true,
  },
  { path: '/counter',
  	component: Counter,
    exact: true,
  },
]