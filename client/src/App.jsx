import "./app.scss";


import Modal from 'react-modal';
import Logina from "./components/LoginForm";
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const LazyLoading = React.lazy(() => import("./pages/register/Register"));
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
 // import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from   "./pages/myGigs/MyGigs";
 //import {AppoloProvider,AppoloClient ,InMemoryCache} from '@appolo/client'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
 
function App() {
//
 
 
//
/*const client =new AppoloClient({
uri:'https://demo.saleor.io/graphql/',
cache:new InMemoryCache()
})
*/
  const queryClient = new QueryClient();
 
  const Layout = () => {
   return (
      //<AppoloProvider client={client}>
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
          

        </QueryClientProvider>
      </div>
     // </AppoloProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/logina",
          element: <Logina />,
        },
         
      {
        
          path: "/add",
          element: <Add />,
          
  },
  
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
  element: 
  
  <React.Suspense fallback={<div>Loading...</div>}>
  <LazyLoading />
</React.Suspense>
 
  
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;