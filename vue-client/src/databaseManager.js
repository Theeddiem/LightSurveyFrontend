const server = `http://localhost:5000/api/surveys`

export async function getSurvey (id) {
  try {
    const response = await fetch(`${server}/${id}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

export async function putSurvey (survey) {
  console.log(survey)

  const url = `${server}/${survey.id}`

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(survey) // data can be `string` or {object}!
    })
    return response.status
  } catch (error) {
    throw console.error('Error:', error)
  }
}

export async function postSurvey (survey) {
  const url = `${server}`

  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(survey) // data can be `string` or {object}!
    })
    const json = await response.json()
    console.log('Success:', JSON.stringify(json))
  } catch (error) {
    throw console.error('Error:', error)
  }
}
