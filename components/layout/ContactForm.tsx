const ContactForm = () => {
  return (
    <form action="/api/form" method="post">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />

      <label htmlFor="message">Message</label>
      <textarea name="message" value="" required />

      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
