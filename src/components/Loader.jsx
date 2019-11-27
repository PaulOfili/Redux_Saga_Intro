import React from 'react';
import loader_gif from '../loader-spinner.gif';
import {connect} from 'react-redux';

const Loader = ({loading}) => {
    return loading ?
        (<div className="App">
            <img src={loader_gif} alt='loading' />
        </div>)
    :   null
};

function mapStateToProps(state) {
    return {
        loading: state.loading
    }
}
export default connect(mapStateToProps, null)(Loader);
