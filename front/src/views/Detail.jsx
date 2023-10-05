import ContenedorPadreDetail from "../components/Detail/ContenedorPadreDetail";
const Detail = ({characters, onClose}) => {



    return(
        <ContenedorPadreDetail
        characters={characters}
        onSearch={onClose}/>
    )
}

export default Detail;