import {Link} from "react-router-dom";

export default function About() {
	return (
		<div className="bg-neutral-100">
			{/* Hero section */}
			<div className="bg-neutral-200 py-24 sm:py-32">
				<div className="container-custom">
					<div className="max-w-2xl">
						<h2 className="text-4xl font-bold tracking-tight text-dark sm:text-6xl">
							About New Horizons Life
						</h2>
						<p className="mt-6 text-lg leading-8 text-neutral-600">
							Founded by Dr. Nili Luo, empowering families and
							early childhood educators to create nurturing
							environments where children can thrive.
						</p>
					</div>
				</div>
			</div>

			{/* Founder section */}
			<div className="py-16 sm:py-24">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<img
								src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
								alt="Dr. Nili Luo"
								className="rounded-lg shadow-lg"
							/>
						</div>
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
								About Dr. Nili Luo
							</h2>
							<p className="mt-4 text-lg text-neutral-500">
								Dr. Nili Luo is a parenting/family coach, early
								childhood expert, and faith-based educator with
								over 30 years of experience helping families and
								teachers raise thriving, whole children. Through
								personalized coaching and Christ-centered
								guidance, she helps parents feel confident,
								connected, and supported in their parenting
								journey.
							</p>
							<p className="mt-4 text-lg text-neutral-500">
								As the founder and lead parenting/family coach
								at New Horizons Life, Dr. Luo combines her
								expertise in child development with a deep
								understanding of family dynamics to provide
								holistic support for parents and educators
								alike.
							</p>
							<p className="mt-4 text-lg text-neutral-500">
								Dr. Luo was mentored by Dr. Kevin Nugent, the
								esteemed founder of the Brazelton Institute at
								Boston Children's Hospital, and brings a
								uniquely balanced perspective combining Western
								child development psychology and Eastern
								cultural values.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Mission section */}
			<div className="bg-neutral-200 py-16 sm:py-24">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
								Our Mission
							</h2>
							<p className="mt-4 text-lg text-neutral-500">
								To simplify education, eliminate barriers, and
								deliver inclusive, high-quality learning
								experiences that empower educators, support
								families, and help children thrive—from birth
								through college admission—across cultures and
								continents.
							</p>

							<p className="mt-4 text-lg text-neutral-500">
								We believe every child deserves the opportunity
								to thrive, and every parent deserves the support
								to lead. We deliver personalized, research-based
								services that are culturally grounded,
								emotionally attuned, and globally aligned.
							</p>
							<p className="mt-4 text-lg text-neutral-500">
								We help families develop confidence in their
								parenting journey and create lifelong learning
								pathways for their children.
							</p>
						</div>
						<div className="order-first lg:order-last">
							<img
								src="https://images.unsplash.com/photo-1617870122913-bcb9ab0d21e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
								alt="Children playing and learning"
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Business History section */}
			<div className="py-16 sm:py-24">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="order-first lg:order-last">
							<img
								src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
								alt="Business history timeline"
								className="rounded-lg shadow-lg"
							/>
						</div>
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
								Business History
							</h2>
							<p className="mt-4 text-lg text-neutral-500">
								Founded over 12 years ago, New Horizons Life is
								a pioneering leader in family coaching,
								parenting support, and early childhood
								education. The organization was established by
								Dr. Nili Luo, a globally recognized expert in
								child development and whole-child development.
							</p>
							<p className="mt-4 text-lg text-neutral-500">
								With a focus primarily on parents and families,
								we provide the guidance and resources needed to
								navigate the challenges of raising children in
								today's complex world. While we also welcome
								early childhood educators, our primary mission
								is to support families directly.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Milestones & Impact Highlights Timeline section */}
			<div className="py-16 sm:py-24 bg-neutral-200">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
								Milestones & Impact Highlights
							</h2>
							<p className="mt-4 text-lg leading-8 text-neutral-600">
								Our journey of excellence in supporting families
								and educators
							</p>
						</div>

						{/* Timeline */}
						<div className="relative">
							{/* Vertical line */}
							<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>

							{/* Timeline items */}
							<div className="space-y-12">
								{/* Item 1 - Left side */}
								<div className="relative z-10 flex items-center">
									<div className="md:w-[calc(50%-1.5rem)] md:mr-3 md:text-right hidden md:block"></div>
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg z-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.48 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
											/>
										</svg>
									</div>
									<div className="md:w-[calc(50%-1.5rem)] md:ml-3 w-full ml-4 md:ml-0">
										<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
											<h3 className="text-xl font-semibold text-primary mb-2">
												Academic Excellence
											</h3>
											<p className="text-neutral-600">
												100% college admission rate for
												students supported through our
												long-term academic and family
												services
											</p>
										</div>
									</div>
								</div>

								{/* Item 2 - Right side */}
								<div className="relative z-10 flex items-center">
									<div className="md:w-[calc(50%-1.5rem)] md:mr-3 w-full mr-4 md:mr-0 md:text-right">
										<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
											<h3 className="text-xl font-semibold text-warmth-500 mb-2">
												National Recognition
											</h3>
											<p className="text-neutral-600">
												One of our students became the
												first preschool teacher in U.S.
												to win the U.S. National Teacher
												of the Year Award (2020) — a
												historic and unprecedented
												achievement
											</p>
										</div>
									</div>
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-warmth-500 flex items-center justify-center text-white shadow-lg z-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
											/>
										</svg>
									</div>
									<div className="md:w-[calc(50%-1.5rem)] md:ml-3 hidden md:block"></div>
								</div>

								{/* Item 3 - Left side */}
								<div className="relative z-10 flex items-center">
									<div className="md:w-[calc(50%-1.5rem)] md:mr-3 md:text-right hidden md:block"></div>
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg z-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
											/>
										</svg>
									</div>
									<div className="md:w-[calc(50%-1.5rem)] md:ml-3 w-full ml-4 md:ml-0">
										<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
											<h3 className="text-xl font-semibold text-secondary mb-2">
												Community Impact
											</h3>
											<p className="text-neutral-600">
												Our parent-focused workshops
												have helped over 5,000 families
												develop stronger connections and
												nurturing home environments
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA section */}
			<div className="bg-primary">
				<div className="container-custom py-16">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Connect With Dr. Nili Luo
						</h2>
						<p className="mt-4 text-lg leading-8 text-blue-100">
							Take the first step toward confident, connected
							parenting with personalized coaching and support.
						</p>
						<div className="mt-8 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-neutral-100 px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-neutral-200"
							>
								Contact Us
							</Link>
							<Link
								to="/team"
								className="text-sm font-semibold leading-6 text-white"
							>
								Meet Our Team <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
