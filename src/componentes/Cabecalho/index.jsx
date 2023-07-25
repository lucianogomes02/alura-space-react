import logo from './logo.png'
import busca from './search.png'
import estilo from './Cabecalho.module.css'


export default function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <img src={logo} alt="ícone do Alura Space"/>
            <div className={estilo.cabecalho__container}>
                <input
                    className={estilo.cabecalho__input}
                    type="text"
                    placeholder="O que você procura?"
                />
                <img src={busca} alt="ícone de lupa" />
            </div>
        </header>
    )
}