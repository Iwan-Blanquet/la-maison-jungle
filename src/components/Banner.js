/* Importation des fichiers nécessaire au composant */
import '../styles/Banner.css'
import logo from '../assets/logo.png'

// Fonction qui détermine le html de notre composant
function Banner() {
    const title = 'La maison jungle'
    return (
    <div className="lmj-banner">
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>{ title }</h1>
    </div>
    )
}

export default Banner