import {Link} from "react-router-dom";

export default function NAEYC() {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 pt-16 pb-20">
				<div className="container-custom">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							NAEYC Accreditation Consulting
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Expert guidance for early childhood programs seeking
							NAEYC accreditation or reaccreditation.
						</p>
					</div>
				</div>
			</div>

			{/* About NAEYC Consulting Section */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								About Our NAEYC Consulting
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								We provide comprehensive support for U.S. and
								international programs seeking NAEYC
								accreditation or reaccreditation.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								With over 10 years of successful results with
								preschools, centers, and bilingual institutions,
								our consulting services can be individualized
								for new programs starting the accreditation
								process or for existing programs going through
								reaccreditation.
							</p>
							<div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary mt-8">
								<p className="text-2xl font-bold text-primary">
									85%+ Success Rate
								</p>
								<p className="text-gray-700">
									Over 85% of programs that received our
									consultation support successfully achieved
									NAEYC accreditation within 18 months.
								</p>
							</div>
							<Link
								to="/contact"
								className="btn btn-primary inline-block mt-8"
							>
								Contact Us Today
							</Link>
						</div>
						<div className="bg-gray-100 rounded-lg p-8 shadow-md">
							<h3 className="text-2xl font-bold text-primary mb-6">
								Our Support Includes
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start">
									<svg
										className="h-6 w-6 text-primary mt-0.5 mr-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>Learning environment design</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-6 w-6 text-primary mt-0.5 mr-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>Policy and documentation</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-6 w-6 text-primary mt-0.5 mr-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>Staff development and training</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-6 w-6 text-primary mt-0.5 mr-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>Parent engagement strategies</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-6 w-6 text-primary mt-0.5 mr-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>
										Comprehensive classroom observations
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Training Section */}
			<div className="py-16 bg-gray-50">
				<div className="container-custom">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						Staff Training Programs
					</h2>
					<p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
						We offer comprehensive staff training sessions on
						accreditation-specific topics to ensure your entire team
						is prepared for the NAEYC evaluation process.
					</p>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow">
							<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
								<span className="text-primary font-bold text-xl">
									1
								</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								NAEYC Process & Standards
							</h3>
							<p className="text-gray-700">
								A comprehensive overview of the NAEYC
								accreditation process, timeline, and the
								standards your program needs to meet.
							</p>
						</div>

						<div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow">
							<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
								<span className="text-primary font-bold text-xl">
									2
								</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								NAEYC Code of Ethics
							</h3>
							<p className="text-gray-700">
								Training on ethical responsibilities to
								children, families, colleagues, and the
								community according to NAEYC guidelines.
							</p>
						</div>

						<div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow">
							<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
								<span className="text-primary font-bold text-xl">
									3
								</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Diversity & Inclusion
							</h3>
							<p className="text-gray-700">
								How to integrate diversity, equity, equality,
								and inclusion practices that start in early
								childhood education.
							</p>
						</div>

						<div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow">
							<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
								<span className="text-primary font-bold text-xl">
									4
								</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Appropriate Curriculum
							</h3>
							<p className="text-gray-700">
								Guidance on creating developmentally appropriate
								curriculum and learning environments that meet
								NAEYC standards.
							</p>
						</div>
					</div>
					<div className="text-center mt-10">
						<Link
							to="/contact"
							className="btn btn-primary inline-block"
						>
							Enquire About Training
						</Link>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						Success Stories
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-gray-50 rounded-lg p-6 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
									<span className="text-primary font-bold text-xl">
										A
									</span>
								</div>
								<div>
									<h4 className="font-bold">Anna Ileto</h4>
									<p className="text-sm text-gray-600">
										St. Peter's ECDC Director, Kingsland
										campus
									</p>
								</div>
							</div>
							<p className="italic text-gray-700">
								"They truly helped us in prepping for our
								re-accreditation. From mock visits, we've
								learned to modify our physical environment, tell
								our classroom's story, and highlight our
								uniqueness and diverse community. They left us
								with things to reflect on and ideas to implement
								right away!"
							</p>
						</div>

						<div className="bg-gray-50 rounded-lg p-6 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
									<span className="text-primary font-bold text-xl">
										C
									</span>
								</div>
								<div>
									<h4 className="font-bold">
										Chasity Archer
									</h4>
									<p className="text-sm text-gray-600">
										Director of Katherine Sage Temple
										Preschool
									</p>
								</div>
							</div>
							<p className="italic text-gray-700">
								"WE ARE NAEYC Accredited!!! I want to thank you
								from the bottom of my heart for all of your
								help! We could not have done this without you.
								We will be in touch for the in-service
								trainings!"
							</p>
						</div>

						<div className="bg-gray-50 rounded-lg p-6 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
									<span className="text-primary font-bold text-xl">
										J
									</span>
								</div>
								<div>
									<h4 className="font-bold">Jackie Wirth</h4>
									<p className="text-sm text-gray-600">
										Infant teacher at Zoon Around Preschool,
										Nevada
									</p>
								</div>
							</div>
							<p className="italic text-gray-700">
								"They are a great NAEYC coach. Always so
								positive and excited to see the homework I have
								completed. They give me the best feedback. Their
								coaching has actually helped me uncover lots of
								learnings and I always look forward to our
								meetings!"
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-gradient-to-r from-primary to-secondary py-12">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold text-white mb-6">
						Ready to Achieve NAEYC Accreditation?
					</h2>
					<p className="text-white text-lg mb-8 max-w-2xl mx-auto">
						Contact us today to learn how our NAEYC consulting
						services can help your program achieve accreditation and
						provide the highest quality early childhood education.
					</p>
					<Link
						to="/contact"
						className="btn bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg"
					>
						Get Started Today
					</Link>
				</div>
			</div>
		</div>
	);
}
