import videoFiles from 'src/data/VideoFiles'
import {
    closeWindow,
    currentTime,
    dotStillActive,
    dotStopListening,
    dotTakeBreak, fastForwardVideo, loopVideo, nonMediaDefaultResponse,
    openWindow, pauseVideo, playVideo, rewindVideo, scrollDownWindow,
    scrollUpWindow, stopVideo, videoDefaultResponse,
    windowContent
} from './CommandData'

 //variables for deploying various  windows
let googleWindow, dribbleWindow, githubWindow

/**
 * This function performs non-media related actions based on the provided command.
 * It uses a switch statement to handle different commands and call the appropriate function.
 *
 * @param {string} nonMediaCommands - The command to be executed.
 */
const performNonMediaActions = (nonMediaCommands ) => {
    const { google, dribble, github } = windowContent

    switch ( nonMediaCommands.toLowerCase() ) {
        case 'stop listening':
            dotStopListening()
            break
        case 'are you there':
            dotStillActive()
            break
        case 'take a break':
            dotTakeBreak()
            break
        case 'what time is it':
            currentTime()
            break
        case 'scroll down':
            scrollDownWindow()
            break
        case'scroll up':
            scrollUpWindow()
            break
        case 'open google':
            openWindow( googleWindow, google.address, 500, 500,
                google.windowOpen,
                google.windowError )
            break
        case 'open dribble':
            openWindow( dribbleWindow, dribble.address, 500, 500,
                dribble.windowOpen,
                dribble.windowError )
            break
        case 'open github':
            openWindow( githubWindow, github.address, 500,
                500, github.windowOpen,
                github.windowError )
            break
        case 'close google':
            closeWindow( googleWindow, google.closeWindowError )
            break
        case 'close dribble':
            closeWindow( dribbleWindow, dribble.closeWindowError )
            break
        case 'close GitHub':
            closeWindow( githubWindow, github.closeWindowError )
            break
        default:
            nonMediaDefaultResponse(nonMediaCommands)
    }
}


/**
 * This function controls the video media player based on the provided voice command.
 * It uses a switch statement to handle different commands and call the appropriate function.
 *
 * @param {string} voiceCommands - The voice command to be executed.
 * @param {string} videoTitle - The title of the video to be controlled.
 * @param {object} videoRef - The reference to the video element.
 * The function starts by finding the index of the video with the given title in the videoFiles array.
 * It does this using the findIndex method, which returns the index of the first element in the array
 * that satisfies the provided testing function. In this case, the testing function checks if the title
 * property of the video (converted to lowercase) is equal to the videoTitle parameter
 * (also converted to lowercase).  Once the function has the index of the video, it uses this index
 * to get the corresponding video element from the videoRef parameter. It does this by accessing
 * the current property of the videoRef at the given index.  The function then uses a switch
 * statement to handle the different voice commands. Depending on the voiceCommands
 * parameter, it calls the appropriate function and passes the videoElement as an argument.
 * For example, if voiceCommands is 'play', it calls the playVideo function, which in turn calls
 * the play method on the videoElement, starting the video playback.  If the voiceCommands
 * parameter doesn't match any of the cases in the switch statement, the function calls the
 * videoDefaultResponse function, passing the voiceCommands and videoTitle parameters.
 * This function provides a default response when the application doesn't know how to execute
 * a given video command.  The controlVideoMediaPlayer function will successfully play a video upon
 * user request if the voiceCommands parameter is 'play' and the videoTitle parameter matches the title
 * of a video in the videoFiles array. This is because the function is designed to handle voice commands
 * and control the video player accordingly. However, this will only work if the video is ready to be played.
 * If there's an issue with the video file or the video element itself, the play method might not work as expected.
 */
   const controlVideoMediaPlayer = (voiceCommands, videoTitle, videoRef) => {
       const videoIndex = videoFiles.findIndex(video => video.title.toLowerCase() === videoTitle.toLowerCase())
       let videoElement = videoRef[videoIndex].current
        switch (voiceCommands) {
           case 'play':
               playVideo(videoElement)
               break
           case 'stop':
               stopVideo(videoElement)
               break
           case 'pause':
               pauseVideo(videoElement)
               break
           case 'loop':
               loopVideo(videoElement)
               break
           case 'fast forward':
               fastForwardVideo(videoElement)
               break
           case 'rewind':
               rewindVideo(videoElement)
               break
           default:
               videoDefaultResponse(voiceCommands, videoTitle)
       }
    }

    export {performNonMediaActions, controlVideoMediaPlayer}



