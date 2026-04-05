'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('Sending...')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // You need to get this from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('Message sent successfully! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch {
      setStatus('Failed to send message. Please email me directly at mohamedbashirnuh@gmail.com')
    }

    setIsSubmitting(false)
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center text-gray-600 mb-8">
          Have a question or want to work together? Send me a message!
        </p>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            {status && (
              <p className={`text-center font-medium ${status.includes('success') ? 'text-green-600' : status.includes('Failed') ? 'text-red-600' : 'text-blue-600'}`}>
                {status}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <p className="text-center text-gray-500 text-sm mt-6">
            Or email me directly at <a href="mailto:mohamedbashirnuh@gmail.com" className="text-blue-600 hover:underline">mohamedbashirnuh@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact 