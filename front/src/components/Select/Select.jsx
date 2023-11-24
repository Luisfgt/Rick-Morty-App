import { useState } from "react"

const Select = ({ elegirPaíses, setElegirPaises }) => {

    const [openSelect, setOpenSelect] = useState(false)
    const conutries = ['Noruega', 'España', 'Inglaterra']

    const handleSelected = (evento) => {
        if (elegirPaíses.includes(evento.target.value)) {
            setElegirPaises(elegirPaíses.map((country) => country !== evento.target.value))
        } else {
            setElegirPaises([...elegirPaíses, evento.target.value])
        }
    }

    return (
        <>
            <div>
                <button onClick={() => setOpenSelect(true)}> Seleccionar país</button>
                {openSelect &&
                    (
                        <div>
                            {
                                conutries.map((country) => {
                                    return (
                                        <>
                                            <label> {country}</label>
                                            <input type='checkbox' value={country.id} onChange={handleSelected} />
                                        </>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default Select