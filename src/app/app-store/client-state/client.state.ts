
import {createReducer, on, State} from "@ngrx/store";
import {CreateClientAction} from "./client.action";

export const initialState : null = null

export let value: State<Credential>| null = null

export const reducer = createReducer(
  initialState,
  on(CreateClientAction, (state)=> value = state ),
)
