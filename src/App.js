import Hero from './components/Hero'
import Introducing from './components/Introducing'
import Roll from './components/Roll'
import ComingSoon from './components/ComingSoon'
import Waitlist from './components/Waitlist'
import Roadmap from './components/Roadmap'
import Header from './components/Header'
import Firstvid from './components/Firstvid'

function App() {
  return (
    <div className="App overflow-x-clip">
      <Header />
      <Hero />
      <Introducing />
      <Firstvid />
      <Roll />
      <ComingSoon />
      <Waitlist />
      <Roadmap />
    </div>
  );
}

export default App;
