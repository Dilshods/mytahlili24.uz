import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage";
import NewsContent from "./components/newsImportant/NewsContent.jsx";
import Culture from "./components/culture/Culture";
import Category from "./components/category/category";
import Main from "./components/newsBaytag/Main";
import MostNewsViewed from "./components/mostviewednews/Mostviewnews";
import Fedback from "./components/contacts/Fedback";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepages />
          </Route>
          <Route path="/singlepage/:id">
            <SinglePage />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
          <Route path="/news/:id" component={Culture} />
          <Route path="/newsbytag/:id" component={Main} />
          <Route path="/uz/importantnews">
            <NewsContent />
          </Route>
          <Route path="/uz/mostviewednews">
            <MostNewsViewed />
          </Route>
          <Route path="/uz/contact">
            <Fedback />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
