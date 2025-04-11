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
									<span
										className="block text-primary"
										style={{
											color: "#2E3A3A",
											paddingBottom: "10px",
										}}
									>
										Empowering Families
									</span>
									<span className="block text-primary">
										Through Faith-Based Guidance
									</span>
								</h1>
								<p className="mt-3 text-base text-neutral-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
									Dr. Nili Luo provides personalized parenting
									and family coaching to help you raise
									thriving, whole children through
									Christ-centered guidance and evidence-based
									practices.
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
						src="./images/Asian Family.jpg"
						alt="Happy family spending time together"
					/>
				</div>
			</div>

			{/* Features Section */}
			<div className="py-12 bg-neutral-100">
				<div className="container-custom">
					<div className="lg:text-center">
						<h2 className="text-base text-primary font-semibold tracking-wide uppercase">
							Services
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark sm:text-4xl">
							Comprehensive Support for Families
						</p>
						<p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
							Dr. Nili Luo offers personalized coaching and
							resources to help you navigate the challenges of
							parenting with confidence.
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
										Personalized Parenting Coaching
									</h3>
									<p className="mt-2 text-base text-neutral-500">
										Receive tailored guidance to address
										your specific family challenges and
										build stronger parent-child
										relationships.
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
										Faith-Based Resources
									</h3>
									<p className="mt-2 text-base text-neutral-500">
										Access Christ-centered materials that
										integrate biblical principles with child
										development expertise.
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
										Family Workshops
									</h3>
									<p className="mt-2 text-base text-neutral-500">
										Participate in interactive sessions
										designed to strengthen family bonds and
										develop effective parenting skills.
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
										Educator Support
									</h3>
									<p className="mt-2 text-base text-neutral-500">
										Early childhood educators can also
										benefit from our professional
										development opportunities and classroom
										resources.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* About Section */}
			<div className="bg-neutral-200 py-16">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<img
								src="./images/NiLi Presentation.JPG"
								alt="Dr. Nili Luo"
								className="rounded-lg shadow-lg aspect-[5/6] object-cover"
							/>
						</div>
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
								Meet Dr. Nili Luo
							</h2>
							<p className="mt-4 text-lg text-neutral-600">
								With over 30 years of experience as a
								parenting/family coach and early childhood
								expert, Dr. Nili Luo is passionate about helping
								families raise thriving, whole children through
								personalized coaching and Christ-centered
								guidance.
							</p>
							<p className="mt-4 text-lg text-neutral-600">
								As the founder of New Horizons Life, she
								combines her expertise in child development with
								a deep understanding of family dynamics to
								provide holistic support that makes parents feel
								confident, connected, and supported in their
								parenting journey.
							</p>
							<div className="mt-8">
								<Link
									to="/about"
									className="text-primary font-medium hover:underline"
								>
									Learn more about Dr. Nili Luo{" "}
									<span aria-hidden="true">→</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials section */}
			<div className="bg-neutral-100 py-16">
				<div className="container-custom">
					<div className="lg:text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
							What Families Are Saying
						</h2>
						<p className="mt-4 max-w-2xl text-lg text-neutral-500 lg:mx-auto">
							Hear from parents who have transformed their family
							dynamics through our coaching.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
							<div className="flex items-center mb-4">
								<div className="text-yellow-400 flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
							</div>
							<p className="text-neutral-600 italic mb-4">
								"Dr. Nili's guidance transformed our family
								dynamics. Her Christ-centered approach helped us
								address behavioral issues with our toddler while
								strengthening our faith as parents."
							</p>
							<div>
								<p className="font-semibold text-dark">
									Sarah Johnson
								</p>
								<p className="text-sm text-neutral-500">
									Mother of two
								</p>
							</div>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
							<div className="flex items-center mb-4">
								<div className="text-yellow-400 flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
							</div>
							<p className="text-neutral-600 italic mb-4">
								"As a single dad, I was struggling with
								parenting. Dr. Luo's coaching gave me practical
								tools and the spiritual foundation to build a
								nurturing home for my children."
							</p>
							<div>
								<p className="font-semibold text-dark">
									Michael Thomas
								</p>
								<p className="text-sm text-neutral-500">
									Father of three
								</p>
							</div>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
							<div className="flex items-center mb-4">
								<div className="text-yellow-400 flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
							</div>
							<p className="text-neutral-600 italic mb-4">
								"I'm both a parent and an early childhood
								educator. Dr. Nili's resources have been
								invaluable in both roles, helping me create
								nurturing environments at home and in my
								classroom."
							</p>
							<div>
								<p className="font-semibold text-dark">
									Jennifer Martinez
								</p>
								<p className="text-sm text-neutral-500">
									Parent and preschool teacher
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA section */}
			<div className="bg-primary">
				<div className="container-custom py-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
								Ready to transform your parenting journey?
							</h2>
							<p className="mt-4 text-lg text-blue-100">
								Connect with Dr. Nili Luo for personalized
								coaching that integrates faith-based principles
								with evidence-based practices. Take the first
								step toward confident, connected parenting
								today.
							</p>
							<div className="mt-8 flex flex-col sm:flex-row gap-4">
								<Link
									to="/contact"
									className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-blue-50"
								>
									Schedule a Consultation
								</Link>
								<Link
									to="/about"
									className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-dark"
								>
									Learn More
								</Link>
							</div>
						</div>
						<div className="hidden lg:block">
							<img
								src="./images/Asian Child.jpg"
								alt="Happy family"
								className="rounded-lg shadow-lg aspect-square object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
