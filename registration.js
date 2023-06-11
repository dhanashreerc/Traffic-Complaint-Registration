function checkStatus(p1){
    let phoneRef = document.querySelector("#phoneNumber");
    let phoneNumber = phoneRef.value;
    if(!phoneNumber)
    {
        phoneRef.classList.add("border-danger");
    }
    else{
        phoneRef.classList.remove("border-danger");
    }

    let nameRef = document.querySelector("#name");
    let name = nameRef.value;
    if(!name)
    {
        nameRef.classList.add("border-danger");
    }
    else{
        nameRef.classList.remove("border-danger");
    }

    let emailRef = document.querySelector("#email");
    let email = emailRef.value;
    if(!email)
    {
        emailRef.classList.add("border-danger");
    }
    else{
        emailRef.classList.remove("border-danger");
    }

    let challanRef = document.querySelector("#challanNo");
    let challanNo = challanRef.value;
    if(!challanNo)
    {
        challanRef.classList.add("border-danger");
    }
    else{
        challanRef.classList.remove("border-danger");
    }

    let vehicalRef = document.querySelector("#vehicalNo");
    let vehicalNo = vehicalRef.value;
    if(!vehicalNo)
    {
        vehicalRef.classList.add("border-danger");
    }
    else{
        vehicalRef.classList.remove("border-danger");
    }

    let stateRef = document.querySelector("#state");
    let state = stateRef.value;
    if(state == "Please Select Challan State. . .")
    {
        stateRef.classList.add("border-danger");
    }
    else{
        stateRef.classList.remove("border-danger");
    }

    let cityRef = document.querySelector("#city");
    let city = cityRef.value;
    if(!city)
    {
        cityRef.classList.add("border-danger");
    }
    else{
        cityRef.classList.remove("border-danger");
    }

    let locationRef = document.querySelector("#location");
    let location = locationRef.value;
    if(!location)
    {
        locationRef.classList.add("border-danger");
    }
    else{
        locationRef.classList.remove("border-danger");
    }

    // let cityRef = document.querySelector("#city");
    // let city = cityRef.value;
    // if(city == "")
    // {
    //     cityRef.classList.add("border-danger");
    // }
    // else{
    //     cityRef.classList.remove("border-danger");
    // }
}
