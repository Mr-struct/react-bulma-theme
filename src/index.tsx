import { useState } from "react";
import ReactBulmaTheme from "./react-bulma-theme/ReactBulmaTheme";

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

/**
 * hooks that init default theme and return a Theme context
 * @param defaultTheme 
 */
export const useSelectBulmaTheme = (defaultTheme: Theme) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	const setThemeContext = (themeContext: Theme) => setTheme(themeContext);
	return {theme, setThemeContext};
};

type Context = {
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

export const ThemeContext = React.createContext<Context>({
	theme: "default",
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setTheme: (theme: Theme) => { }
});

export default ReactBulmaTheme;