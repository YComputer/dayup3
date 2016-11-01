import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import FlashMessageContainer from './flash/FlashMessageContainer';

class App extends React.Component{

    render() {
        return(
            <div className="container">
                <NavigationBar />
                <FlashMessageContainer />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default App;