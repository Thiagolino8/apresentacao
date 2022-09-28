import { Loading } from "../components/Loading";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";

export const Layout = () => (
	<main className='flex flex-col min-h-screen gap-4 p-4 text-white bg-slate-800'>
		<Loading />
		<Outlet/>
		<ReactQueryDevtools initialIsOpen />
	</main>
)