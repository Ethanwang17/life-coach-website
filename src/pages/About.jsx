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
							Empowering early childhood education professionals
							and families to create nurturing learning
							environments where children can thrive.
						</p>
					</div>
				</div>
			</div>

			{/* Mission section */}
			<div className="py-16 sm:py-24">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<img
								src="https://images.unsplash.com/photo-1617870122913-bcb9ab0d21e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
								alt="Children playing and learning"
								className="rounded-lg shadow-lg"
							/>
						</div>
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
								to thrive, and every educator deserves the
								support to lead. We deliver personalized,
								research-based services that are culturally
								grounded, emotionally attuned, and globally
								aligned.
							</p>
							<p className="mt-4 text-lg text-neutral-500">
								We help early childhood professionals achieve
								their career dreams, and we help families
								develop lifelong learning pathways for their
								children.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Business History section */}
			<div className="bg-neutral-200 py-16 sm:py-24">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
								Business History
							</h2>
							<p className="mt-4 text-lg text-neutral-500">
								Founded over 12 years ago, ABC Education LLC is
								a pioneering, cross-border leader in early
								childhood education, family support, and
								professional development. The organization was
								established by Dr. Luo, a globally recognized
								expert in bilingual education and whole-child
								development.
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
						<div className="order-first lg:order-last">
							<img
								src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
								alt="Business history timeline"
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Milestones & Impact Highlights Timeline section */}
			<div className="py-16 sm:py-24 bg-neutral-100">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
								Milestones & Impact Highlights
							</h2>
							<p className="mt-4 text-lg leading-8 text-neutral-600">
								Our journey of excellence in early childhood
								education
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
												students supported through ABC's
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
												d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
											/>
										</svg>
									</div>
									<div className="md:w-[calc(50%-1.5rem)] md:ml-3 w-full ml-4 md:ml-0">
										<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
											<h3 className="text-xl font-semibold text-secondary mb-2">
												Business Consulting
											</h3>
											<p className="text-neutral-600">
												Guided a Chinese preschool chain
												in preparing for stock market
												listing, providing educational
												and strategic consulting
											</p>
										</div>
									</div>
								</div>

								{/* Item 4 - Right side */}
								<div className="relative z-10 flex items-center">
									<div className="md:w-[calc(50%-1.5rem)] md:mr-3 w-full mr-4 md:mr-0 md:text-right">
										<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
											<h3 className="text-xl font-semibold text-blue-500 mb-2">
												Global System Design
											</h3>
											<p className="text-neutral-600">
												Designed a system of
												International Early Childhood
												Schools tailored for North,
												Mid-West, and South China
											</p>
										</div>
									</div>
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg z-10">
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
												d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
											/>
										</svg>
									</div>
									<div className="md:w-[calc(50%-1.5rem)] md:ml-3 hidden md:block"></div>
								</div>

								{/* Item 5 - Left side */}
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
												d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
											/>
										</svg>
									</div>
									<div className="md:w-[calc(50%-1.5rem)] md:ml-3 w-full ml-4 md:ml-0">
										<div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
											<h3 className="text-xl font-semibold text-primary mb-2">
												Leadership Development
											</h3>
											<p className="text-neutral-600">
												Trained nearly 100 preschool
												directors across China in
												accreditation, global DAP
												(Developmentally Appropriate
												Practice), and leadership best
												practices
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Values section */}
			<div className="bg-neutral-100 py-16 sm:py-24">
				<div className="container-custom">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
							Our Values
						</h2>
						<p className="mt-4 text-lg leading-8 text-neutral-600">
							These core principles guide everything we do at New
							Horizons Life.
						</p>
					</div>
					<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<div className="bg-neutral-100 rounded-lg shadow-sm p-8 border border-neutral-200">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
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
										d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-dark">
								Equity
							</h3>
							<p className="mt-4 text-neutral-500">
								We're committed to eliminating barriers by
								creating inclusive learning environments where
								every child has equal access to opportunities.
								Our approaches recognize and address systemic
								challenges while celebrating the unique
								strengths each individual brings to the
								community.
							</p>
						</div>
						<div className="bg-neutral-100 rounded-lg shadow-sm p-8 border border-neutral-200">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
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
										d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-dark">
								Family-Centered
							</h3>
							<p className="mt-4 text-neutral-500">
								We recognize families as the first and most
								important teachers in a child's life. Our
								services honor diverse family structures and
								cultural backgrounds, partnering with parents
								and caregivers to develop personalized learning
								pathways that extend from the classroom to the
								home.
							</p>
						</div>
						<div className="bg-neutral-100 rounded-lg shadow-sm p-8 border border-neutral-200">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
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
										d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-dark">
								Whole-Child Focus
							</h3>
							<p className="mt-4 text-neutral-500">
								We approach education by nurturing all aspects
								of development—cognitive, social, emotional, and
								physical. By addressing the whole child, we
								create emotionally attuned learning experiences
								that build confidence, curiosity, and capability
								from early childhood through adolescence.
							</p>
						</div>
						<div className="bg-neutral-100 rounded-lg shadow-sm p-8 border border-neutral-200">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
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
										d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-dark">
								Global Perspective
							</h3>
							<p className="mt-4 text-neutral-500">
								Our culturally grounded approach embraces
								diverse perspectives from across continents. We
								integrate global best practices while respecting
								local contexts, preparing children to thrive in
								an interconnected world while maintaining strong
								cultural identities.
							</p>
						</div>
						<div className="bg-neutral-100 rounded-lg shadow-sm p-8 border border-neutral-200">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
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
										d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-dark">
								Excellence
							</h3>
							<p className="mt-4 text-neutral-500">
								We maintain the highest standards in everything
								we do, from research-based methodologies to
								personalized implementation. Our commitment to
								excellence means continuous learning, rigorous
								evaluation, and adaptable approaches that
								consistently deliver measurable results.
							</p>
						</div>
						<div className="bg-neutral-100 rounded-lg shadow-sm p-8 border border-neutral-200">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
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
										d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-dark">
								Quality & Excellence
							</h3>
							<p className="mt-4 text-neutral-500">
								We are committed to providing high-quality
								resources and services that meet the highest
								standards of excellence in early childhood
								education.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Team section */}
			<div className="py-16 sm:py-24">
				<div className="container-custom">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
							Our Team
						</h2>
						<p className="mt-4 text-lg leading-8 text-neutral-600">
							Meet the passionate educators and experts behind New
							Horizons Life.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						<div className="flex flex-col items-center">
							<img
								className="aspect-[3/2] w-52 h-52 rounded-full object-cover"
								src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
								alt="Team member"
							/>
							<h3 className="mt-4 text-lg font-semibold leading-8 text-dark">
								Dr. Kelly Hankat
							</h3>
							{/* <p className="text-base leading-7 text-primary">
								Founder & Lead Educational Consultant
							</p> */}
							<p className="mt-4 text-base leading-7 text-neutral-600 text-center max-w-xs">
								Expert in ECE leadership, instructional systems,
								and organizational development
							</p>
						</div>
						<div className="flex flex-col items-center">
							<img
								className="aspect-[3/2] w-52 h-52 rounded-full object-cover"
								src="./images/mary-jo-pullman-headshot.jpg"
								alt="Team member"
							/>
							<h3 className="mt-4 text-lg font-semibold leading-8 text-dark">
								Dr. Mary Pollman
							</h3>
							{/* <p className="text-base leading-7 text-primary">
								Director of Professional Development
							</p> */}
							<p className="mt-4 text-base leading-7 text-neutral-600 text-center max-w-xs">
								Child development specialist and international
								leader in STREAMS Education (Science,
								Technology, Reading, Engineering, Arts, Math,
								Social Studies), with numerous scholarly
								publications
							</p>
						</div>
						<div className="flex flex-col items-center">
							<img
								className="aspect-[3/2] w-52 h-52 rounded-full object-cover"
								src="./images/dr-Myron-Belfer-headshot.jpg"
								alt="Team member"
							/>
							<h3 className="mt-4 text-lg font-semibold leading-8 text-dark">
								Dr. Myron Belfer, MD, M.P.A.
							</h3>
							{/* <p className="text-base leading-7 text-primary">
								Family Engagement Specialist
							</p> */}
							<p className="mt-4 text-base leading-7 text-neutral-600 text-center max-w-xs">
								Renowned child psychiatrist and global public
								health advocate
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA section */}
			<div className="bg-primary">
				<div className="container-custom py-16">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Join the New Horizons Life Community
						</h2>
						<p className="mt-4 text-lg leading-8 text-blue-100">
							Connect with other ECE professionals, access
							exclusive resources, and enhance your practice.
						</p>
						<div className="mt-8 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-neutral-100 px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-neutral-200"
							>
								Contact Us
							</Link>
							<Link
								to="/contact"
								className="text-sm font-semibold leading-6 text-white"
							>
								Contact us <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
