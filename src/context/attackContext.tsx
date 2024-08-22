import React, {
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

const attackContext = React.createContext<string>("");
const attackSetContext = React.createContext<Dispatch<SetStateAction<string>>>(
  () => {}
);

export const useAttackState = () => {
  return useContext(attackContext);
};

export const useSetAttackState = () => {
  return useContext(attackSetContext);
};

interface AttackStateProps {
  children: ReactNode;
}

export const AttackContext = ({ children }: AttackStateProps) => {
  const [attackState, setAttackState] = useState("");

  return (
    <attackContext.Provider value={attackState}>
      <attackSetContext.Provider value={setAttackState}>
        {children}
      </attackSetContext.Provider>
    </attackContext.Provider>
  );
};
