import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCard from './TinderCard';

function App() {
	return (
		// BEM class nameing convention
    	<div className="app">
			  {/* Header */}
			  <Header />
			  {/* Tender-Cards */}
			  <TinderCard />
			  {/* Swipe Buttons */}
			  <SwipeButtons />
    	</div>
  	);
}

export default App;
