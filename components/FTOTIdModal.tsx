import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

type Props = { open: boolean; onClose: () => void }

export default function FTOTIdModal({ open, onClose }: Props) {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)
  const [method, setMethod] = useState<'email' | 'phone' | 'oauth' | null>(null)
  const [value, setValue] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [twofa, setTwofa] = useState(false)

  function reset() {
    setStep(0); setMethod(null); setValue(''); setOtp(''); setPassword(''); setTwofa(false)
  }

  function close() { reset(); onClose() }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={close} className="relative z-50">
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 translate-y-2" enterTo="opacity-100 translate-y-0" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Dialog.Panel className="w-full max-w-md rounded-xl border border-white/10 bg-black/80 backdrop-blur p-6">
              <Dialog.Title className="text-lg font-semibold mb-2">{t('ftot.title')}</Dialog.Title>
              {step === 0 && (
                <div className="space-y-3">
                  <div className="text-sm text-white/70">{t('ftot.start')}</div>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="btn-secondary" onClick={() => { setMethod('email'); setStep(1) }}>{t('ftot.email')}</button>
                    <button className="btn-secondary" onClick={() => { setMethod('phone'); setStep(1) }}>{t('ftot.phone')}</button>
                    <button className="btn-secondary" onClick={() => { setMethod('oauth'); setStep(4) }}>{t('ftot.oauth')}</button>
                  </div>
                </div>
              )}
              {step === 1 && (
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
                  <label className="text-sm block">{method === 'email' ? 'Email' : t('ftot.phone')}</label>
                  <input required type={method === 'email' ? 'email' : 'tel'} value={value} onChange={(e) => setValue(e.target.value)} className="w-full bg-transparent border border-white/20 rounded px-3 py-2" placeholder={method === 'email' ? 'you@example.com' : '+7 999 000 00 00'} aria-invalid={!value} />
                  <button className="btn-primary w-full" type="submit">{t('ftot.continue')}</button>
                  <button className="btn-secondary w-full" type="button" onClick={() => setStep(0)}>{t('ftot.back')}</button>
                </form>
              )}
              {step === 2 && (
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setStep(3) }}>
                  <div className="text-sm">{t('ftot.otpTitle')}</div>
                  <input required value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full bg-transparent border border-white/20 rounded px-3 py-2" placeholder="123456" aria-label="OTP" />
                  <button className="btn-primary w-full" type="submit">{t('ftot.verify')}</button>
                  <button className="btn-secondary w-full" type="button" onClick={() => setStep(1)}>{t('ftot.back')}</button>
                </form>
              )}
              {step === 3 && (
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setStep(4) }}>
                  <div className="text-sm">{t('ftot.passwordTitle')}</div>
                  <input required minLength={8} type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent border border-white/20 rounded px-3 py-2" placeholder="••••••••" aria-label="Password" />
                  <button className="btn-primary w-full" type="submit">{t('ftot.continue')}</button>
                  <button className="btn-secondary w-full" type="button" onClick={() => setStep(2)}>{t('ftot.back')}</button>
                </form>
              )}
              {step === 4 && (
                <div className="space-y-3">
                  <div className="text-sm">{t('ftot.twofaTitle')}</div>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={twofa} onChange={(e) => setTwofa(e.target.checked)} />
                    <span>2FA</span>
                  </label>
                  <button className="btn-primary w-full" onClick={() => setStep(5)}>{t('ftot.continue')}</button>
                  <button className="btn-secondary w-full" onClick={() => setStep(3)}>{t('ftot.back')}</button>
                </div>
              )}
              {step === 5 && (
                <div className="space-y-3 text-center">
                  <div className="text-lg font-medium">{t('ftot.doneTitle')}</div>
                  <button className="btn-primary w-full" onClick={close}>{t('ftot.submit')}</button>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}


