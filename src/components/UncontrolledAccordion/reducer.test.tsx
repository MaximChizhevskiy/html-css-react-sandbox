import {reducer, StateType} from "./reducer";

test('collapsed value should be true', () => {
    //data
const state: StateType = {
    collapsed:false
}
    //action
   const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})
    //expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed value should be false', () => {
    //data
    const state: StateType = {
        collapsed:true
    }
    //action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})
    //expectation
    expect(newState.collapsed).toBe(false)
})

test('Error option', () => {
    //data
    const state: StateType = {
        collapsed:true
    }
    //action

    //expectation
    expect(() => {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrow()
})
