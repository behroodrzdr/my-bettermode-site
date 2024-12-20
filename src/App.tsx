import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import client from "./apollo-client";
import Layout from "@/components/Layout";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
