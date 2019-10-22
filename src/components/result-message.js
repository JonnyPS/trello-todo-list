import React, { Component } from 'react';

function ResultMessage(props) {
	return 	<div className={props.classvalue}><p>{props.message}</p></div>
}

export default ResultMessage;