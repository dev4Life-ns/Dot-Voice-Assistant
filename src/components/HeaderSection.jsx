/* eslint-disable react/jsx-key */
import {Box, CssBaseline, Grid, Sheet, Typography} from '@mui/joy'
import {createCommandMap, createMediaCommandMap, createSectionTitleMap} from '../logic/SectionDataMaps'
import {commandSection, introSection} from '../styles/mui_styles/media_styles'


 // Create the maps for the section titles, commands, and media commands
  const sectionTitle = createSectionTitleMap()
  const commandText = createCommandMap()
  const mediaText = createMediaCommandMap()
  let displayCommandList = Array.from(commandText.values())
 let displayMediaList = Array.from(mediaText.values())


const VoiceCommandGrids = () => {
    const {commandBox,gridContainer,
             gridColumns, sectionHeader,
           subHeader, commandList}
           = commandSection
    return(
       <Box container {...commandBox}>
           <Typography {...sectionHeader}>
                   {sectionTitle.get('dotActions')}
               </Typography>
            <Grid container {...gridContainer}>
                <Grid sx={gridColumns}>
                <Typography component={commandList.component} {...subHeader}>
                    {sectionTitle.get('noneMediaTitle')}
                </Typography>
                   <ul>
                    {displayCommandList.map((command, index) => (
                        <Typography { ...commandList } key={index}>
                             <em><q>{command}</q></em>
                        </Typography>
                    ))}
                </ul>
            </Grid>
                <Grid sx={gridColumns}>
                 <Typography {...subHeader}>
                     {sectionTitle.get('mediaTitle')}
                 </Typography>
                 <ul>
                     {displayMediaList.map((mediaCommands, index) => (
                         <Typography component={commandList.component} { ...commandList }
                           key={index}>
                           <q><em>{mediaCommands}</em></q>
                         </Typography>
                     ))}
                 </ul>
             </Grid>
            </Grid>
       </Box>
    )
}

 const HeaderSection = () => {
    // destructure  styles from the introSection object
     const { sheetLayout,
             introHeaderDot,
             introHeader2} =  introSection

        return (
            <CssBaseline>
               <Sheet {...sheetLayout}>
                  <Typography {...introHeaderDot}>
                      {sectionTitle.get('dotText')}
                  </Typography>
                     <Typography {...introHeader2}>
                        {sectionTitle.get('subTitleText')}
                     </Typography>
               </Sheet>
             <VoiceCommandGrids/>
            </CssBaseline>
    )
}
export default HeaderSection
