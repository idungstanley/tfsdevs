import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    selectedRoleId: null | string;
    selectedCategory: null | string;
    signupAccountType: null | string;
    emailToVerify: string | null;
    signupCurrentStep: string;
}

const initialState: InitialState = {
    selectedRoleId: null,
    selectedCategory: null,
    signupAccountType: null,
    emailToVerify: null,
    signupCurrentStep: 'sign-up'
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSelectedRoleId: (state, action: PayloadAction<string | null>) => {
            state.selectedRoleId = action.payload;
        },
        setSelectedCategory: (state, action: PayloadAction<string | null>) => {
            state.selectedCategory = action.payload;
        },
        setSignupAccountType: (state, action: PayloadAction<string | null>) => {
            state.signupAccountType = action.payload;
        },
        setEmailToVerify: (state, action: PayloadAction<string | null>) => {
            state.emailToVerify = action.payload;
        },
        setSignupCurrentStep: (state, action: PayloadAction<string>) => {
            state.signupCurrentStep = action.payload;
        }
    }
});

export const {
    setSelectedRoleId,
    setSignupAccountType,
    setSelectedCategory,
    setEmailToVerify,
    setSignupCurrentStep
} = authSlice.actions;
export default authSlice.reducer;
