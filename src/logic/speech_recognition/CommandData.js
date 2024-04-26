import annyang from 'annyang'


/*===================== dot voice respond functions  ===============================*/


/**
 * This function uses the Web Speech API to convert a given text message into speech.
 * It creates a new SpeechSynthesisUtterance instance with the provided message and uses the speechSynthesis interface to speak the utterance.
 *
 * @param {string} message - The message that should be converted into speech.
 * @param pitch
 */
const dotSpeechResponse = (message, pitch= 1) => {
 const utter = new SpeechSynthesisUtterance(message)
 utter.pitch = pitch
 window.speechSynthesis.speak(utter)
}

/**
 * This function triggers the 'dotSpeechResponse' function with a predefined message, "I am now active".
 * It is used to indicate that the application is now active and ready to receive commands.
 */
const dotNowActive = () => { dotSpeechResponse('I am now active')}
const dotStillActive = () => { dotSpeechResponse( 'Yes, I\'m still listening')}
const dotNotActiveAlert = () => {  alert('Dot not active')}

/**
 * This function stops the annyang voice recognition service from listening to commands.
 * It is used when the user wants to stop voice commands from being processed.
 */
const dotStopListening = () => annyang.abort()

/**
 * This function pauses the annyang voice recognition service from listening to commands.
 * It is used when the user wants to take a break from voice commands.
 */
const dotTakeBreak = () => annyang.pause()

/**
 * This function triggers the 'dotSpeechResponse' function with a predefined message, "I'm sorry, I cannot {nonMediaCommands}".
 * It is used when the application cannot execute a non-media command issued by the user.
 *
 * @param {string} nonMediaCommands - The non-media command that the application cannot execute.
 */

/**
 * This function triggers the 'dotSpeechResponse' function with a predefined message, "I'm sorry, I cannot {nonMediaCommands}".
 * It is used when the application cannot execute a non-media command issued by the user.
 *
 * @param {string} nonMediaCommands - The non-media command that the application cannot execute.
 */
const nonMediaDefaultResponse = (nonMediaCommands) => dotSpeechResponse(`I'm sorry, I cannot ${nonMediaCommands}`)

/**
 * This function triggers the 'dotSpeechResponse' function with a predefined message, "Sorry, I don't know how to {videoCommands} {videoTitle}".
 * It is used when the application cannot execute a video command issued by the user.
 *
 * @param {string} videoCommands - The video command that the application cannot execute.
 * @param {string} videoTitle - The title of the video that the command was issued for.
 */
const videoDefaultResponse = (videoCommands,videoTitle) => {
    dotSpeechResponse('Sorry, I don\'t know how to'+ videoCommands + ' ' + videoTitle)
}


/*===================== non-media functions  ===============================*/

/**
 * Scrolls the window down by 80 pixels.
 * This function does not take any parameters and does not return any value.
 */
const scrollDownWindow = () => window.scrollBy(0, 80)

/**
 * Scrolls the window up by 80 pixels.
 * This function does not take any parameters and does not return any value.
 */
const scrollUpWindow = () => window.scrollBy(0, -80)

/**
 * Returns the current time and speaks the time using speech recognition.
 *
 * @return {string} The time in the format "hh:mm AM/PM"
 */
const currentTime = () => {
    const timeNow = new Date().toLocaleTimeString('en-US',{
         hour: '2-digit',
         minute: '2-digit',
     })
       dotSpeechResponse(`The time is ${timeNow}`)
}

/**
 * This function opens a new window or tab in the browser with the specified URL and dimensions.
 * It also uses the 'dotSpeechResponse' function to provide feedback to the user based on whether the operation was successful or not.
 *
 * @param {WindowProxy} windowName - The name of the window to be opened.
 * @param {string} windowURL - The URL that the new window or tab should navigate to.
 * @param {string} successText - The message that should be spoken if the operation is successful.
 * @param {string} failureText - The message that should be spoken if the operation fails.
 * @param {number} windowWidth - The width of the new window or tab in pixels.
 * @param {number} windowHeight - The height of the new window or tab in pixels.
 */
const openWindow = (windowName, windowURL, windowWidth,
                    windowHeight, successText, failureText) => {
 windowName = window.open(windowURL, '_blank',
     `width=${windowWidth},height=${windowHeight}`)
    windowName ? dotSpeechResponse(successText) : dotSpeechResponse(failureText)
}

/**
 * This function closes a specified window or tab in the browser.
 * It also uses the 'dotSpeechResponse' function to provide feedback to the user based on whether the operation was successful or not.
 *
 * @param {WindowProxy} windowName - The name of the window to be closed.
 * @param {string} failureText - The message that should be spoken if the operation fails.
 */
const closeWindow = (windowName, failureText) => {
    windowName ?  windowName.close() : dotSpeechResponse(failureText)
}

/*===================== window content nested object  ===============================*/
export const windowContent = {
    google: {
        address: 'https://www.google.com/',
        windowOpen: 'Google window open',
        windowError: 'Failed to open Google window',
        closeWindowError: 'Window is already closed',
    },
    dribble: {
        address: 'https://dribbble.com/',
        windowOpen: 'Dribble window open',
        windowError: 'Failed to open Dribble window',
        closeWindowError: 'Window is already closed',
    },
    github: {
        address: 'https://github.com/',
        windowOpen: 'GitHub window open',
        windowError: 'Failed to open GitHub window',
        closeWindowError: 'Window is already closed',
    },
}

/*===================== video commands ===============================*/
const playVideo = (videoElement) => {videoElement.play()}

const stopVideo =(videoElement) => {
    videoElement.pause()
    videoElement.currentTime = 0
}

const pauseVideo = (videoElement) => {videoElement.pause()}
const loopVideo = (videoElement) => {videoElement.loop = true}
const fastForwardVideo = (videoElement) => {videoElement.currentTime += 3}
const rewindVideo = (videoElement) => {videoElement.currentTime -= 3}


//fast-refresh exports

export {
    nonMediaDefaultResponse,
    dotStopListening,
    dotNowActive,
    dotStillActive,
    dotNotActiveAlert,
    dotTakeBreak,
    videoDefaultResponse,
    scrollDownWindow,
    scrollUpWindow,
    currentTime,
    openWindow,
    closeWindow,
    dotSpeechResponse,
    playVideo,
    stopVideo,
    pauseVideo,
    loopVideo,
    fastForwardVideo,
    rewindVideo,
}
