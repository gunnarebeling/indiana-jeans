import { setSocioLocationId } from "./TransientState.js";

export const LocationTypeChoices = async ()=>{
    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json();

    document.addEventListener("change", HandleLocationChange)
    

    let choiceHTML = '<h2>Which type of area do you live in</h2>'
    for (const location of locations) {
        choiceHTML += `<input type="radio" name="location" value='${location.id}' />${location.label}`
        
    }
    return choiceHTML
}
const HandleLocationChange = (clickEvent) => {
    if (clickEvent.target.name === "location") {
        const parseToInt = parseInt(clickEvent.target.value)
        setSocioLocationId(parseToInt)
        
    }
}

