/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	], theme: {
		extend: {
			colors: {
				borderBtnPrimaryGreen: '#50FFA0',
				borderBtnPrimaryBlue: '#3ADCFF',
				borderBtnPrimaryRed: '#FF133E',
				textRed: '#FF1B51',
				textBlue: '#2CCCFF',
				textGreen: '#2CFFC0',
				textSelectedMenu: '#53B9EA',
				textDisabledMenu: '#363448',
				textMain: '#FFFFFF',
				textGridGreen: '#50FFA0',
				textGridYellow: '#FFE296',
				textGridBlue: '#2CCCFF',
				subTitle: 'rgba(255, 255, 255, 0.29)'
			},
			backgroundImage: {
				gradientBtnPrimaryGreen: 'linear-gradient(92deg, rgba(80, 255, 160, 0.21) -6.07%, rgba(80, 255, 160, 0.00) 98.63%)',
				gradientBtnPrimaryBlue: 'linear-gradient(92deg, rgba(58, 220, 255, 0.21) -6.07%, rgba(58, 220, 255, 0.00) 98.63%)',
				gradientBtnPrimaryRed: 'linear-gradient(92deg, rgba(255, 19, 62, 0.21) -6.07%, rgba(255, 19, 62, 0.00) 98.09%)',
				gradientBtnSecondaryGreen: 'linear-gradient(92deg, rgba(80, 255, 160, 0.21) -6.07%, rgba(80, 255, 160, 0.00) 98.63%)',
				gradientBtnSecondaryBlue: 'linear-gradient(92deg, rgba(94, 139, 255, 0.21) -6.07%, rgba(94, 139, 255, 0.00) 98.09%) ',
				gradientSecondaryRed: 'linear-gradient(92deg, rgba(255, 19, 62, 0.21) -6.07%, rgba(255, 19, 62, 0.00) 98.09%)',
				imgBg: 'url(/src/assets/background.svg)',
				notify: 'linear-gradient(180deg, #FF40A5 0%, #E14CD1 100%)',
				alert: '#FFBD13',
				btnDisabled: 'rgba(54, 57, 72, 0.19)',
				bgContrast: 'rgba(17, 19, 31, 0.45)',
				bgSelectMenu: '#53B9EA',

			},
			fontFamily: {
				oxanium: ['Oxanium', 'sans-serif']
			}
		},
	},
	plugins: [],
};

