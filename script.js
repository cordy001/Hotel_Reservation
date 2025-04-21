

document.getElementById("form_id").addEventListener('submit', function(event) {

    event.preventDefault()

    const name_id = document.getElementById("name").value || null
    const age_id = document.getElementById("age").value || null
    const address_id = document.getElementById("address").value || null
    const spa_id = parseFloat(document.getElementById("spa").value || 0)
    const massage_id = parseFloat(document.getElementById("massage").value || 0)
    const breakfast_id = parseFloat(document.getElementById("breakfast").value || 0)
    // const regular_id = parseFloat(document.getElementById("regular").value || 0)
    const senior_id = parseFloat(document.getElementById("senior").value || 0)
    const toa_id = parseFloat(document.getElementById("toa").value || 0)
    const numdays_id = parseFloat(document.getElementById("numdays").value || 0)
    const downpayment_id = parseFloat(document.getElementById("downpayment"). value || 0)

    //Null Values

    alert(senior_id)

    let t1_customer = Age_Type(age_id) || 0

    let t2_customer = senior_id

    let t2_customer_string = ""

    let extra = Extra(spa_id, massage_id, breakfast_id) || 0

    let result = Result(numdays_id, downpayment_id, extra, toa_id, t2_customer)

    if (senior_id >= 0) {

        t2_customer_string = "Senior"

    } else {

        t2_customer_string = "Regular"

    }

    let formData = new FormData()

    formData.append("Name", name_id)
    formData.append("Age", age_id)
    formData.append("Address", address_id)
    formData.append("The Person is", t1_customer)
    formData.append("Type of Accomodation", toa_id)
    formData.append("Extra", extra)
    formData.append("Type of Customer", t2_customer_string)
    formData.append("Result", result)


    let formDataString = ""

    for(let [key, value] of formData.entries()) {
        formDataString += `${key}: ${value}\n`
    }


    alert(formDataString)
    console.log(formDataString)
    

})

function Result(numdays_id, downpayment_id, extra, toa_id, t2_customer) {

    let result = 0

    result += extra
    result += toa_id
    result *= numdays_id
    result -= downpayment_id
    result -= result * t2_customer

    return result

}

function Age_Type(age_id) {

    if (age_id <= 18) {

        return  "Minor"

    } else if (age_id <= 60){

        return  "Adult"

    } else {

        return  "Senior"

    }

}

function Extra(spa_id, massage_id, breakfast_id) {

    let extra = 0

    if (spa_id > 0) extra += spa_id
    if (massage_id > 0) extra += massage_id
    if (breakfast_id > 0) extra += breakfast_id

    return extra
    
}