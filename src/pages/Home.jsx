import {Link} from "react-router-dom";

export default function Home() {
	return (
		<div>
			{/* Hero Section */}
			<div className="relative bg-neutral-100 overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-neutral-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<svg
							className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-neutral-100 transform translate-x-1/2"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>
						<div className="container-custom pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
							<div className="sm:text-center lg:text-left">
								<h1 className="text-4xl tracking-tight font-extrabold text-dark sm:text-5xl md:text-6xl">
									<span className="block">
										Empowering Early
									</span>
									<span className="block text-primary">
										Childhood Education
									</span>
								</h1>
								<p className="mt-3 text-base text-neutral-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
									New Horizons Life provides resources,
									training, and support for ECE directors,
									teachers, and families to create nurturing
									learning environments.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<Link
											to="/contact"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
										>
											Contact Us
										</Link>
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-3">
										<Link
											to="/about"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
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
			<div className="py-12 bg-neutral-100">
				<div className="container-custom">
					<div className="lg:text-center">
						<h2 className="text-base text-primary font-semibold tracking-wide uppercase">
							Features
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark sm:text-4xl">
							Comprehensive Resources for ECE Professionals
						</p>
						<p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
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
									<h3 className="text-lg leading-6 font-medium text-dark">
										Exclusive Content
									</h3>
									<p className="mt-2 text-base text-neutral-500">
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
									<h3 className="text-lg leading-6 font-medium text-dark">
										Resource Library
									</h3>
									<p className="mt-2 text-base text-neutral-500">
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
									<h3 className="text-lg leading-6 font-medium text-dark">
										Community Forum
									</h3>
									<p className="mt-2 text-base text-neutral-500">
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
									<h3 className="text-lg leading-6 font-medium text-dark">
										Professional Development
									</h3>
									<p className="mt-2 text-base text-neutral-500">
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
			<div className="bg-neutral-200 py-16">
				<div className="container-custom">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
							Our Professional Services
						</h2>
						<p className="mt-4 text-lg text-neutral-500">
							Specialized support to meet the diverse needs of
							early childhood education.
						</p>
					</div>

					<div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
						{/* Professional Development */}
						<div className="relative p-8 bg-neutral-100 border border-neutral-200 rounded-2xl shadow-sm flex flex-col">
							<div className="flex-1">
								<h3 className="text-xl font-semibold text-dark">
									Professional Development
								</h3>
								<p className="mt-4 text-neutral-500">
									Comprehensive training programs and
									resources to enhance skills for ECE
									professionals.
								</p>
								<ul className="mt-6 space-y-3">
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Leadership workshops</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Certification programs</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Continuing education</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Mentorship opportunities</span>
									</li>
								</ul>
							</div>
							<Link
								to="/service/professional"
								className="mt-8 block w-full bg-neutral-200 rounded-md py-2 text-sm font-semibold text-primary text-center hover:bg-neutral-300"
							>
								Learn More
							</Link>
						</div>

						{/* Behavior Management */}
						<div className="relative p-8 bg-neutral-100 border border-neutral-200 rounded-2xl shadow-sm flex flex-col">
							<div className="flex-1">
								<h3 className="text-xl font-semibold text-dark">
									Behavior Management
								</h3>
								<p className="mt-4 text-neutral-500">
									Evidence-based strategies for creating
									positive learning environments and managing
									challenging behaviors.
								</p>
								<ul className="mt-6 space-y-3">
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>
											Classroom management techniques
										</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>
											Positive discipline strategies
										</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>
											Social-emotional development
										</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Conflict resolution skills</span>
									</li>
								</ul>
							</div>
							<Link
								to="/service/behavior"
								className="mt-8 block w-full bg-neutral-200 rounded-md py-2 text-sm font-semibold text-primary text-center hover:bg-neutral-300"
							>
								Learn More
							</Link>
						</div>

						{/* NAEYC Accreditation */}
						<div className="relative p-8 bg-neutral-100 border border-neutral-200 rounded-2xl shadow-sm flex flex-col">
							<div className="flex-1">
								<h3 className="text-xl font-semibold text-dark">
									NAEYC Accreditation Support
								</h3>
								<p className="mt-4 text-neutral-500">
									Guidance and resources to help programs
									achieve and maintain NAEYC accreditation.
								</p>
								<ul className="mt-6 space-y-3">
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Standards compliance</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Documentation assistance</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>
											Quality improvement planning
										</span>
									</li>
									<li className="flex">
										<span className="text-primary mr-2">
											✓
										</span>
										<span>Site visit preparation</span>
									</li>
								</ul>
							</div>
							<Link
								to="/service/naeyc"
								className="mt-8 block w-full bg-neutral-200 rounded-md py-2 text-sm font-semibold text-primary text-center hover:bg-neutral-300"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Strategic Partnerships Section */}
			<div className="bg-neutral-100 py-16">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
							Strategic Partnerships
						</h2>
						<p className="mt-4 text-lg text-neutral-500">
							Collaborating with leading organizations to advance
							early childhood education.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Partnership Card 1 */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 flex items-start">
							<div className="flex-shrink-0 bg-primary rounded-md p-3 mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-white"
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
							<div>
								<h3 className="text-lg font-semibold text-dark">
									Gordon College
								</h3>
								<p className="mt-2 text-neutral-500">
									Certified online ECE college-credit courses
								</p>
							</div>
						</div>

						{/* Partnership Card 2 */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 flex items-start">
							<div className="flex-shrink-0 bg-secondary rounded-md p-3 mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-white"
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
							<div>
								<h3 className="text-lg font-semibold text-dark">
									Footsteps Childcare, ICRI-Stanford
								</h3>
								<p className="mt-2 text-neutral-500">
									Three U.S.-based collaborative sites
								</p>
							</div>
						</div>

						{/* Partnership Card 3 */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 flex items-start">
							<div className="flex-shrink-0 bg-accent rounded-md p-3 mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-dark">
									Soong Ching Ling Foundation
								</h3>
								<p className="mt-2 text-neutral-500">
									Cross-cultural initiative partner
								</p>
							</div>
						</div>

						{/* Partnership Card 4 */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 flex items-start">
							<div className="flex-shrink-0 bg-blue-500 rounded-md p-3 mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-dark">
									NAEYC Global Office
								</h3>
								<p className="mt-2 text-neutral-500">
									Accreditation and curriculum consulting
									partner
								</p>
							</div>
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
					<p className="mt-4 text-lg leading-6 text-blue-100">
						Join the New Horizons Life community today and get
						access to all our resources.
					</p>
					<div className="mt-8 flex">
						{/* <div className="inline-flex rounded-md shadow">
							<Link
								to="/contact"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-neutral-100 hover:bg-neutral-200"
							>
								Contact Us
							</Link>
						</div> */}
						<div className="inline-flex">
							<Link
								to="/contact"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90"
							>
								Get in Touch
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
