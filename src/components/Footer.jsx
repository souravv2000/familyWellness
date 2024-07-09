import './Footer.css'

function FooterSection(obj) {
    return (
        <>
            <div className='container'>
                <div className='footer-container'>
                    <p className='footer-top'>{obj.copyText}</p>
                    <p className='footer-bottom'>{obj.bottomText}</p>
                </div>
            </div>
        </>
    )
}
export default FooterSection;