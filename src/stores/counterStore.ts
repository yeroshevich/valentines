import {create} from "zustand";

interface IAppStoreFields{
  heartsSize: number;
  // in pixels per second
  heartsSpeed: number;
  shakeLevel: number;
}

export interface IAppStore extends IAppStoreFields{
  increaseState: (newState: Partial<IAppStoreFields>) => void;
}

export const appStore = create<IAppStore>((set) => ({
  heartsSize: 45,
  heartsSpeed: 10,
  shakeLevel: 0,
  increaseState: (newState) => set((state: IAppStore) => ({
    ...state,
    ...(Object.fromEntries(Object.keys(newState).map((key: string) => {
      return [key, state[key as keyof IAppStoreFields] + Number(newState[key as keyof IAppStoreFields])];
    }))),
  })),
}))
