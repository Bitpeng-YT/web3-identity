/**
 * Simple Card component using Tailwind CSS.
 * Keeps the UI consistent across the app.
 */
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 rounded-2xl ${className}`}>{children}</div>
}
export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex items-center ${className}`}>{children}</div>
}
export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mt-4 ${className}`}>{children}</div>
}
export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mt-6 ${className}`}>{children}</div>
}
