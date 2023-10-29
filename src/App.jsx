import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage"
import { DetailsFood } from "./pages/DetailsFood"
import LoginPage from "./pages/LoginPage"
import CategoryPage from "./pages/CategoryPage"
import AreaPage from "./pages/AreaPage"


function App() {
 

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/detail/:id" element={<DetailsFood/>}/>
            <Route path="/category/:makanan" element={<CategoryPage/>}/>
            <Route path="/area/:area" element={<AreaPage/>}/>
            <Route path="/login/:id" element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
