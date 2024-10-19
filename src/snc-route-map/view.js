import React from "react";
import ReactDOM from "react-dom";
import MapComponent from "./Map";

import "./styles.scss";
import "./Map.css"


export default function RouteMapComponent(state) {
	const { dispatch, helpers, properties } = state;
	const { test, count } = properties

	return (
		<div className="snc-route-map">
			<MapComponent />
		</div>
	);
}