import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface Plan {
  name: string
  price: string
  description?: string
  features?: string[]
}

export default function Pricing() {
  const { t } = useTranslation()
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const plans = t('pricing.plans', { returnObjects: true }) as Plan[]

  const openModal = (plan: any) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  return (
    <section id="pricing" className="section bg-basketball bg-cover bg-center bg-fixed">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">{t('pricing.title')}</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-white/10 rounded-lg p-6 bg-black/50 hover:bg-black/70 transition-colors">
              <div className="text-white/70 text-sm">{plan.name}</div>
              <div className="text-3xl font-bold my-2">{plan.price}</div>
              <button
                className="btn-primary w-full text-sm"
                onClick={() => openModal(plan)}
              >
                {t('pricing.cta')}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedPlan.name}</h3>
              <button
                onClick={closeModal}
                className="text-white/70 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="text-white/80 mb-6">
              {selectedPlan.description}
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Что включено:</h4>
              <ul className="space-y-2">
                {selectedPlan.features?.map((feature: string, index: number) => (
                  <li key={index} className="text-white/70 text-sm flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button className="btn-primary flex-1">
                {t('pricing.payNow')} - {selectedPlan.price}
              </button>
              <button
                onClick={closeModal}
                className="px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                {t('pricing.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


