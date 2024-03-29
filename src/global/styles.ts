import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;

  ::-webkit-scrollbar {
    display: flex;
    width: 12px;
    background:transparent;;
    padding: 2px;
}
::-webkit-scrollbar-thumb {
  display: flex;

  background: var(--grey-4);
  border-radius:6px;
  margin: 2px;
  border: 2px solid var(--grey-6);
}

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul, li {
	list-style: none;
  display: flex;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
  overflow-x:hidden ;
  background-color: #DEE2E6;
  background-image: url("bg-img1.png");
  /* background-image:url("pexels-kaique-rocha-561654.jpg"); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  /* background-size: 100svw; */

  ::-webkit-scrollbar {
    display: flex;
  width: 12px;
  background: var(--grey-6);;
  padding: 2px;
}
::-webkit-scrollbar-thumb {
  display: flex;

  background: var(--grey-4);
  border-radius:4px;
  margin: 2px;
  border: 2px solid var(--grey-6);
}



}
a{
  text-decoration: none;
  cursor: pointer;
}
button{
  cursor: pointer;
  outline: none;
}


  :root {
    --color-brand-1: #4529e6;
    --color-brand-2: #5126EA;
    --color-brand-3: #b0a6f0;
    --color-brand-4: #edeafd;

    /* grey scale */
    --grey-0:  #0B0D0D;
    --grey-1:  #212529;
    --grey-2:  #495057;
    --grey-3:  #868E96;
    --grey-4:  #ADB5BD;
    --grey-5:  #ADB5BD;
    --grey-6:  #DEE2E6;
    --grey-7:  #E9ECEF;
    --grey-8:  #F1F3F5;
    --grey-9:  #F8F9FA;
    --grey-10: #FDFDFD;

    --white-fixed: #FFFFFF;

    /* alerts */
    --alert-1: #cd2b31;
    --alert-2: #fdd8d8;
    --alert-3: #ffe5e5;

    /* success */
    --success-0: lime;
    --success-1: #18794e;
    --success-2: #ccebd7;
    --success-3: #ddf3e4;

    /* color random profile */
    --orange: #ff6600;
    --yellow-1: #ffcc00;
    --yellow-2: #ffd42a;
    --random-1 : #e34d8c;
    --random-2 : #c04277;
    --random-3 : #7d2a4d;
    --random-4 : #7000ff;
    --random-5 : #6200e3;
    --random-6 : #36007d;
    --random-7 : #349974;
    --random-8 : #2a7d5f;
    --random-9 : #153d2e;
    --random-10 :#6100ff;
    --random-11 :#5700e3;
    --random-12 :#30007d;

    --transparent-black: linear-gradient(180deg, #0000004a 0%, #000000 100%);

    //Typography

    --heading-1-700 : 700 44px 'Lexend', sans-serif;
    --heading-2-600 : 600 36px 'Lexend', sans-serif;
    --heading-3-600 : 600 32px 'Lexend', sans-serif;
    --heading-3-500 : 500 32px 'Lexend', sans-serif;
    --heading-4-600 : 600 28px 'Lexend', sans-serif;
    --heading-4-500 : 500 28px 'Lexend', sans-serif;
    --heading-5-600 : 600 24px 'Lexend', sans-serif;
    --heading-5-500 : 500 24px 'Lexend', sans-serif;
    --heading-6-600 : 600 20px 'Lexend', sans-serif;
    --heading-6-500 : 500 20px 'Lexend', sans-serif;
    --heading-7-600 : 600 16px 'Lexend', sans-serif;
    --heading-7-500 : 500 16px 'Lexend', sans-serif;

    --body-1-400: 400 16px 'Inter',sans-serif;
    --body-1-600: 600 16px 'Inter',sans-serif;
    --body-2-400: 400 14px 'Inter',sans-serif;
    --body-2-500: 500 14px 'Inter',sans-serif;

    --button-big-text: 600 16px 'Inter',sans-serif;
    --button-medium-text:600 14px 'Inter',sans-serif;
    --input-placeholder:400 16px 'Inter',sans-serif;
    --input-label:500 14px 'Inter',sans-serif;

  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }
`;
