import { CryptoDetails , News} from './components'
import Home from './Pages/Home'
import CryptoPage from './Pages/CryptoPage'
import NewsPage from './Pages/NewsPage'
let routes=[
    {path:'/', element:<Home />},
    {path:'/home', element:<Home />},
    {path:'/Cryptocurrency' , element:<CryptoPage />},
    {path:'/crypto/:coinid' , element:<CryptoDetails />},
    {path:'/news' , element:<NewsPage />}
]

export default routes