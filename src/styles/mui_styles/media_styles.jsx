/* eslint-disable react-refresh/only-export-components */
//noinspection SpellCheckingInspection

import {Box, Card, styled} from '@mui/joy'

/* intro header section styles  */
export const introSection = {
    sheetLayout: {
        sx: {
            backgroundImage: 'url(src/assets/introHeaderD.png )',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '55vh',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            mb: 0
        }
    },
        introHeaderDot: {
          level: 'h1',
          fontSize: '5vw',
          textColor: '#01ffd1',
          ml: '5.5rem',
          pt: 15,
          fontFamily: 'Futura',
        },
        introHeader2: {
           level: 'h1',
           fontSize: '5vw',
           textColor: '#e7f3ed',
           ml: '5.5rem',
           pt: 1,
          fontFamily: 'Futura',
        }
   }


/* voice command section  */

/*================ commands section styling =============*/

export const commandSection = {
    commandBox: {
        pb: 5,
        backgroundColor: 'rgba(54,145,166,0.13)',
    },
    gridContainer: {
        columnSpacing: 18,
        pt: 4,
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(2, 1fr)',
},
    gridColumns:{
            gridColumn: '6',
      },
    sectionHeader:{
       level: 'h2',
       pt:5,
       fontFamily: 'Futura',
       textAlign: 'center',
       textColor: '#10102a',

    },
    subHeader:{
      level: 'h4',
      textColor: '#04030c',
   },
    commandList:{
     component: 'li',
     textColor: '#04030c',
 }
}



//video card section styles ===================================
const VideoContainer = styled(Box)({
    display:'flex',
    gap: 20,
    flexWrap: 'wrap',
    padding:25,
})
export const  videoContainerComponent = "ul"

const VideoCard= styled(Card)({
    minWidth: 350,
    textColor: '#fafafa',
    flexGrow: 1,
     my: 8,
})

export const videoCardComponent = "li"

//.file=======================================


export const cardTypography = {
    level: 'body-lg',
    textColor: '#fafafa',
    fontWeight: 'lg',
    mt: { xs: 12, sm: 18 },
    startDecorator: '🎙',
}



//
export const footerSection = {
    /* use in place of footerSection css */
    footerType: {
         component: 'footer',
     },
    footerBox: {
       backgroundColor: '#6323fb',
       width: '100%',
       height: '20vh',
       backgroundSize: '11%, cover',
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'right center',
       position:'center',
       bottom: 0,
       left: 0,
    },
   /* footer typography used in conjunction with css footerBox */
 footerTypography : {
        level: 'title-md',
        ml:5,
        pt: 5,
        textColor: '#e7f3ed',
    },
    placeholderText: {
        author: '© 2023 created by Tori S. All rights reserved.'
    }
}

export {
       VideoContainer,
       VideoCard,
}
