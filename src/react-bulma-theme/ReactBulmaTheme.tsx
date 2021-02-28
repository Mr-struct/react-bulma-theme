import React, { useState } from "react";

/**
 * List of bulma theme that are present in https://jenil.github.io/bulmaswatch/
 */
export const bulmaThemes = [
	"default",
	"cerulean",
	"cosmo",
	"cyborg",
	"darkly",
	"flatly",
	"journal",
	"litera",
	"lumen",
	"lux",
	"materia",
	"minty",
	"nuclear",
	"pulse",
	"sandstone",
	"simplex",
	"slate",
	"solar",
	"spacelab",
	"superhero",
	"united",
	"yeti"] as const;

export type Theme = typeof bulmaThemes[number];

export type BulmaThemeAppProps = {
	/**
	 * Current theme default value is "default"
	 */
	theme?: Theme,
	/**
	 * Additional className default value is empty string
	 */
	className?:string,
}

type context = {
	/**
	 * Current theme default value is "default"
	 */
	theme: Theme,
	/**
	 * Function that can be used to change the theme
	 * @param theme 
	 */
	// eslint-disable-next-line @typescript-eslint/ban-types
	setTheme:(theme:Theme)=> void
}

export const ThemeContext = React.createContext<context>({
	theme: "default",
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setTheme: (theme: Theme) => {}
}
);

/**
 * hooks that init default theme and return a Theme context
 * @param defaultTheme 
 */
export const useSelectBulmaTheme = (defaultTheme: Theme) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	const setThemeContext = (themeContext: Theme) => setTheme(themeContext);
	return {theme, setThemeContext};
};

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