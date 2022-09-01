import GlobalStyled from "./GlobalStyled"
import { Banner } from "./Components/Banner/Banner"
import { Main } from "./Components/Main/Main"
import { Footer } from "./Components/Footer/Footer"

function App() {
  return (
      <div>
        <GlobalStyled />
        <Banner />
        <Main />
        <Footer />
      </div>
  )
}

export default App
