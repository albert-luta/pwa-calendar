const rgba = (rgb, alpha) => `rgba(${rgb.slice(4, rgb.length - 1)}, ${alpha})`;

const colors = {
	main: 'rgb(45,52,54)',
	mainHover: 'rgb(60, 70, 73)',
	white: 'rgb(253, 253, 253)',
	success: 'rgb(0, 184, 148)',
	error: 'rgb(214, 48, 49)',
	black: 'rgb(19, 19, 19)',
	trueBlack: 'rgb(0, 0, 0)'
};
const transitions = {
	speeds: {
		normal: '0.2s'
	}
};
const font = '"Roboto", sans-serif';
const breakpoints = {
	phone: '640px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '1280px'
};

export const lightTheme = {
	colors: {
		...colors,
		blackAlpha50: rgba(colors.trueBlack, 0.5),

		background: colors.white,
		text: colors.black,
		textAlpha05: rgba(colors.black, 0.05),
		textAlpha10: rgba(colors.black, 0.1),
		textAlpha50: rgba(colors.black, 0.5),
		textAlpha65: rgba(colors.black, 0.65)
	},
	transitions,
	font,
	breakpoints
};

export const darkTheme = {};
