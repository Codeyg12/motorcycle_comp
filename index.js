const firstButton = document.getElementById('first-search-button')
const secondButton = document.getElementById('second-search-button')


const searchBikes = async () => {
    const res = await fetch('https://api.api-ninjas.com/v1/motorcycles?make=kawasaki&model=ninja')
    const answer = await res.json()
    console.log(answer)
}

firstButton.addEventListener('click', searchBikes)