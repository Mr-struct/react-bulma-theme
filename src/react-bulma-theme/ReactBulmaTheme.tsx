import React from "react";
import { BulmaThemeAppProps, Theme, ThemeContext, useSelectBulmaTheme } from "../index";

// eslint-disable-next-line react/prop-types
const ReactBulmaTheme: React.FC<BulmaThemeAppProps> = ({ theme = "default", children, className = "" }) => {
	const themeContext = useSelectBulmaTheme(theme);
	return(
		<ThemeContext.Provider value={{theme:themeContext.theme, setTheme:themeContext.setThemeContext}}>
			<div className={className}>
				<link media="all" rel="stylesheet" href={`https://jenil.github.io/bulmaswatch/${themeContext.theme}/bulmaswatch.min.css`}/>
				{children}
			</div>
		</ThemeContext.Provider>);
};
export default ReactBulmaTheme;