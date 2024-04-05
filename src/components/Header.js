'use client'
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        // Handle logout logic
        router.push('/login');
    };

    return (
        <header>
            <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <img
                            alt="crowdfundme logo"
                            className="logo"
                            src="/crowdfundme-logo.svg"
                            width="150"
                            height="100"
                        />
                    </Link>
                    { !pathname.includes('login') && (<div className="flex items-center lg:order-2">
                        <div
                            className="cursor-pointer text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:ring-gray-800"
                            onClick={handleLogout}>
                            Se déconnecter
                        </div>
                    </div>
                    ) }
                    <div
                        id="mobile-menu-2"
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 border-gray-700"
                                >
                                    Projets
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 border-gray-700"
                                >
                                    Contribuer
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 border-gray-700"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
