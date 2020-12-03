import { validateURL } from "./validateURL"

const getData = async (endpoint, data) => {
  const res = await fetch(
    endpoint,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )

  try {
    const result = await res.json()
    return result
  }
  catch (error) {
    console.log('error', error)
  }
}

function handleSubmit() {
  const text = document.getElementById('text').value
  const url = document.getElementById('url').value
  const number = document.getElementById('number').value
  const validURL = validateURL(url)
  if (!validURL && !text) {
    error.textContent = "Please enter a valid URL or text"
    error.style.color = "yellow"
  } else {
    error.textContent = ""
    getData('http://localhost:8080/summarization', { number, text, url }).then(
      function (result) {
        document.getElementById('results').innerHTML = result
      }
    )
  }
}

export { handleSubmit, getData }