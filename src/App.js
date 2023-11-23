import './App.css'
import Header from './Header'
import Hero from './Hero'
import Blocks from './Blocks'
import Description from './Description'
import Quote from './Quote'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Description />
        <Blocks />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}

export default App;
