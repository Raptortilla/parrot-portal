import { createSlice } from '@reduxjs/toolkit';

export type TCommonState = {};

const initialState: TCommonState = {};

export const coverageSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updateCommon: (state, { payload }: { payload: TCommonState }) => {
      return payload;
    },
  },
});

export const { updateCommon } = coverageSlice.actions;

export default coverageSlice.reducer;
