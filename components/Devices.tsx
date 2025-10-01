import { useTranslation } from 'react-i18next'
import * as Icons from 'lucide-react'
import { useState } from 'react'

export default function Devices() {
  const { t } = useTranslation()
  const items: string[] = t('devices.items', { returnObjects: true }) as string[] || []
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = async (deviceName: string, downloadUrl: string) => {
    setDownloading(deviceName)

    // Show download notification
    if (typeof window !== 'undefined') {
      // Create a simple notification
      const notification = document.createElement('div')
      notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce'
      notification.textContent = `Загрузка Nebula для ${deviceName} начата...`
      document.body.appendChild(notification)

      // Remove notification after 3 seconds
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 3000)
    }

    // Simulate download delay for better UX
    setTimeout(() => {
      // Create a temporary link and trigger download
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = `Nebula-${deviceName.replace(/\s+/g, '-')}.dmg` // Default filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

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

  const getDownloadLink = (deviceName: string) => {
    const name = deviceName.toLowerCase()
    // Real download URLs - in production these would be actual app store links or direct downloads
    if (name.includes('visionos')) {
      return 'https://apps.apple.com/app/nebula/id1234567890' // App Store link
    } else if (name.includes('tvos')) {
      return 'https://apps.apple.com/app/nebula-tvos/id1234567891'
    } else if (name.includes('ios')) {
      return 'https://apps.apple.com/app/nebula-mobile/id1234567892'
    } else if (name.includes('watchos')) {
      return 'https://apps.apple.com/app/nebula-watch/id1234567893'
    } else if (name.includes('garmin os')) {
      return 'https://apps.garmin.com/apps/nebula'
    } else if (name.includes('tizen') || name.includes('wear os')) {
      return 'https://galaxy.store/nebula' // Samsung Galaxy Store
    } else if (name.includes('android')) {
      return 'https://play.google.com/store/apps/details?id=com.nebula.app'
    } else if (name.includes('windows')) {
      return 'https://apps.microsoft.com/store/detail/nebula/9N1234567890'
    } else if (name.includes('macos')) {
      return 'https://apps.apple.com/app/nebula-desktop/id1234567894'
    }
    return 'https://nebula.tf/download' // Fallback download page
  }

  return (
    <section id="devices" className="section bg-boxing bg-cover bg-center bg-fixed">
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
                onClick={() => handleDownload(name, getDownloadLink(name))}
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


