import { useCryptoTicker } from '@hooks'
import { formatCurrency, formatXOF, formatPercent, cn } from '@utils/helpers'

const CryptoTicker = () => {
  const { data, loading } = useCryptoTicker(60000)

  const tickerData = [...data, ...data]

  return (
    <div className="bg-primary-light border-b border-border overflow-hidden h-[44px] flex items-center">
      <div className="relative w-full">
        <div
          className={cn(
            'flex animate-ticker-scroll hover:[animation-play-state:paused]',
            loading && 'opacity-50'
          )}
        >
          {tickerData.map((item, index) => (
            <div
              key={`${item.symbol}-${index}`}
              className="flex items-center gap-2 px-6 whitespace-nowrap"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ backgroundColor: item.color }}
              >
                {item.icon || item.symbol.charAt(0)}
              </div>

              <span className="font-mono font-bold text-text-primary text-sm">
                {item.symbol}
              </span>

              <span className="font-mono text-accent-green text-sm">
                {item.currency === 'XOF'
                  ? formatXOF(item.price)
                  : formatCurrency(item.price, 'USD')}
              </span>

              <span
                className={cn(
                  'font-mono text-xs px-1.5 py-0.5 rounded',
                  item.change >= 0
                    ? 'bg-accent-green-dim text-accent-green'
                    : 'bg-red-500/20 text-red-400'
                )}
              >
                {formatPercent(item.change)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CryptoTicker