const rgba = (rgb, alpha) => `rgba(${rgb.slice(4, rgb.length - 2)}, ${alpha})`;

const colors = {
	main: 'rgb(44, 44, 44)',
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

export const lightTheme = {
	colors: {
		...colors,
		background: colors.white,
		text: colors.black,
		textAlpha50: rgba(colors.black, 0.5)
	},
	transitions
};

export const darkTheme = {};
