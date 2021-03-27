import { createContext } from "react";

import User from "../interfaces/User";

interface IUserContext {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const UserContext = createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
});

export default UserContext;
