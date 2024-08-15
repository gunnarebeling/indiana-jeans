import { OwnsJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector('#container')


const render = async () =>{
    const jeanOwnershipHTML = OwnsJeansChoices()
    const locationChoicesHTML = await LocationTypeChoices()
    const saveSubmissionbutton = await SaveSubmission()
    const submissionsHTML = await SubmissionList()
    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationChoicesHTML}
    ${saveSubmissionbutton}
    ${submissionsHTML}`


}

render()