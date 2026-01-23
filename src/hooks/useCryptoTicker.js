import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { cryptoConfig, brvmStocks, brvmIndex, defaultTickerData } from '@data/tickerData'
import { API } from '@utils/constants'

export const useCryptoTicker = (refreshInterval = 60000) => {
  const [data, setData] = useState(defaultTickerData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCryptoPrices = useCallback(async () => {
    try {
      setError(null)

      const ids = cryptoConfig.map((c) => c.id).join(',')
      const response = await axios.get(`${API.COINGECKO}/simple/price`, {
        params: {
          ids,
          vs_currencies: 'usd',
          include_24hr_change: true,
        },
      })

      const cryptoData = cryptoConfig.map((crypto) => {
        const priceData = response.data[crypto.id]
        return {
          symbol: crypto.symbol,
          name: crypto.name,
          price: priceData?.usd || 0,
          change: priceData?.usd_24h_change || 0,
          color: crypto.color,
          icon: crypto.symbol.charAt(0),
          currency: 'USD',
        }
      })

      const brvmData = [
        {
          symbol: brvmIndex.symbol,
          name: brvmIndex.name,
          price: brvmIndex.value,
          change: brvmIndex.change,
          color: brvmIndex.color,
          icon: '📊',
          currency: 'XOF',
        },
        ...brvmStocks.slice(0, 2).map((stock) => ({
          symbol: stock.symbol,
          name: stock.name,
          price: stock.price,
          change: stock.change,
          color: stock.color,
          icon: stock.symbol.charAt(0),
          currency: 'XOF',
        })),
      ]

      // Interleave data
      const combinedData = []
      const maxLen = Math.max(cryptoData.length, brvmData.length)

      for (let i = 0; i < maxLen; i++) {
        if (cryptoData[i]) combinedData.push(cryptoData[i])
        if (brvmData[i]) combinedData.push(brvmData[i])
      }

      setData(combinedData)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching crypto prices:', err)
      setError(err.message)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCryptoPrices()
    const interval = setInterval(fetchCryptoPrices, refreshInterval)
    return () => clearInterval(interval)
  }, [fetchCryptoPrices, refreshInterval])

  return { data, loading, error, refetch: fetchCryptoPrices }
}