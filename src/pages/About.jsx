import {Link} from "react-router-dom";

export default function About() {
	return (
		<div className="bg-white">
			{/* Hero section */}
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="container-custom">
					<div className="max-w-2xl">
						<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							About New Horizons Life
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
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
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Our Mission
							</h2>
							<p className="mt-4 text-lg text-gray-500">
								To simplify education, eliminate barriers, and
								deliver inclusive, high-quality learning
								experiences that empower educators, support
								families, and help children thrive—from birth
								through college admission—across cultures and
								continents.
							</p>

							<p className="mt-4 text-lg text-gray-500">
								We believe every child deserves the opportunity
								to thrive, and every educator deserves the
								support to lead. We deliver personalized,
								research-based services that are culturally
								grounded, emotionally attuned, and globally
								aligned.
							</p>
							<p className="mt-4 text-lg text-gray-500">
								We help early childhood professionals achieve
								their career dreams, and we help families
								develop lifelong learning pathways for their
								children.
							</p>
							<div className="mt-8">
								<Link to="/contact" className="btn btn-primary">
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Values section */}
			<div className="bg-gray-50 py-16 sm:py-24">
				<div className="container-custom">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Values
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							These core principles guide everything we do at New
							Horizons Life.
						</p>
					</div>
					<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<div className="bg-white rounded-lg shadow-sm p-8">
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
							<h3 className="text-xl font-semibold text-gray-900">
								Equity
							</h3>
							<p className="mt-4 text-gray-500">
								We're committed to eliminating barriers by
								creating inclusive learning environments where
								every child has equal access to opportunities.
								Our approaches recognize and address systemic
								challenges while celebrating the unique
								strengths each individual brings to the
								community.
							</p>
						</div>
						<div className="bg-white rounded-lg shadow-sm p-8">
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
							<h3 className="text-xl font-semibold text-gray-900">
								Family-Centered
							</h3>
							<p className="mt-4 text-gray-500">
								We recognize families as the first and most
								important teachers in a child's life. Our
								services honor diverse family structures and
								cultural backgrounds, partnering with parents
								and caregivers to develop personalized learning
								pathways that extend from the classroom to the
								home.
							</p>
						</div>
						<div className="bg-white rounded-lg shadow-sm p-8">
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
							<h3 className="text-xl font-semibold text-gray-900">
								Whole-Child Focus
							</h3>
							<p className="mt-4 text-gray-500">
								We approach education by nurturing all aspects
								of development—cognitive, social, emotional, and
								physical. By addressing the whole child, we
								create emotionally attuned learning experiences
								that build confidence, curiosity, and capability
								from early childhood through adolescence.
							</p>
						</div>
						<div className="bg-white rounded-lg shadow-sm p-8">
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
							<h3 className="text-xl font-semibold text-gray-900">
								Global Perspective
							</h3>
							<p className="mt-4 text-gray-500">
								Our culturally grounded approach embraces
								diverse perspectives from across continents. We
								integrate global best practices while respecting
								local contexts, preparing children to thrive in
								an interconnected world while maintaining strong
								cultural identities.
							</p>
						</div>
						<div className="bg-white rounded-lg shadow-sm p-8">
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
							<h3 className="text-xl font-semibold text-gray-900">
								Excellence
							</h3>
							<p className="mt-4 text-gray-500">
								We maintain the highest standards in everything
								we do, from research-based methodologies to
								personalized implementation. Our commitment to
								excellence means continuous learning, rigorous
								evaluation, and adaptable approaches that
								consistently deliver measurable results.
							</p>
						</div>
						<div className="bg-white rounded-lg shadow-sm p-8">
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
							<h3 className="text-xl font-semibold text-gray-900">
								Quality & Excellence
							</h3>
							<p className="mt-4 text-gray-500">
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
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Team
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
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
							<h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">
								Sarah Johnson, Ph.D.
							</h3>
							<p className="text-base leading-7 text-primary">
								Founder & Lead Educational Consultant
							</p>
							<p className="mt-4 text-base leading-7 text-gray-600 text-center max-w-xs">
								With over 20 years of experience in early
								childhood education, Sarah leads our team with
								passion and expertise.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<img
								className="aspect-[3/2] w-52 h-52 rounded-full object-cover"
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
								alt="Team member"
							/>
							<h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">
								Michael Chen, M.Ed.
							</h3>
							<p className="text-base leading-7 text-primary">
								Director of Professional Development
							</p>
							<p className="mt-4 text-base leading-7 text-gray-600 text-center max-w-xs">
								Michael designs our training programs and
								workshops with a focus on practical,
								evidence-based strategies.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<img
								className="aspect-[3/2] w-52 h-52 rounded-full object-cover"
								src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
								alt="Team member"
							/>
							<h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">
								Jessica Rodriguez, M.A.
							</h3>
							<p className="text-base leading-7 text-primary">
								Family Engagement Specialist
							</p>
							<p className="mt-4 text-base leading-7 text-gray-600 text-center max-w-xs">
								Jessica creates resources that help families
								support their children's learning and
								development at home.
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
						<p className="mt-4 text-lg leading-8 text-indigo-100">
							Connect with other ECE professionals, access
							exclusive resources, and enhance your practice.
						</p>
						<div className="mt-8 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-50"
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
