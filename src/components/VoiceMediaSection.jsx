/* eslint-disable react/jsx-key */
import {CardContent, CardCover, Typography} from '@mui/joy'
import annyang from 'annyang'
import {useRef} from 'react'
import {dotNotActiveAlert, dotNowActive} from '../logic/speech_recognition/CommandData'
import {controlVideoMediaPlayer, performNonMediaActions} from '../logic/speech_recognition/SwitchData'
import videoFiles from '../data/VideoFile.json'
//import videoFiles from '../logic/VideoFiles'
import {
    cardTypography,
    VideoCard,
    videoCardComponent,
    VideoContainer,
    videoContainerComponent
} from '../styles/mui_styles/media_styles'

const VoiceMediaSection = () => {
    const fetchVideoFiles = videoFiles
    const videoRef = useRef( [] )

    annyang ? dotNowActive() : dotNotActiveAlert()
    const voiceCommands = {
        '*nonMediaCommands': performNonMediaActions,
        '*voiceCommands *videoTitle': controlVideoMediaPlayer
    }
    annyang.addCommands( voiceCommands )
    annyang.start()

    return (
         <VideoContainer
             component={videoContainerComponent}>
             { fetchVideoFiles.map( ( videos, index ) => (
                 <VideoCard
                     component={videoCardComponent}
                 >
                  <CardCover>
                      <video
                          key={videos.id}
                          ref={videoRef[index]}
                          poster={videos.poster}
                          >
                          <source src={videos.video}
                                  type="video/mp4"
                          />
                      </video>
                  </CardCover>
                  <CardContent>
                      <Typography {...cardTypography}>
                            {videos.title}
                      </Typography>
                  </CardContent>

                 </VideoCard>
             ) )}
             </VideoContainer>
    )
}
export default VoiceMediaSection
