import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Send, 
  Phone, 
  Mail, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const services = [
    'Pokrycia Dachowe',
    'Elewacje i Docieplenia',
    'Konstrukcje Stalowe',
    'Remonty i Naprawy',
    'Konsultacje',
    'Inne'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <Card className="glass-contact-form max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <Badge className="mb-4 glass-badge mx-auto w-fit">
          Bezpłatna Wycena
        </Badge>
        <CardTitle className="text-2xl font-bold text-slate-800">
          Skontaktuj się z nami
        </CardTitle>
        <p className="text-slate-600">
          Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-slate-700">
                <User className="w-4 h-4" />
                Imię i Nazwisko *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Jan Kowalski"
                className="glass-input"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4" />
                Telefon
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+48 123 456 789"
                className="glass-input"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-slate-700">
              <Mail className="w-4 h-4" />
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="jan.kowalski@email.com"
              className="glass-input"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-slate-700">
              Rodzaj Usługi
            </Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="glass-select w-full p-3 rounded-lg border border-slate-200 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Wybierz usługę</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-slate-700">
              <MessageSquare className="w-4 h-4" />
              Wiadomość *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Opisz swój projekt lub zadaj pytanie..."
              rows={4}
              className="glass-input resize-none"
              required
            />
          </div>

          {submitStatus && (
            <div className={`glass-alert ${submitStatus === 'success' ? 'success' : 'error'}`}>
              {submitStatus === 'success' ? (
                <div className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span>Wiadomość została wysłana! Skontaktujemy się z Tobą wkrótce.</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="w-5 h-5" />
                  <span>Wystąpił błąd. Spróbuj ponownie lub skontaktuj się telefonicznie.</span>
                </div>
              )}
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full glass-button-primary"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Wysyłanie...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Wyślij Wiadomość
              </div>
            )}
          </Button>
        </form>

        <div className="text-center pt-4 border-t border-slate-200">
          <p className="text-sm text-slate-600">
            Lub skontaktuj się bezpośrednio:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <a 
              href="tel:+48123456789" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +48 123 456 789
            </a>
            <a 
              href="mailto:kontakt@polbud.pl" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              kontakt@polbud.pl
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ContactForm
