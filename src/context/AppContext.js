import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [modalActive, setModalActive] = useState(false);
	return (
		<AppContext.Provider
			value={{
				modalActive,
				setModalActive,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
