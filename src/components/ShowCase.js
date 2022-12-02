import React from 'react';
import '../App.css';

function ShowCase() {
	return (
		<ul className="ShowCase">
			<li>
				<small className="selected">Occupied</small>
			</li>
			<li>
				<small className="notSelected">Not Occupied</small>
			</li>
		</ul>
	);
}
export default ShowCase;
