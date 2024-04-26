import {Typography} from '@mui/joy'
import {footerSection} from '../styles/mui_styles/media_styles'
import '../styles/css_styles/footer_styles.css'

 const FooterSection = () => {
       // destructuring the footerSection object
    const {
          footerTypography,
           placeholderText} = footerSection

    return (
        <footer  className="footer-container">
            <Typography {...footerTypography}>
                {placeholderText.author}
        </Typography>
        </footer>
    )
}
export default FooterSection
