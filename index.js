const firstButton = document.getElementById('first-search-button')
const secondButton = document.getElementById('second-search-button')
const firstSearchValue = document.getElementById('first-search')

//!MAYBEMAYBEMAYBE
// const searchBikes = async (e) => {
//     console.log(e)
//     const fValue = firstSearchValue.value
//     console.log(firstSearchValue.value)
//     e.preventDefault()
//     const res = await fetch(`https://api.api-ninjas.com/v1/motorcycles?model=${fValue}`, {
//         headers: {
//             'X-Api-Key': '7DnNLomBLGckBQ2OXbFq3w==WFA9KJrbx9bM7f5G'
//         }
//     })
//     const answer = await res.json()
//     console.log(answer)
// }

// firstButton.addEventListener('click', searchBikes)
secondButton.addEventListener('click', async (e) => {
        console.log(e)
    const fValue = firstSearchValue.value
    console.log(firstSearchValue.value)
    e.preventDefault()
    const res = await fetch(`https://api.api-ninjas.com/v1/motorcycles?model=${fValue}`, {
        headers: {
            'X-Api-Key': '7DnNLomBLGckBQ2OXbFq3w==WFA9KJrbx9bM7f5G'
        }
    })
    const answer = await res.json()
    console.log(answer)
})