import {Link} from "react-router-dom";

export default function Home() {
	return (
		<div>
			{/* Hero Section */}
			<div className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<svg
							className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>
						<div className="container-custom pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
							<div className="sm:text-center lg:text-left">
								<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
									<span className="block">
										Empowering Early
									</span>
									<span className="block text-primary">
										Childhood Education
									</span>
								</h1>
								<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
									New Horizons Life provides resources,
									training, and support for ECE directors,
									teachers, and families to create nurturing
									learning environments.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<Link
											to="/membership"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
										>
											Join Membership
										</Link>
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-3">
										<Link
											to="/about"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
										>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<img
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
						src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
						alt="Early childhood education classroom"
					/>
				</div>
			</div>

			{/* Features Section */}
			<div className="py-12 bg-white">
				<div className="container-custom">
					<div className="lg:text-center">
						<h2 className="text-base text-primary font-semibold tracking-wide uppercase">
							Features
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Comprehensive Resources for ECE Professionals
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							Everything you need to excel in early childhood
							education, all in one place.
						</p>
					</div>

					<div className="mt-10">
						<div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
											/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h3 className="text-lg leading-6 font-medium text-gray-900">
										Exclusive Content
									</h3>
									<p className="mt-2 text-base text-gray-500">
										Access webinars, toolkits, and community
										discussions designed for early childhood
										professionals.
									</p>
								</div>
							</div>

							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
											/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h3 className="text-lg leading-6 font-medium text-gray-900">
										Resource Library
									</h3>
									<p className="mt-2 text-base text-gray-500">
										Downloadable materials for lesson
										planning, classroom management, and
										professional development.
									</p>
								</div>
							</div>

							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h3 className="text-lg leading-6 font-medium text-gray-900">
										Community Forum
									</h3>
									<p className="mt-2 text-base text-gray-500">
										Connect with peers, share experiences,
										and get answers to your questions from
										other educators.
									</p>
								</div>
							</div>

							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h3 className="text-lg leading-6 font-medium text-gray-900">
										Professional Development
									</h3>
									<p className="mt-2 text-base text-gray-500">
										Enhance your skills and stay updated
										with the latest trends and best
										practices in early childhood education.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* For Audience Sections */}
			<div className="bg-gray-50 py-16">
				<div className="container-custom">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
							Tailored Content for Every Role
						</h2>
						<p className="mt-4 text-lg text-gray-500">
							Resources specifically designed for the unique needs
							of different early childhood education stakeholders.
						</p>
					</div>

					<div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
						{/* For Directors */}
						<div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
							<div className="flex-1">
								<h3 className="text-xl font-semibold text-gray-900">
									For ECE Directors
								</h3>
								<p className="mt-4 text-gray-500">
									Leadership strategies, staff training
									resources, compliance updates, and best
									practices for managing early childhood
									programs.
								</p>
								<ul className="mt-6 space-y-3">
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Leadership development</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Staff training resources</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Compliance guidance</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Program management</span>
									</li>
								</ul>
							</div>
							<Link
								to="/service/professional"
								className="mt-8 block w-full bg-gray-50 rounded-md py-2 text-sm font-semibold text-primary text-center hover:bg-gray-100"
							>
								Learn More
							</Link>
						</div>

						{/* For Teachers */}
						<div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
							<div className="flex-1">
								<h3 className="text-xl font-semibold text-gray-900">
									For Teachers
								</h3>
								<p className="mt-4 text-gray-500">
									Lesson plans, classroom management tips,
									child development insights, and professional
									development opportunities.
								</p>
								<ul className="mt-6 space-y-3">
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Ready-to-use lesson plans</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Classroom management</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Child development resources</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Professional development</span>
									</li>
								</ul>
							</div>
							<Link
								to="/class"
								className="mt-8 block w-full bg-gray-50 rounded-md py-2 text-sm font-semibold text-primary text-center hover:bg-gray-100"
							>
								Learn More
							</Link>
						</div>

						{/* For Families */}
						<div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
							<div className="flex-1">
								<h3 className="text-xl font-semibold text-gray-900">
									For Families
								</h3>
								<p className="mt-4 text-gray-500">
									Parenting guides, relationship-building
									activities, and resources for supporting
									children's early learning at home.
								</p>
								<ul className="mt-6 space-y-3">
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Parenting resources</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Family activities</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Child learning support</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Relationship building</span>
									</li>
								</ul>
							</div>
							<Link
								to="/service/family"
								className="mt-8 block w-full bg-gray-50 rounded-md py-2 text-sm font-semibold text-primary text-center hover:bg-gray-100"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<div className="bg-primary">
				<div className="container-custom py-12 md:py-16">
					<h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
						Ready to enhance your ECE program?
					</h2>
					<p className="mt-4 text-lg leading-6 text-indigo-100">
						Join the New Horizons Life community today and get
						access to all our resources.
					</p>
					<div className="mt-8 flex">
						<div className="inline-flex rounded-md shadow">
							<Link
								to="/membership"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-indigo-50"
							>
								Join Membership
							</Link>
						</div>
						<div className="ml-3 inline-flex">
							<Link
								to="/downloads"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
							>
								Free Downloads
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
