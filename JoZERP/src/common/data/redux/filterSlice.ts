import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    programLevel: string;
    degree: string;
    courses: string[];
}

const initialState: FilterState = {
    programLevel: '',
    degree: '',
    courses: [],
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setProgramLevel: (state, action: PayloadAction<string>) => {
            state.programLevel = action.payload;
        },
        setDegree: (state, action: PayloadAction<string>) => {
            state.degree = action.payload;
        },
        toggleCourse: (state, action: PayloadAction<string>) => {
            const index = state.courses.indexOf(action.payload);
            if (index === -1) {
                state.courses.push(action.payload);
            } else {
                state.courses.splice(index, 1);
            }
        },
        resetFilters: (state) => {
            state.programLevel = '';
            state.degree = '';
            state.courses = initialState.courses;
        },
    },
});

export const { setProgramLevel, setDegree, toggleCourse, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
