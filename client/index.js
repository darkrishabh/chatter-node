/**
 * Created by hangvirus on 23/10/16.
 */
import React from 'react';
import { render } from 'react-dom';


let App = React.createClass({
    componentDidMount: function(){
        console.log("Hi baby")
    },
    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
});

render(<App/>, document.querySelector('.main'));