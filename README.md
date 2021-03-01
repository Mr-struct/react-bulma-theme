# React bulma theme

react-bulma-theme is a component that wraps your app and provide bulma themes easly 

# Getting Started

## Installation

`yarn add react-bulma-theme`

or

`npm i react-bulma-theme`

## [DEMO](http://146.59.195.46:5000/profil)

## Usage 
 ### simple case : 
 App.tsx or .js
 ```JSX
 import React from "react";
 import ReactBulmaTheme from "react-bulma-theme";

const App = () => (
  <ReactBulmaTheme theme="minty">
    <MyApp>
  </ReactBulmaTheme>
);
```

### Using react context
ThemeSelector.tsx : simple theme selector wite bulma clases and fortawesome

```JSX
import React, {useContext} from "react";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {bulmaThemes, Theme, ThemeContext} from "react-bulma-theme";

const ThemeSelector: React.FC = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<div className="control has-icons-left">
			<div className="select is-info">
				<select onChange={({target}) => {
					themeContext.setTheme(target.value as Theme);
					localStorage.setItem("macaroniTheme", target.value);
				}}
				defaultValue={localStorage.getItem("macaroniTheme") || "default"}
				>
					{
						bulmaThemes.map(theme =>
							<option key={theme} value={theme}>{theme}</option>
						)
					}
				</select>
			</div>
			<div className="icon is-small is-left">
				<FontAwesomeIcon icon={faPalette} />
			</div>
		</div>
	);
};
export default ThemeSelector;
```

 App.tsx
 ```JSX
import React, {useContext} from "react";
import ReactBulmaTheme, {Theme, ThemeContext} from "react-bulma-theme";
import ThemeSelector from "./ThemeSelector"
const App = () => {
  
  const themeContext = useContext(ThemeContext);
  return (
			<ThemeContext.Provider value={{theme: themeContext.theme,
																		 setTheme: themeContext.setTheme}}
			>
				<BulmaThemeApp theme="minty">
      		<ThemeSelector>
    		</ReactBulmaTheme>
		</ThemeContext.Provider>
  );
```
