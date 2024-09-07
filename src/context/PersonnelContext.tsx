import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Personnel {
  id: number;
  name: string;
  position: string;
  email: string;
}

interface PersonnelState {
  list: Personnel[];
}

interface PersonnelAction {
  type: 'ADD_PERSONNEL' | 'SET_PERSONNEL';
  payload: Personnel | Personnel[];
}

const initialState: PersonnelState = {
  list: [],
};

const PersonnelContext = createContext<{ state: PersonnelState; dispatch: React.Dispatch<PersonnelAction> } | undefined>(undefined);

const personnelReducer = (state: PersonnelState, action: PersonnelAction): PersonnelState => {
  switch (action.type) {
    case 'SET_PERSONNEL':
      return { ...state, list: action.payload as Personnel[] };
    case 'ADD_PERSONNEL':
      return { ...state, list: [...state.list, action.payload as Personnel] };
    default:
      return state;
  }
};

export const PersonnelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(personnelReducer, initialState);
  return (
    <PersonnelContext.Provider value={{ state, dispatch }}>
      {children}
    </PersonnelContext.Provider>
  );
};

export const usePersonnel = () => {
  const context = useContext(PersonnelContext);
  if (context === undefined) {
    throw new Error('usePersonnel must be used within a PersonnelProvider');
  }
  return context;
};
