// mmkv.ts
import { createMMKV } from 'react-native-mmkv'

export const strorage = createMMKV()


export const MMKVStorageAdapter = {
  getItem: async (key: string): Promise<string | null> => {
    const value = strorage.getString(key)
    return value ?? null
  },

  setItem: async (key: string, value: string): Promise<void> => {
    strorage.set(key, value)
  },

  removeItem: async (key: string): Promise<void> => {
    strorage.remove(key)
  },
}