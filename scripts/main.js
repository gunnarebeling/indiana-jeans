import { OwnsJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector('#container')


const render = async () =>{
    const jeanOwnershipHTML = OwnsJeansChoices()
    const locationChoicesHTML = await LocationTypeChoices()
    const saveSubmissionbutton = await SaveSubmission()
    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationChoicesHTML}
    ${saveSubmissionbutton}`


}

render()