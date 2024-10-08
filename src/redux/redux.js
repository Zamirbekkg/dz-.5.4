import { createAction, createReducer } from "@reduxjs/toolkit";

const LEASE_NUM = 'LEASE_NUM';
const LEASON_NUM = 'LEASON_NUM';
const RESET_NUM = 'RESET_NUM';
const ONEPLUS_NUM = 'ONEPLUS_NUM';
const ONEMINUS_NUM = 'ONEMINUS_NUM';

export const leasenum = createAction(LEASE_NUM);
export const leasonnum = createAction(LEASON_NUM);
export const resetnum = createAction(RESET_NUM);
export const oneplusnum = createAction(ONEPLUS_NUM);
export const oneminusnum = createAction(ONEMINUS_NUM);

const initialState = {
    num: 0 
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(leasenum, (state) => {
            state.num = Math.min(state.num + 5, 15);
        })
        .addCase(leasonnum, (state) => {
            state.num = Math.max(state.num - 5, 0);
        })
        .addCase(resetnum, (state) => {
            state.num = 0;
        })
        .addCase(oneplusnum, (state) => {
            state.num = Math.min(state.num + 1, 15);
        })
        .addCase(oneminusnum, (state) => {
            state.num = Math.max(state.num - 1, 0);
        });
});
