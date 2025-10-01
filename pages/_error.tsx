import { NextPageContext } from 'next'

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div className="min-h-screen grid place-items-center bg-black text-white">
      <div className="text-center">
        <div className="text-6xl font-bold">{statusCode || 500}</div>
        <p className="text-white/70 mt-2">Something went wrong.</p>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? (err as any).statusCode : 404
  return { statusCode }
}

export default Error



