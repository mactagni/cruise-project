const style = {
    footer: {
        width: '100%',
        height: 'fit-content',
        marginTop: 'auto',
        fontWeight: '700',
        zIndex: '99'
    }
}

function Footer() {
    return(
        <div className="footer" style={style.footer}>
            <p>Cruise Hub</p>
            <p style={{ fontSize: '0.75rem'}}>by mac tagni</p>
        </div>
    )
}

export default Footer;