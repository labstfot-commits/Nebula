import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const COMPANIES = [
  'Codeon','Linguix','Snap Repair','Blatota Nax','Kinalia','Platera','Nixa','Vivra Bank','Luvry','Structara','Drifta','Mookie','Aerava','Tivvo','BRVK','Blushé','Светлая Память','WebTown','HFMuseu','SantRobo','YW Tech','EneCtron','SkyLib','Eliza','Heyya'
]

export default function EcosystemCarousel() {
  const { t } = useTranslation()
  const list = useMemo(() => [...COMPANIES, ...COMPANIES], [])
  return (
    <section className="section bg-fans bg-cover bg-center" id="community">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">{t('ecosystem.title')}</h2>
        <div className="overflow-hidden border border-white/10 rounded-lg">
          <div className="flex animate-[marquee_25s_linear_infinite]">
            {list.map((c, idx) => (
              <div key={idx} className="min-w-[240px] p-6 bg-black/50 hover:bg-black/70 transition cursor-pointer">
                <div className="text-lg font-medium">{c}</div>
                <div className="text-xs text-white/60">Hover preview</div>
              </div>
            ))}
          </div>
        </div>
        <style jsx global>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
      </div>
    </section>
  )
}


