import React, { useState } from 'react'

function Contact() {

  const [data, setData] = useState({
    fullname: "",
    ph_number: "",
    email: "",
    message: "",
  })

  const inputEvent = (event) => {
    const { name , value} = event.target
    console.log(name)
    setData({...data, [name]: value})
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `\t\tMy name is ${data.fullname}.
       My mobile number is ${data.ph_number}.
       My email is ${data.email}.
       My message is ${data.message}`
    )
  }

  return (
    <>
    <section id="header">
      <div className='my-5'>
        <h1 className='text-center'> Contact Us </h1>
        <div className='container contact_div'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="fullname"
                    className="form-label">FullName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Eg: John Doe" />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="ph_number"
                    className="form-label">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="ph_number"
                    name="ph_number"
                    value={data.ph_number}
                    onChange={inputEvent}
                    placeholder="Eg: +91 850-615-9781" />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="Eg: name@example.com" />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    value={data.message}
                    onChange={inputEvent}
                    placeholder="Hello, ..."></textarea>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary"
                    type="submit">Submit form</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Contact