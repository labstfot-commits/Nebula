import { useTranslation } from 'react-i18next'
import * as Icons from 'lucide-react'
import { useState } from 'react'

export default function Devices() {
  const { t } = useTranslation()
  const items: string[] = t('devices.items', { returnObjects: true }) as string[] || []
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = (deviceName: string) => {
    setDownloading(deviceName)

    // Simple feedback without notification
    setTimeout(() => {
      setDownloading(null)
    }, 1000)
  }

  const getDeviceIcon = (deviceName: string) => {
    const name = deviceName.toLowerCase()
    if (name.includes('visionos')) {
      return <Icons.Glasses className="w-8 h-8" />
    } else if (name.includes('tvos')) {
      return <Icons.Tv className="w-8 h-8" />
    } else if (name.includes('ios')) {
      return <Icons.Smartphone className="w-8 h-8" />
    } else if (name.includes('watchos')) {
      return <Icons.Watch className="w-8 h-8" />
    } else if (name.includes('garmin os')) {
      return <Icons.Watch className="w-8 h-8" />
    } else if (name.includes('tizen') || name.includes('wear os')) {
      return <Icons.Watch className="w-8 h-8" />
    } else if (name.includes('android')) {
      return <Icons.Smartphone className="w-8 h-8" />
    } else if (name.includes('windows')) {
      return <Icons.Monitor className="w-8 h-8" />
    } else if (name.includes('macos')) {
      return <Icons.Laptop className="w-8 h-8" />
    }
    return <Icons.Monitor className="w-8 h-8" />
  }


  return (
    <section id="devices" className="section bg-boxing-dynamic bg-cover bg-center bg-fixed">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">{t('devices.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8" style={{ contentVisibility: 'auto' }}>
          {items.map((name) => (
            <div key={name} className="border border-white/10 rounded-lg p-6 bg-black/40 text-center hover:bg-black/50 transition-colors duration-300">
              <div className="flex justify-center mb-4 text-white/80">
                {getDeviceIcon(name)}
              </div>
              <div className="font-medium text-lg mb-4">{name}</div>
              <button
                onClick={() => handleDownload(name)}
                disabled={downloading === name}
                className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full ${
                  downloading === name
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90'
                } text-white`}
              >
                {downloading === name ? 'Загрузка...' : 'Скачать бесплатно'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


