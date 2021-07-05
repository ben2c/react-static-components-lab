import CatComponent from './CatComponent.js';
import { GraceHopperQuoteComponent } from './GraceHopperQuoteComponent.js';
import MouseComponent from './MouseComponent.js';
import React, { Component } from 'react';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
