import {useState} from "react";
import {Link} from "react-router-dom";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Fragment} from "react";

const navigation = [
	{name: "About", href: "/about", current: false},
	{
		name: "Service",
		href: "#",
		current: false,
		dropdown: true,
		children: [
			{name: "Professional", href: "/service/professional"},
			{name: "Behavior", href: "/service/behavior"},
			{name: "NAEYC", href: "/service/naeyc"},
			{name: "Family", href: "/service/family"},
		],
	},
	{name: "Contact", href: "/contact", current: false},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState({});

	const toggleDropdown = (name) => {
		setDropdownOpen((prev) => ({
			...prev,
			[name]: !prev[name],
		}));
	};

	return (
		<Disclosure as="nav" className="bg-neutral-100 shadow-sm relative z-40">
			{({open}) => (
				<>
					<div className="container-custom">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<Link
										to="/"
										className="text-2xl font-bold text-primary"
									>
										New Horizons Life
									</Link>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) =>
											!item.dropdown ? (
												<Link
													key={item.name}
													to={item.href}
													className={classNames(
														"nav-link px-3 py-2 text-sm font-medium"
													)}
												>
													{item.name}
												</Link>
											) : (
												<Menu
													as="div"
													className="relative ml-3"
													key={item.name}
												>
													<div>
														<Menu.Button className="nav-link flex items-center px-3 py-2 text-sm font-medium">
															{item.name}
															<svg
																className="ml-1 h-4 w-4"
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	fillRule="evenodd"
																	d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
																	clipRule="evenodd"
																/>
															</svg>
														</Menu.Button>
													</div>
													<Transition
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-neutral-100 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
															{item.children.map(
																(child) => (
																	<Menu.Item
																		key={
																			child.name
																		}
																	>
																		{({
																			active,
																		}) => (
																			<Link
																				to={
																					child.href
																				}
																				className={classNames(
																					active
																						? "bg-neutral-200"
																						: "",
																					"block px-4 py-2 text-sm text-neutral-700"
																				)}
																			>
																				{
																					child.name
																				}
																			</Link>
																		)}
																	</Menu.Item>
																)
															)}
														</Menu.Items>
													</Transition>
												</Menu>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) =>
								!item.dropdown ? (
									<Disclosure.Button
										key={item.name}
										as={Link}
										to={item.href}
										className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-200 hover:text-primary"
									>
										{item.name}
									</Disclosure.Button>
								) : (
									<div key={item.name}>
										<Disclosure.Button
											className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-200 hover:text-primary"
											onClick={() =>
												toggleDropdown(item.name)
											}
										>
											<span>{item.name}</span>
											<svg
												className={`${
													dropdownOpen[item.name]
														? "rotate-180"
														: ""
												} h-5 w-5 transform transition-transform duration-200`}
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
													clipRule="evenodd"
												/>
											</svg>
										</Disclosure.Button>
										{dropdownOpen[item.name] && (
											<div className="ml-4 space-y-1">
												{item.children.map((child) => (
													<Disclosure.Button
														key={child.name}
														as={Link}
														to={child.href}
														className="block rounded-md px-3 py-2 text-base font-medium text-neutral-500 hover:bg-neutral-200 hover:text-primary"
													>
														{child.name}
													</Disclosure.Button>
												))}
											</div>
										)}
									</div>
								)
							)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
