import Hero from './components/Hero'
import Introducing from './components/Introducing'
import Roll from './components/Roll'
import Comingsoon from './components/Comingsoon'
import Waitlist from './components/Waitlist'
import Parts from './components/Parts'
import Footer from './components/Footer'
import Header from './components/Header'
import Firstvid from './components/Firstvid'

function App() {
  return (
    <div className="App overflow-x-clip d">

      <Header />

      <Hero />
      <Introducing />
      <Firstvid />
      <Roll />
      <Comingsoon />
      <Waitlist />

      <Parts />
      <Footer />
    </div>
  );
}

export default App;
