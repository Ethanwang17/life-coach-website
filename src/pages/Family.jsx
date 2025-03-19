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
							Professional childcare services tailored to your
							family's needs
						</p>
					</div>
				</div>
			</div>

			{/* About Childcare Section */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								About Our Childcare Services
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								We provide high-quality, developmentally
								appropriate childcare services designed to
								nurture your child's growth while providing you
								with peace of mind.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								With over 30 years of experience in early
								childhood education, our approach combines
								play-based learning with individualized
								attention to meet each child's unique needs and
								interests.
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
								Why Choose Our Childcare
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
										Child-centered approach focused on
										developmental needs
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
										Expert-designed activities that promote
										learning through play
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
										Flexible scheduling to accommodate your
										family's needs
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
										Regular communication and updates about
										your child's progress
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
						Our Childcare Services
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Regular Childcare
							</h3>
							<p className="text-gray-700 mb-6">
								Consistent, reliable care for your child on a
								regular schedule.
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
									<span>Full-day and half-day options</span>
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
									<span>Structured daily routines</span>
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
									<span>Educational activities and play</span>
								</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Occasional Care
							</h3>
							<p className="text-gray-700 mb-6">
								Flexible childcare for when you need it the
								most.
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
									<span>Last-minute availability</span>
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
									<span>Evening and weekend options</span>
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
									<span>Pay-as-you-go flexibility</span>
								</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Specialized Care
							</h3>
							<p className="text-gray-700 mb-6">
								Tailored support for children with specific
								needs or interests.
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
									<span>Special needs support</span>
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
									<span>Enrichment activities</span>
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
									<span>Individualized care plans</span>
								</li>
							</ul>
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
								Our Booking Process
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
											We'll discuss your childcare needs,
											your child's interests, and any
											special requirements.
										</p>
									</div>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
										2
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Matching & Planning
										</h4>
										<p className="text-sm text-gray-700">
											We'll create a personalized care
											plan and schedule that works for
											your family.
										</p>
									</div>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
										3
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Introduction Meeting
										</h4>
										<p className="text-sm text-gray-700">
											Your child will meet their caregiver
											in a comfortable setting to build
											rapport.
										</p>
									</div>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
										4
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Begin Services
										</h4>
										<p className="text-sm text-gray-700">
											Childcare services begin with
											regular check-ins to ensure
											satisfaction.
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Rates & Availability
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								Our childcare rates are competitive and based on
								your specific needs. We offer various packages
								to accommodate different schedules and
								requirements.
							</p>
							<div className="grid grid-cols-1 gap-4 mb-6">
								<div className="bg-primary/10 p-6 rounded-lg">
									<h4 className="font-semibold text-primary text-xl mb-2">
										Regular Care Packages
									</h4>
									<p className="mb-2">
										Starting at $25/hour with discounts for
										regular bookings:
									</p>
									<ul className="space-y-1 text-sm">
										<li>• 10+ hours/week: 10% discount</li>
										<li>• 20+ hours/week: 15% discount</li>
										<li>• 30+ hours/week: 20% discount</li>
									</ul>
								</div>
								<div className="bg-primary/10 p-6 rounded-lg">
									<h4 className="font-semibold text-primary text-xl mb-2">
										Availability
									</h4>
									<ul className="space-y-1">
										<li>• Weekdays: 7:00 AM - 7:00 PM</li>
										<li>
											• Weekends: Limited availability
										</li>
										<li>
											• After-hours care available upon
											request
										</li>
									</ul>
									<p className="mt-2 text-sm font-medium">
										Early booking is recommended for
										consistent schedules.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials Section */}
			<div className="py-16 bg-gray-50">
				<div className="container-custom">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						What Families Say About Us
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg shadow-md p-8">
							<div className="flex items-center mb-4">
								<div className="text-yellow-400 flex">
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-700 italic mb-4">
								"The care our son receives is exceptional. The
								activities are always engaging and educational,
								and we've seen tremendous growth in his social
								skills and confidence."
							</p>
							<p className="font-medium text-gray-900">
								- Jessica T., Parent of a 4-year-old
							</p>
						</div>
						<div className="bg-white rounded-lg shadow-md p-8">
							<div className="flex items-center mb-4">
								<div className="text-yellow-400 flex">
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-700 italic mb-4">
								"As a working parent with an irregular schedule,
								I've been impressed by the flexibility and
								understanding. My daughter loves her caregiver
								and is always excited to spend time with her."
							</p>
							<p className="font-medium text-gray-900">
								- Michael R., Parent of a 6-year-old
							</p>
						</div>
						<div className="bg-white rounded-lg shadow-md p-8">
							<div className="flex items-center mb-4">
								<div className="text-yellow-400 flex">
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-700 italic mb-4">
								"Finding quality care for our child with special
								needs was challenging until we found this
								service. The personalized approach and expertise
								have made all the difference in our lives."
							</p>
							<p className="font-medium text-gray-900">
								- Sarah and David K., Parents of a 5-year-old
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						Ready to Book Your Childcare Services?
					</h2>
					<p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
						Contact us today to schedule a consultation and learn
						more about how we can support your family.
					</p>
					<Link
						to="/contact"
						className="btn btn-primary inline-block px-8 py-3"
					>
						Book Now
					</Link>
				</div>
			</div>
		</div>
	);
}
