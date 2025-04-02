import React from "react";
import {Link} from "react-router-dom";

export default function Family() {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 pt-16 pb-20">
				<div className="container-custom">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Family Services
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Comprehensive support for families and children from
							birth to adulthood
						</p>
					</div>
				</div>
			</div>

			{/* About Family Services Section */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								About Our Family Services
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								We provide comprehensive family support services
								designed to nurture your child's growth and
								development while empowering parents through
								every life stage and transition.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								Our expert consultants work with families to
								create personalized plans that address
								educational needs, family dynamics, and cultural
								considerations. Services are available in
								English and Mandarin with sliding scale pricing
								and custom packages.
							</p>
							<Link
								to="/contact"
								className="btn btn-primary inline-block"
							>
								Book A Consultation
							</Link>
						</div>
						<div className="bg-gray-100 rounded-lg p-8 shadow-md">
							<h3 className="text-2xl font-bold text-primary mb-4">
								Why Choose Our Family Services
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
										Personalized approach tailored to your
										family's unique needs
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
										Bilingual services in English and
										Mandarin
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
										Flexible scheduling and affordable
										pricing options
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
										Expert support for immigrant families
										adapting to U.S. education
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
						Our Family Services
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Personalized Education Service Plans
							</h3>
							<p className="text-gray-700 mb-6">
								Comprehensive educational planning and support
								for children from birth to 18 years.
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
									<span>
										Developmental milestone tracking
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
									<span>Educational goal setting</span>
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
									<span>Resource coordination</span>
								</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Teen Career & Academic Planning
							</h3>
							<p className="text-gray-700 mb-6">
								Helping teens navigate their educational and
								career journeys with confidence.
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
									<span>
										Interest and aptitude assessment
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
									<span>College application support</span>
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
									<span>Future planning strategies</span>
								</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Family Coaching
							</h3>
							<p className="text-gray-700 mb-6">
								Supporting families through major life
								transitions with expert guidance.
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
									<span>Expecting and new parents</span>
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
									<span>Transitioning families</span>
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
									<span>Immigrant family support</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Immigrant Family Support Section */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 shadow-md">
							<h3 className="text-2xl font-bold text-primary mb-6">
								Immigrant Family Support
							</h3>
							<p className="text-gray-700 mb-6">
								We provide specialized services for immigrant
								families navigating the U.S. educational system.
							</p>
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
										Understanding the U.S. education system
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
									<span>Cultural adaptation strategies</span>
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
										Bilingual services in English and
										Mandarin
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
										School advocacy and partnership building
									</span>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Pricing & Availability
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								We believe in making quality family services
								accessible to all. Our pricing is flexible and
								based on your family's specific needs.
							</p>
							<div className="grid grid-cols-1 gap-4 mb-6">
								<div className="bg-primary/10 p-6 rounded-lg">
									<h4 className="font-semibold text-primary text-xl mb-2">
										Flexible Pricing Options
									</h4>
									<ul className="space-y-1">
										<li>
											• Sliding scale pricing available
										</li>
										<li>
											• Custom packages for comprehensive
											needs
										</li>
										<li>• Single session options</li>
										<li>• Monthly support plans</li>
									</ul>
								</div>
								<div className="bg-primary/10 p-6 rounded-lg">
									<h4 className="font-semibold text-primary text-xl mb-2">
										Languages Offered
									</h4>
									<p className="mb-2">
										All services available in:
									</p>
									<ul className="space-y-1">
										<li>• English</li>
										<li>• Mandarin</li>
									</ul>
								</div>
							</div>
							<Link
								to="/contact"
								className="btn btn-primary inline-block mt-4"
							>
								Request Pricing Information
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Booking Process Section */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="bg-gray-100 rounded-lg p-8 shadow-md">
							<h3 className="text-2xl font-bold text-primary mb-6">
								Our Consultation Process
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start">
									<div className="flex-shrink-0 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
										1
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Initial Consultation
										</h4>
										<p className="text-sm text-gray-700">
											We'll discuss your family's needs,
											goals, and any specific challenges
											you're facing.
										</p>
									</div>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
										2
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Personalized Plan Development
										</h4>
										<p className="text-sm text-gray-700">
											We'll create a customized service
											plan based on your unique family
											situation and goals.
										</p>
									</div>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
										3
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Implementation & Support
										</h4>
										<p className="text-sm text-gray-700">
											We'll guide you through implementing
											strategies and provide ongoing
											support as needed.
										</p>
									</div>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
										4
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Progress Review & Adjustments
										</h4>
										<p className="text-sm text-gray-700">
											Regular check-ins to evaluate
											progress and make adjustments to
											your plan as needed.
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Who We Serve
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								Our family services are designed to support
								families at all stages of their journey, with
								specialized expertise in the following areas:
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
								<div className="bg-primary/10 p-4 rounded-lg">
									<h4 className="font-semibold text-primary">
										Expecting & New Parents
									</h4>
									<p className="text-sm">
										Preparing for parenthood and early
										childhood
									</p>
								</div>
								<div className="bg-primary/10 p-4 rounded-lg">
									<h4 className="font-semibold text-primary">
										School-Age Families
									</h4>
									<p className="text-sm">
										Navigating K-12 education effectively
									</p>
								</div>
								<div className="bg-primary/10 p-4 rounded-lg">
									<h4 className="font-semibold text-primary">
										Immigrant Families
									</h4>
									<p className="text-sm">
										Adapting to U.S. educational systems
									</p>
								</div>
								<div className="bg-primary/10 p-4 rounded-lg">
									<h4 className="font-semibold text-primary">
										Families with Teens
									</h4>
									<p className="text-sm">
										Planning for college and career
										transitions
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
						Ready to Support Your Family's Success?
					</h2>
					<p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
						Contact us today to schedule a consultation and discover
						how our personalized family services can support your
						family's unique journey.
					</p>
					<Link
						to="/contact"
						className="btn btn-primary inline-block px-8 py-3"
					>
						Book a Consultation
					</Link>
				</div>
			</div>
		</div>
	);
}
