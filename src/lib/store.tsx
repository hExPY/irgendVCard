import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IApplicationStore {
    content: string
    setContent: (newContent: string) => void
}

const useApplicationStore = create<IApplicationStore>()(
    devtools(
        persist(
            (set) => ({
                content: "",
                setContent: (newContent: string ) => set({ content: newContent })
            }),
            {
                name: 'application-store',
            }
        )
    )
)

export {useApplicationStore};