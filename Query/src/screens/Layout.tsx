import { Loading } from "../components/Loading";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

export const Layout = ({children}: {children: ReactNode}) => (
	<main className='flex flex-col min-h-screen gap-4 p-4 text-white bg-slate-800'>
		<Loading />
		{children}
		<ReactQueryDevtools initialIsOpen />
	</main>
)