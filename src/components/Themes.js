const rgba = (rgb, alpha) => `rgba(${rgb.slice(4, rgb.length - 2)}, ${alpha})`;

const colors = {
	main: 'rgb(45,52,54)',
	white: 'rgb(253, 253, 253)',
	success: 'rgb(0, 184, 148)',
	error: 'rgb(214, 48, 49)',
	black: 'rgb(19, 19, 19)'
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
		background: colors.white,
		text: colors.black,
		textAlpha50: rgba(colors.black, 0.5),
		textAlpha20: rgba(colors.black, 0.2)
	},
	transitions,
	font,
	breakpoints
};

export const darkTheme = {};
