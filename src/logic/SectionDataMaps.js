
/**
 * This function creates a map that associates certain keys with specific section titles.
 * The keys represent different sections of the application and the values are the titles that should be displayed for these sections.
 *
 * @returns {Map} A Map object where each entry is a key-value pair representing a section and its title.
 */
const createSectionTitleMap = () => {
    let sectionTitleMap = new Map()
    sectionTitleMap.set( 'dotText', ' Dot' )
    sectionTitleMap.set('subTitleText', 'Your video assistant')
    sectionTitleMap.set( 'dotActions', ' Dot can carry out these actions:' )
    sectionTitleMap.set( 'authorText', 'Application created by: Tori' )
    sectionTitleMap.set( 'noneMediaTitle', 'Non-Media commands' )
    sectionTitleMap.set( 'mediaTitle', 'Media commands' )
    return sectionTitleMap
}

/**
 * This function creates a map that associates certain keys with specific non-media commands.
 * The keys represent different commands that can be issued to the application and the values are the phrases that trigger these commands.
 *
 * @returns {Map} A Map object where each entry is a key-value pair representing a command and its trigger phrase.
 */
const createCommandMap = () => {
    let nonMediaCommands = new Map()
    nonMediaCommands.set( 'close dot', ' stop listening' )
    nonMediaCommands.set( 'dot status', ' are you there' )
    nonMediaCommands.set( 'time', ' what time is it' )
    nonMediaCommands.set( 'pause dot', ' take break or take a break' )
    nonMediaCommands.set( 'window scroll', ' scroll down or scroll up' )
    nonMediaCommands.set( 'open window', ' open google, dribble, github' )
    nonMediaCommands.set( 'close window', ' close google, dribble, github ' )
    return nonMediaCommands
}

/**
 * This function creates a map that associates certain keys with specific media commands.
 * The keys represent different media commands that can be issued to the application and the values are the phrases that trigger these commands.
 *
 * @returns {Map} A Map object where each entry is a key-value pair representing a media command and its trigger phrase.
 */
const createMediaCommandMap = () => {
    let mediaCommandMap = new Map()
    mediaCommandMap.set( 'play video', ' play or play' )
    mediaCommandMap.set( 'pause video', ' pause or pause' )
    mediaCommandMap.set( 'fast-forward video', ' fast-forward  or fast forward' )
    mediaCommandMap.set( 'rewind video', ' rewind or rewind' )
    mediaCommandMap.set( 'loop video', ' loop or loop' )
    return mediaCommandMap
}


//fast-refresh exports
export {
        createSectionTitleMap,
        createCommandMap,
        createMediaCommandMap
}
