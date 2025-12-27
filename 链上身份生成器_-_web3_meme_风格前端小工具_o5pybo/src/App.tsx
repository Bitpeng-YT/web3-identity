import { useState } from 'react'
import { generateIdentity, Identity } from './utils/generateIdentity'
import IdentityCard from './components/IdentityCard'
import { Wallet, ArrowRight } from 'lucide-react'

function App() {
  const [address, setAddress] = useState('')
  const [identity, setIdentity] = useState<Identity | null>(null)

  const handleGenerate = () => {
    const id = generateIdentity(address.trim())
    setIdentity(id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center p-4">
      {/* Background image */}
      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1587614382346-5b1b6b3b5c3e?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <h1 className="text-4xl font-extrabold mb-8 flex items-center space-x-3">
        <Wallet size={48} className="text-primary" />
        <span>链上身份生成器</span>
      </h1>

      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="输入钱包地址（可选）"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          onClick={handleGenerate}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary/80 transition-colors text-white font-semibold"
        >
          <ArrowRight size={20} />
          生成身份
        </button>
      </div>

      {identity && (
        <div className="mt-8 w-full max-w-2xl">
          <IdentityCard identity={identity} />
        </div>
      )}
    </div>
  )
}

export default App
