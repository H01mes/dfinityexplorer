/**
 * @file globalStyle
 * @copyright Copyright (c) 2018-2019 Dylan Miller and dfinityexplorer contributors
 * @license MIT License
 */

import { createGlobalStyle } from 'styled-components';
import Constants from '../constants';

/**
 * StyledComponent that handles global styles.
 */
export const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colorBodyBackground};
   }
`;

/**
 * The styled-components ThemeProvider light theme.
 */
export const themeLight = {
  // Should use constants for all!!!
  isDark: false,
  colorAboutBackgroundPrimary: 'white',
  colorAboutBackgroundSecondary: '#F8F9FA', // Google Analytics (verified), Wikipedia (verified)
  //!!!colorAboutBackgroundSecondary: '#FAFAFA', // YouTube (verified), Google Translate (verified), DFINITY
  colorAboutButtonBackground: '#007DBC',
  colorAboutButtonText: Constants.COLOR_TEXT_LIGHT,
  colorAboutButtonHoverBackground: '#009DDD',
  colorAboutButtonHoverText: Constants.COLOR_TEXT_LIGHT,
  colorAboutHeaderText: 'white',
  colorAboutTwitterBackground: 'white',
  colorAppBarBackground: 'white',
  colorAppBarTextButton: Constants.COLOR_LIGHT_TEXT_FADED, // (#4D4D4D)
  colorAppBarButtonHover: 'black',
  colorAppBarDfinityText: 'black', // consider matching to colorBodyText!!!
  colorAppBarExplorerText: '#007DBC', //'#F98E00', // use constant for "500" version of light orange!!! //'#FA9F00', is 400
  colorBodyBackground: '#F8F9FA', // Wikipedia (verified)
  colorBodyText: '#202124', // Google text (verified)
  colorBodyTextDim: Constants.COLOR_LIGHT_BODY_TEXT_DIM_GOOGLE,
  colorBodyTextLink: '#007DBC',
  // It seems odd to use an array for the icon color, but not the background color. Could remove array completely if not needed!!!
  colorDashCardDBackground: 'white',//'#F07200', //'#D54C1C', //'#E3531F', //'#D54C1C', //'#BB4015', //Constants.COLOR_TWITTER_BLUE,
  colorDashCardCBackground: 'white',//'#C40059', //'#AF0056', //'#C40059', //'#AF0056', //'#89004F', //Constants.COLOR_TWITTER_PURPLE,
  colorDashCardBBackground: 'white',//'#722B8D', //'#632684', //'#722B8D', //'#632684', //'#471E73', //Constants.COLOR_TWITTER_GREEN,
  colorDashCardABackground: 'white',//'#007DBC', //'#006DA8', //'#004E88', //Constants.COLOR_TWITTER_ORANGE,
  // Remove extraneous colorDashCardIcon settings once finalized!!!
  //!!!colorDashCardIcon: ['#007DBC', '#722B8D', '#C40059', '#F07200'],
  //!!!colorDashCardIcon: ['rgba(0, 125, 188, 1)', 'rgba(114, 43, 141, 0.8)', 'rgba(196, 0, 89, 0.8)', 'rgba(240, 114, 0, 0.8)'],
  //!!!colorDashCardIcon: ['#007DBC', '#843196', '#DA005E', '#F68200'],
  colorDashCardIcon: ['#007DBC', '#9440A6', '#DA005E', '#F79308'], // Ori's purple and orange
  // Actual DFINITY symbol colors.
  //!!!colorDashCardIcon: ['rgb(41, 171, 226)', 'rgb(99, 38, 132)', 'rgb(237, 30, 121)', 'rgb(251, 176, 59)'],
  colorDashCardIconOpacity: 1.0,
  colorDrawerBackground: 'white',
  colorDrawerDivider: Constants.COLOR_LIGHT_DRAWER_DIVIDER_GOOGLE,
  colorDrawerIcon: Constants.COLOR_LIGHT_DRAWER_ICON_GOOGLE,
  colorDrawerIconTextSelected: '#007DBC',//!!!Constants.COLOR_DFINITY_BLUE,
  colorDrawerText: Constants.COLOR_LIGHT_DRAWER_TEXT_GOOGLE,
  colorChartBackground: 'white',
  colorChartTooltipBackground: 'rgba(255, 255, 255, 0.96)',
  colorChartAxes: Constants.COLOR_LIGHT_BODY_TEXT_DIM_GOOGLE,
  colorChartGrid: Constants.COLOR_LIGHT_DRAWER_DIVIDER_GOOGLE,
  colorChartText: Constants.COLOR_LIGHT_BODY_TEXT_DIM_GOOGLE,
  colorChartLine: '#007DBC',
  colorChartActiveDotStroke: 'white',
  colorTableBackgroundPrimary: 'white',
  colorTableRowBorder: Constants.COLOR_LIGHT_DRAWER_DIVIDER_GOOGLE, // Google Maps drawer divider (verified)
  colorTableTextDim: '#909090', // YouTube, footer text dim (verified)
  colorFooterBackground: '#F5F5F5',
  colorFooterTextIcon: '#909090', // YouTube (verified)
  colorFooterIconHover: 'white',
  colorSearchText: '#202124', // Google text (verified)
  colorSearchIcon: '#9E9E9E' //  Material Design icon(verified)
}

/**
 * The styled-components ThemeProvider dark theme.
 */
export const themeDark = {
  isDark: true,
  // Remove any of these colorAbout's that aren't used!!!
  // These two colors are actually pretty close to DFINITY darker and dark!!!
  colorAboutBackgroundPrimary: '#1B1B1B', // MacOS Finder, etc.
  colorAboutBackgroundSecondary: '#262626', // MacOS Finder
  colorAboutButtonBackground: '#007DBC',
  colorAboutButtonText: '#DCDCDC',
  colorAboutButtonHoverBackground: '#009DDD',
  colorAboutButtonHoverText: Constants.COLOR_TEXT_LIGHT,
  colorAboutHeaderText: 'white',
  colorAboutTwitterBackground: '#262626',
  colorAppBarBackground: '#262626', //!!!Constants.COLOR_DFINITY_BLACK,
  colorAppBarTextButton: Constants.COLOR_DARK_TEXT_FADED,
  colorAppBarButtonHover: Constants.COLOR_DARK_TEXT,
  colorAppBarDfinityText: Constants.COLOR_DARK_TEXT,
  colorAppBarExplorerText: Constants.COLOR_DFINITY_LIGHT_ORANGE, // '#0090CF'!!!
  colorBodyBackground: '#1B1B1B', // MacOS Finder, etc.
  colorBodyText: '#DCDCDC', // MacOS Calendar, iTunes
  colorBodyTextDim: '#DCDCDC', // MacOS Calendar, iTunes
  colorBodyTextLink: '#0090CF',
  colorDashCardABackground: '#262626', //!!!Constants.COLOR_DFINITY_BLACK,
  colorDashCardBBackground: '#262626', //!!!Constants.COLOR_DFINITY_BLACK,
  colorDashCardCBackground: '#262626', //!!!Constants.COLOR_DFINITY_BLACK,
  colorDashCardDBackground: '#262626', //!!!Constants.COLOR_DFINITY_BLACK,
  colorDashCardIcon: ['white', 'white', 'white', 'white'],
  colorDashCardIconOpacity: 0.5,
  colorDrawerBackground: '#262626', //!!!Constants.COLOR_DFINITY_BLACK,
  colorDrawerDivider: Constants.COLOR_DARK_DRAWER_DIVIDER_YOUTUBE,
  colorDrawerIcon: Constants.COLOR_DARK_TEXT_FADED,
  colorDrawerIconTextSelected: 'white',
  colorDrawerText: Constants.COLOR_DARK_TEXT_FADED,
  colorChartBackground: '#262626',
  colorChartTooltipBackground: 'rgba(38, 38, 38, 0.96)',
  colorChartAxes: '#808080',
  colorChartGrid: Constants.COLOR_DARK_DRAWER_DIVIDER_MAC_OS,
  colorChartText: Constants.COLOR_DARK_TEXT_FADED,
  colorChartLine: '#0090CF',
  colorChartActiveDotStroke: '#262626',
  colorTableBackgroundPrimary: '#262626', // MacOS Finder
  colorTableRowBorder: Constants.COLOR_DARK_DRAWER_DIVIDER_YOUTUBE,
  colorTableTextDim: '#717171', // YouTube (Dark), footer text dim (verified)
  colorFooterBackground: '#262626', //!!!Constants.COLOR_DFINITY_BLACK
  colorFooterTextIcon: '#808080', // Netflix (verified)
  colorFooterIconHover: 'white',
  colorSearchText: '#202124', // Google text (verified)
  colorSearchIcon: '#9E9E9E' //  Material Design icon (verified)
}
