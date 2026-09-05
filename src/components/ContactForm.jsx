import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    request: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }

    if (!formData.request.trim()) {
      newErrors.request = "Request is required"
    } else if (formData.request.length < 10) {
      newErrors.request = "Request must be at least 10 characters"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "190de6dd-0ba3-4590-a90f-d358f65aa935",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Contact Form Submission",
          message: formData.request,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          request: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="custom-form" onSubmit={handleSubmit} noValidate>
      <div aria-live="polite" aria-atomic="true">
        {submitStatus === "success" && (
          <div className="alert alert-success mb-3" role="alert">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="alert alert-danger mb-3" role="alert">
            Something went wrong. Please try again.
          </div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`form-control custom-input ${errors.name ? "is-invalid" : ""}`}
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.name && (
          <div id="name-error" className="invalid-feedback" role="alert">
            {errors.name}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`form-control custom-input ${errors.email ? "is-invalid" : ""}`}
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.email && (
          <div id="email-error" className="invalid-feedback" role="alert">
            {errors.email}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          autoComplete="on"
          className="form-control custom-input"
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="request" className="form-label">Request</label>
        <textarea
          id="request"
          name="request"
          rows="4"
          autoComplete="off"
          required
          aria-required="true"
          aria-invalid={!!errors.request}
          aria-describedby={errors.request ? "request-error" : undefined}
          className={`form-control custom-input ${errors.request ? "is-invalid" : ""}`}
          value={formData.request}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.request && (
          <div id="request-error" className="invalid-feedback" role="alert">
            {errors.request}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="button"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  )
}

export { ContactForm }