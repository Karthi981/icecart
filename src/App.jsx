
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './page/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from './page/ContactPage'
import ProductListing from './page/ProductListing'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductListing />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
