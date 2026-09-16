import { useState } from 'react'
import { profile, socials } from '../data/portfolio'
import type { IconName } from './Icon'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

const contactMethods: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: 'location', label: 'Location', value: profile.location },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      highlight="together"
      subtitle="Have a project, a role or an idea in mind? I'd love to hear about it."
    >
      <div className="contact__grid">
        <Reveal className="contact__info">
          {contactMethods.map((method) => {
            const content = (
              <>
                <span className="icon-tile">
                  <Icon name={method.icon} size={20} />
                </span>
                <span className="info-item__text">
                  <span className="info-item__label">{method.label}</span>
                  <span className="info-item__value">{method.value}</span>
                </span>
              </>
            )
            return method.href ? (
              <a key={method.label} href={method.href} className="info-item info-item--link contact-item">
                {content}
              </a>
            ) : (
              <div key={method.label} className="info-item contact-item">
                {content}
              </div>
            )
          })}

          <div className="card contact__social">
            <h3 className="card-heading">Find me online</h3>
            <ul className="contact__social-list">
              {socials
                .filter((social) => social.url.startsWith('http'))
                .map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      className="social-row"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name={social.icon} size={18} />
                      <span className="social-row__handle">{social.handle}</span>
                      <Icon name="external" size={14} className="social-row__arrow" />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="card contact__form-card" delay={100}>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault()
              const data = new FormData(e.currentTarget)
              const name = String(data.get('name') ?? '').trim()
              const email = String(data.get('email') ?? '').trim()
              const subject = String(data.get('subject') ?? '').trim() || `Portfolio enquiry from ${name}`
              const message = String(data.get('message') ?? '').trim()
              const body = `${message}\n\n— ${name} (${email})`
              window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
              setSent(true)
            }}
          >
            <div className="form__row">
              <div className="field">
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" type="text" placeholder="John Doe" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" type="text" placeholder="Project / job opportunity" />
            </div>
            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={5} placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn btn--primary form__submit">
              <Icon name="send" size={18} /> Send Message
            </button>
            {sent && (
              <p className="form__note" role="status">
                <Icon name="check" size={16} /> Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
