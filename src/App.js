// 44. Sử dụng CSS trong dự án ReactJS | CSS trong phản ứng
// import Heading from './component/Heading'
// import Paragraph from './component/Paragraph'
// import GlobolStyles from './component/GlobalStyles'

// function App(){
//   return (
//     <GlobolStyles>
//     <div style={{ padding: '0 32px'}}>
//       <Heading/>
//       <Paragraph/>
//     </div>
//     <div className='d-flex'>
//       <div>Item 1</div>
//       <div>Item 2</div>
//     </div>
//     </GlobolStyles>
//   )
// }


//45, 46 Thư viện clsx và classnames | Sử dụng nhiều class & class động trong ReactJS
// import Button from "./component/Button"
// import GlobolStyles from "./component/GlobalStyles"
// function App(){
//   return(
//     <GlobolStyles>
//     <div style={{ padding: '10px 32px'}}>
//       <Button />
//       <Button primary/>
//       <Button primary disabled/>
//     </div>
//     </GlobolStyles>
//   )
// }


//48: Bộ định tuyến phản ứng V6 | Thư viện React router dom | Định tuyến trong ReactJS
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'
import { Link } from 'react-router-dom'
function App(){
  return(
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}
 export default App