/*

Some style props include default, fallback scales if not defined in the theme object.

// Default Breakpoints
const breakpoints = ['40em', '52em', '64em']
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

// default space for margin and padding
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

*/

import '@csstools/normalize.css';

const theme = {
	// from the application theme, used in components
	colors: {
		primary: '#2266DD',
		primaryButton: '#124CB1',
		primaryButtonHover: '#0B3B8E',
		primaryButtonText: '#FFFFFF',
		primaryText: '#333333',
		secondary: '#999999',
		secondaryButton: '#EBEBEB',
		secondaryButtonHover: '#D9D9D9',
		secondaryButtonText: '#124CB1',
		secondaryText: '#666666',
		destructiveButton: '#B00000',
		destructiveButtonHover: '#8C0000',
		destructiveButtonHoverText: '#FFFFFF',
		background: '#FFFFFF',
		toolTipBackground: '#000',
		toolTipText: '#FFFFFF',
		overlay: '#000',
		mapNavBackground: '#333333',
		mapNavText: '#FFFFFF',
		mapNavSearchResults: '#9D3800',
		mapNavSearchResultsText: '#FFFFFF',
		widgetBackground: '#F9F9F9',
		widgetText: '#333333',
		widgetIcons: '#333333',
		myLocationPrimaryButton: '#2266DD',
		myLocationPrimaryButtonHover: '#124CB1',
		myLocationSecondaryButton: '#666666',
		myLocationSecondaryButtonHover: '#333333',
		adminMarkerText: '#4d4563',
		adminMarkerStroke: '#FFFFFF',
		programmaticPinMarkersText: '#4d4563',
		programmaticPinMarkersStroke: '#FFFFFF',
		miscBadgeIconColor: '#FFFFFF',
		miscBadgeIconStroke: '#FFFFFF',
		miscBadgeDynamicLabelColor: '#596FA3',
		miscBadgeDynamicLabelStroke: '#FFFFFF',
		miscBadgePinColor: '#215FEB',
		miscBadgePinStroke: '#18419C',
		miscWayfindingStartColor: '#404A59',
		miscWayfindingStartStroke: '#000000',
		miscWayfindingStartGhostColor: '#C1C1C1',
		miscWayfindingStartGhostStroke: '#404A59',
		statusAlertBackground: '#B00000',
		statusAlertText: '#FFFFFF',
		statusActiveBackground: '#00662B',
		statusActiveText: '#FFFFFF',
		statusInfoBackground: '#005B94',
		statusInfoText: '#FFFFFF',
		statusWarningBackground: '#9D3800',
		statusWarningText: '#FFFFFF',
		statusInactiveBackground: '#ebebeb',
		statusInactiveText: '#333333',
		statusSuccessBackground: '#00662B',
		statusSuccessText: '#FFFFFF',
		statusErrorBackground: '#B00000',
		statusErrorText: '#FFFFFF',
		categoryBadgeArt: '#525466',
		categoryBadgeBaggage: '#525466',
		categoryBadgeCheckin: '#525466',
		categoryBadgeConvention: '#60C28F',
		categoryBadgeEat: '#58C173',
		categoryBadgeEntertainment: '#A386DB',
		categoryBadgeEquipment: '#525466',
		categoryBadgeExit: '#2AA74B',
		categoryBadgeGambling: '#A386DB',
		categoryBadgeGate: '#596FA3',
		categoryBadgeInactive: '#909090',
		categoryBadgeHotel: '#525466',
		categoryBadgeMeeting: '#60C28F',
		categoryBadgeOffice: '#6C87BB',
		categoryBadgeParking: '#525466',
		categoryBadgePortal: '#525466',
		categoryBadgeRecreation: '#A386DB',
		categoryBadgeRelax: '#A386DB',
		categoryBadgeRestroom: '#FF9F48',
		categoryBadgeRoom: '#5C8BE0',
		categoryBadgeSecurity: '#DC4747',
		categoryBadgeServices: '#525466',
		categoryBadgeShop: '#59A6ED',
		categoryBadgeTicketing: '#525466',
		categoryBadgeTransport: '#525466',
		categoryBadgeWayfinding: '#E2611A',
		categoryBadgeWorkstation: '#85B0E2',
	},

	// Unique to components
	fonts: {
		default: "'Roboto', sans-serif",
	},
	radii: {
		none: '0',
		xs: '1px',
		sm: '2px',
		md: '4px',
		lg: '8px',
		full: '9999px',
	},

	borders: {
		none: 0,
		xs: '1px solid',
		sm: '2px solid',
		md: '4px solid',
		lg: '8px solid',
	},

	borderWidths: {
		sm: '1px',
		md: '2px',
	},

	letterSpacings: {
		sm: '0.5px',
		md: '1px',
		lg: '2px',
	},

	breakpoints: {
		xs: 0,
		sm: 480,
		md: 736,
		lg: 980,
		xl: 1280,
	},

	shadows: {
		md: '0px 2px 4px rgba(0, 0, 0, 0.2)',
		lg: '0px 6px 10px 0 rgba(0, 0, 0, 0.2)',
		xl: '0px 2px 12px 0 rgba(0, 0, 0, 0.2)',
		xxl: '0px 0px 20px 0 rgba(0, 0, 0, 0.2)',
	},

	fontSizes: {
		sm: '12px',
		md: '14px',
		lg: '16px',
		xl: '20px',
		xxl: '32px',
	},

	iconSizes: {
		sm: '24',
		md: '32',
		lg: '36',
		xl: '40',
		xxl: '48',
	},

	narrowIconSizes: {
		sm: '16',
		md: '20',
		lg: '24',
		xl: '26',
		xxl: '32',
	},

	/* icons are loaded from: */
	iconBaseURL: 'https://content.locuslabs.com/ds-assets/icons/',
	/* this is an example of how to make local icons work */
	icons: {
		'2d': {
			path: (
				<g fill="currentColor">
					<path d="M10.9258 18.5H14.75V17.7422H12.1094L13.5 16.2539C13.8646 15.8581 14.1263 15.5052 14.2852 15.1953C14.4466 14.8828 14.5273 14.5846 14.5273 14.3008C14.5273 13.8112 14.3672 13.4284 14.0469 13.1523C13.7292 12.8737 13.2943 12.7344 12.7422 12.7344C12.3594 12.7344 12.0208 12.8112 11.7266 12.9648C11.4349 13.1185 11.2096 13.3346 11.0508 13.6133C10.8945 13.8893 10.8164 14.2005 10.8164 14.5469H11.7656C11.7656 14.2214 11.8503 13.9648 12.0195 13.7773C12.1888 13.5898 12.4271 13.4961 12.7344 13.4961C12.9922 13.4961 13.1966 13.5794 13.3477 13.7461C13.5013 13.9128 13.5781 14.1315 13.5781 14.4023C13.5781 14.6081 13.5195 14.8138 13.4023 15.0195C13.2878 15.2227 13.0938 15.4766 12.8203 15.7812L10.9258 17.8477V18.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15.625 12.8125V18.5H17.2617C17.7747 18.5 18.2292 18.3893 18.625 18.168C19.0234 17.9466 19.3294 17.6315 19.543 17.2227C19.7591 16.8138 19.8672 16.3398 19.8672 15.8008V15.5156C19.8672 14.9844 19.7604 14.513 19.5469 14.1016C19.3333 13.6901 19.0312 13.3724 18.6406 13.1484C18.2526 12.9245 17.8073 12.8125 17.3047 12.8125H15.625ZM16.6133 17.7109V13.6094H17.3047C17.8151 13.6094 18.2044 13.7721 18.4727 14.0977C18.7409 14.4232 18.875 14.8945 18.875 15.5117V15.8281C18.8698 16.4349 18.7279 16.901 18.4492 17.2266C18.1732 17.5495 17.776 17.7109 17.2578 17.7109H16.6133Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15.5 5C9.70101 5 5 9.70101 5 15.5C5 21.299 9.70101 26 15.5 26C21.299 26 26 21.299 26 15.5C26 9.70101 21.299 5 15.5 5ZM6 15.5C6 10.2533 10.2533 6 15.5 6C20.7467 6 25 10.2533 25 15.5C25 20.7467 20.7467 25 15.5 25C10.2533 25 6 20.7467 6 15.5Z"
					/>
				</g>
			),
		},
	},
};

export default theme;
