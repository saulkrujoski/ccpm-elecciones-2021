import React from 'react';
import { Spinner } from 'react-bootstrap';

const fullScreenSpinner = (props) => {

	const isSpinnerDisplayed = false;

	const spinnerStyle = {
		position: 'fixed',
		width: '100%',
		height: '100%',
		margin: '0 -15px',
		display: 'flex',
		'justify-content': 'center',
		'align-items': 'center',
		'z-index': '999',
		'background-color': 'rgb(0,0,0,.3)'
	};

	return (
    <>
        { isSpinnerDisplayed ?
            <div style={spinnerStyle}>
                <Spinner animation="grow" size="lg" />
            </div>
            : null
        }
    </>
	);
};

export default fullScreenSpinner;