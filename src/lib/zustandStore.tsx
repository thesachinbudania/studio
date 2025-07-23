import { create } from 'zustand';

// Define the interface for the hotel data based on your JSON structure.
// This ensures type safety when you are working with the store's state.
interface HotelData {
  id: number | null;
  name: string;
  header_name: string;
  address: string;
  location_for_ai: string;
  phone_number: string;
  hero_image: string;
  room_1_image: string;
  room_2_image: string;
  room_3_image: string;
  bottom_image: string;
  google_map_link: string;
}

// Define the interface for the store's state, which includes the data
// and the actions that can be performed on it.
interface HotelState extends HotelData {
  setHotelData: (data: Partial<HotelData>) => void;
  // You can add other actions here if needed, for example:
  // clearHotelData: () => void;
}

// Define the initial state for the store.
// These are the default values before any data is loaded.
const initialState: HotelData = {
  id: null,
  name: '',
  header_name: '',
  address: '',
  location_for_ai: '',
  phone_number: '',
  hero_image: '',
  room_1_image: '',
  room_2_image: '',
  room_3_image: '',
  bottom_image: '',
  google_map_link: '',
};

// Create the Zustand store.
// `create` is the core function from Zustand for creating a store.
// The `set` function is used to update the state.
export const useHotelStore = create<HotelState>((set) => ({
  ...initialState,

  /**
   * Sets or updates the hotel data in the store.
   * This action merges the provided data with the existing state.
   * @param {Partial<HotelData>} data - An object containing the hotel data fields to update.
   */
  setHotelData: (data) => set((state) => ({ ...state, ...data })),

  // Example of another action to clear the data
  // clearHotelData: () => set({ ...initialState }),
}));
