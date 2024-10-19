import { createCustomElement } from "@servicenow/ui-core";
import react from "@quixomatic/ui-renderer-react";

import styles from "./styles.scss";
import view from "./view";

createCustomElement("snc-route-map", {
	renderer: { type: react },
	view,
	properties: {},
	actionHandlers: {},
	styles
});