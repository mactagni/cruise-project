const style = {
    footer: {
        width: '100vw',
        height: 'fit-content',
        backgroundColor: '#1E1E1E',
        marginTop: 'auto',
        fontWeight: '700'
    }
}

function Footer() {
    return(
        <div style={style.footer}>
            <p>Cruise Hub</p>
            <p style={{ fontSize: '0.75rem'}}>by mac tagni</p>
        </div>
    )
}

export default Footer;