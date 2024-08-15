export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch('http://localhost:8088/submissions')
    const submissions = await response.json()
    let html = ''
    // Iterate the submissions and create some <section> representations
    for (const submission of submissions) {
         html += '<section class="submission">'
        html += `<div data-id="${submission.id}" data-type="owns-jeans">Owens Jeans? ${submission.ownsBlueJeans}</div>
                    <div data-id="${submission.id}" data-type="foreign-key-area">Area type foreign key? ${submission.socioLocationId}</div>`
        html += '</section>'
                    
    }

    
    // Return the HTML string
    return html
    
}