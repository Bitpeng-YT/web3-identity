import { Card, CardHeader, CardContent, CardFooter } from './Card'
import { Hash, Tag, Users, ArrowRight } from 'lucide-react'
import { Identity } from '../utils/generateIdentity'

interface Props {
  identity: Identity
}

export default function IdentityCard({ identity }: Props) {
  return (
    <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-0 rounded-2xl shadow-xl">
      <CardHeader className="flex items-center space-x-4">
        <Hash size={32} className="text-primary" />
        <div>
          <h2 className="text-2xl font-bold text-white">{identity.title}</h2>
          <p className="text-sm text-gray-300">{identity.faction}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg text-white">{identity.description}</p>
        <div className="flex flex-wrap gap-2">
          {identity.tags.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <span className="text-sm text-gray-400">
          {identity.address || '匿名'}
        </span>
      </CardFooter>
    </Card>
  )
}
