import React, { useEffect, useState } from 'react'
import "./keepintouch.css"
const KeepInTouchBox = () => {
  const [email, updateEmail] = useState("")
  const [validEmail, updateValidEmail] = useState(false)
  const [noticeClass,chnageNoticeClass]=useState("black")  
  const checkUserMail = (e) => {

    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/
    updateValidEmail(regex.test(email))

  }

  useEffect(() => {
    let timeId;
    if (email) {
      timeId = setTimeout(() => {
        checkUserMail()
      }, 1000)
    }


    return () => {
      clearTimeout(timeId)
    }
  }, [email])

  return (
    <section className='keep-in-touch'>
      <div id="keep-in-touch-box">
        <h2>keep in touch</h2>
        <p>Submit your email address below and we'll keep you updated with new and relevant Triumph motorcycle content directly to your inbox.</p>
      </div>
      <form id="keep-in-touch-form">
        <label for="email">e-mail</label>
        <input type="email" onChange={(e) => updateEmail(e.target.value)} id="email" placeholder="enter email address" required value={email}/>
        <p className={email.length===0?"notice n-black":validEmail?"notice n-green":"notice n-red"}>{email.length===0?"this field is required":validEmail?"valid email":"invalid email"}</p>
      </form>
      <button className={validEmail ? "active-informed-btn informed-btn" : "inactive-informed-btn informed-btn"} onClick={() => updateEmail("")} disabled={validEmail ? false : true}>keep me informed</button>
    </section>
  )
}

export default KeepInTouchBox;