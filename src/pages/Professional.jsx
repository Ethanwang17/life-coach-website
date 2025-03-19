import React from "react";
import {Link} from "react-router-dom";

export default function Professional() {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 pt-16 pb-20">
				<div className="container-custom">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Professional Services
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Cultural Competence and Inclusion for Educational
							Environments
						</p>
					</div>
				</div>
			</div>

			{/* About Cultural Competence Section */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								About Cultural Competence
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								Creating inclusive educational environments
								where every child feels valued, respected, and
								empowered to learn is essential for optimal
								development and success.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								Our comprehensive services help educators and
								institutions develop cultural competence through
								self-reflection, knowledge-building, and
								practical implementation strategies that create
								truly inclusive learning environments.
							</p>
							<Link
								to="/contact"
								className="btn btn-primary inline-block"
							>
								Contact Us Today
							</Link>
						</div>
						<div className="bg-gray-100 rounded-lg p-8 shadow-md">
							<h3 className="text-2xl font-bold text-primary mb-4">
								Why Cultural Competence Matters
							</h3>
							<ul className="space-y-3">
								<li className="flex items-start">
									<svg
										className="h-6 w-6 text-primary mt-0.5 mr-2"
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
										Improves academic outcomes and
										social-emotional development
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-6 w-6 text-primary mt-0.5 mr-2"
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
										Builds children's self-identity and
										cultural pride
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-6 w-6 text-primary mt-0.5 mr-2"
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
										Creates more equitable and fair
										educational practices
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-6 w-6 text-primary mt-0.5 mr-2"
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
										Strengthens family and community
										engagement
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Services Section */}
			<div className="py-16 bg-gray-50">
				<div className="container-custom">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						Our Professional Development Services
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Workshops & Training
							</h3>
							<p className="text-gray-700 mb-6">
								Interactive sessions designed to build knowledge
								and skills for culturally responsive teaching
								practices.
							</p>
							<ul className="space-y-2 mb-6">
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mt-0.5 mr-2"
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
									<span>Anti-bias education</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mt-0.5 mr-2"
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
										Inclusive classroom environments
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mt-0.5 mr-2"
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
										Culturally responsive teaching
										strategies
									</span>
								</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Consultation Services
							</h3>
							<p className="text-gray-700 mb-6">
								Personalized support for educational
								institutions looking to enhance their cultural
								competence.
							</p>
							<ul className="space-y-2 mb-6">
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mt-0.5 mr-2"
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
									<span>Environmental assessments</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mt-0.5 mr-2"
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
									<span>Policy review and development</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mt-0.5 mr-2"
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
									<span>Curriculum adaptation guidance</span>
								</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Ongoing Coaching
							</h3>
							<p className="text-gray-700 mb-6">
								Sustained support for educators implementing new
								practices in their classrooms.
							</p>
							<ul className="space-y-2 mb-6">
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mt-0.5 mr-2"
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
									<span>Observation and feedback</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mt-0.5 mr-2"
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
									<span>Reflective practice sessions</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mt-0.5 mr-2"
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
										Action planning and accountability
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Approach Section */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="bg-gray-100 rounded-lg p-8 shadow-md">
							<h3 className="text-2xl font-bold text-primary mb-6">
								Our Approach to Cultural Competence
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
									<span>
										Self-reflection and awareness-building
										activities
									</span>
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
									<span>Cultural knowledge development</span>
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
										Skill-building for cross-cultural
										communication
									</span>
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
										Inclusive curriculum design and
										implementation
									</span>
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
										Family engagement strategies that honor
										diversity
									</span>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Resources for Cultural Competence
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								We offer a variety of resources to support your
								journey toward cultural competence in
								educational settings.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
								<div className="bg-primary/10 p-4 rounded-lg">
									<h4 className="font-semibold text-primary">
										Reading Lists
									</h4>
									<p className="text-sm">
										For educators and children
									</p>
								</div>
								<div className="bg-primary/10 p-4 rounded-lg">
									<h4 className="font-semibold text-primary">
										Assessment Tools
									</h4>
									<p className="text-sm">
										For classroom environment evaluation
									</p>
								</div>
								<div className="bg-primary/10 p-4 rounded-lg">
									<h4 className="font-semibold text-primary">
										Curriculum Guides
									</h4>
									<p className="text-sm">
										Multicultural materials
									</p>
								</div>
								<div className="bg-primary/10 p-4 rounded-lg">
									<h4 className="font-semibold text-primary">
										Language Support
									</h4>
									<p className="text-sm">
										For multilingual learners
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						Ready to Build a More Inclusive Educational Environment?
					</h2>
					<p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
						Contact us today to discuss how we can support your
						cultural competence journey.
					</p>
					<Link
						to="/contact"
						className="btn btn-primary inline-block px-8 py-3"
					>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
}
