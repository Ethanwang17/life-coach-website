import {useState} from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const [formStatus, setFormStatus] = useState(null);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// In a real application, you would send the form data to a server here
		console.log("Form submitted:", formData);
		setFormStatus("success");
		// Reset form after submission
		setFormData({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});

		// Clear success message after 5 seconds
		setTimeout(() => {
			setFormStatus(null);
		}, 5000);
	};

	return (
		<div className="bg-white">
			{/* Hero section */}
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="container-custom">
					<div className="max-w-2xl">
						<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Contact Our Child Care
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We're committed to providing a nurturing and
							educational environment for your children. Contact
							us to learn more about enrollment, scheduling, or to
							arrange a visit.
						</p>
					</div>
				</div>
			</div>

			{/* Operating Hours Section - Highlighted */}
			<div className="bg-primary bg-opacity-10 py-16">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							Child Care Hours
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
							<div className="bg-white p-6 rounded-lg shadow-md">
								<h3 className="text-xl font-semibold text-primary mb-4">
									Weekday Hours
								</h3>
								<ul className="space-y-3">
									<li className="flex justify-between">
										<span className="font-medium">
											Monday:
										</span>
										<span>7:30 AM - 6:00 PM</span>
									</li>
									<li className="flex justify-between">
										<span className="font-medium">
											Tuesday:
										</span>
										<span>7:30 AM - 6:00 PM</span>
									</li>
									<li className="flex justify-between">
										<span className="font-medium">
											Wednesday:
										</span>
										<span>7:30 AM - 6:00 PM</span>
									</li>
									<li className="flex justify-between">
										<span className="font-medium">
											Thursday:
										</span>
										<span>7:30 AM - 6:00 PM</span>
									</li>
									<li className="flex justify-between">
										<span className="font-medium">
											Friday:
										</span>
										<span>7:30 AM - 5:30 PM</span>
									</li>
								</ul>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-md">
								<h3 className="text-xl font-semibold text-primary mb-4">
									Additional Information
								</h3>
								<ul className="space-y-3">
									<li>
										<span className="font-medium">
											Weekend:
										</span>
										<span className="block mt-1">
											Closed
										</span>
									</li>
									<li>
										<span className="font-medium">
											Early Drop-off:
										</span>
										<span className="block mt-1">
											Available by arrangement
										</span>
									</li>
									<li>
										<span className="font-medium">
											Late Pick-up:
										</span>
										<span className="block mt-1">
											Please call if you need extended
											hours
										</span>
									</li>
								</ul>
							</div>
						</div>
						<p className="mt-8 text-gray-700">
							We follow the local school district calendar for
							holidays and closures.
						</p>
					</div>
				</div>
			</div>

			{/* Contact information section */}
			<div className="py-16 sm:py-24">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
						{/* Contact Information */}
						<div className="lg:col-span-1">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Get in Touch
							</h2>

							<div className="space-y-8">
								<div>
									<h3 className="text-lg font-medium text-gray-900">
										Email
									</h3>
									<p className="mt-2 text-gray-600">
										childcare@newhorizonslife.com
									</p>
								</div>

								<div>
									<h3 className="text-lg font-medium text-gray-900">
										Phone
									</h3>
									<p className="mt-2 text-gray-600">
										(555) 123-4567
									</p>
									<p className="mt-1 text-sm text-gray-500">
										For emergencies after hours, please call
										(555) 987-6543
									</p>
								</div>

								<div>
									<h3 className="text-lg font-medium text-gray-900">
										Address
									</h3>
									<p className="mt-2 text-gray-600">
										123 Sunshine Lane
										<br />
										Childcare City, ST 12345
									</p>
								</div>

								<div>
									<h3 className="text-lg font-medium text-gray-900">
										Social Media
									</h3>
									<div className="mt-2 flex space-x-4">
										<a
											href="#"
											className="text-gray-600 hover:text-primary"
										>
											<span className="sr-only">
												Facebook
											</span>
											<svg
												className="h-6 w-6"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
													clipRule="evenodd"
												/>
											</svg>
										</a>
										<a
											href="#"
											className="text-gray-600 hover:text-primary"
										>
											<span className="sr-only">
												Instagram
											</span>
											<svg
												className="h-6 w-6"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
													clipRule="evenodd"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Enrollment Inquiry
							</h2>

							{formStatus === "success" && (
								<div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
									Thank you for your inquiry! We'll get back
									to you as soon as possible to discuss
									enrollment options.
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700"
										>
											Parent/Guardian Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-gray-700"
										>
											Phone
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											required
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
										/>
									</div>

									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-700"
										>
											Child's Age
										</label>
										<select
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											required
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
										>
											<option value="">
												Select age range
											</option>
											<option value="Infant (0-12 months)">
												Infant (0-12 months)
											</option>
											<option value="Toddler (1-2 years)">
												Toddler (1-2 years)
											</option>
											<option value="Preschool (3-4 years)">
												Preschool (3-4 years)
											</option>
											<option value="Pre-K (4-5 years)">
												Pre-K (4-5 years)
											</option>
											<option value="School Age (6+ years)">
												School Age (6+ years)
											</option>
										</select>
									</div>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700"
									>
										Additional Information (preferred
										schedule, start date, etc.)
									</label>
									<textarea
										id="message"
										name="message"
										rows="6"
										value={formData.message}
										onChange={handleChange}
										required
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
									></textarea>
								</div>

								<div>
									<button
										type="submit"
										className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
									>
										Submit Inquiry
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="bg-gray-50 py-16 sm:py-24">
				<div className="container-custom">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Our Location
					</h2>
					<div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
						{/* Replace with actual map embed or image */}
						<div className="bg-gray-300 w-full h-96 flex items-center justify-center">
							<p className="text-gray-600 text-lg">
								Map will be displayed here
							</p>
							{/* You would typically add a Google Maps or other map provider iframe here */}
						</div>
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div className="py-16 sm:py-24">
				<div className="container-custom">
					<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
						Frequently Asked Questions
					</h2>

					<div className="max-w-3xl mx-auto space-y-8">
						<div>
							<h3 className="text-xl font-semibold text-gray-900">
								What ages do you accept?
							</h3>
							<p className="mt-2 text-gray-600">
								We provide care for children from 6 weeks to 12
								years old, with specialized programs for each
								developmental stage.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-gray-900">
								What is your staff-to-child ratio?
							</h3>
							<p className="mt-2 text-gray-600">
								We maintain low staff-to-child ratios to ensure
								each child receives quality attention. Our
								ratios meet or exceed state requirements: 1:4
								for infants, 1:6 for toddlers, and 1:10 for
								preschoolers.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-gray-900">
								Do you provide meals?
							</h3>
							<p className="mt-2 text-gray-600">
								Yes, we provide nutritious breakfast, lunch, and
								afternoon snacks. Our meals follow USDA
								guidelines and accommodate food allergies and
								special dietary requirements.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-gray-900">
								What is your illness policy?
							</h3>
							<p className="mt-2 text-gray-600">
								For the health of all children, we ask that sick
								children be kept home until they are
								symptom-free for 24 hours without medication.
								This includes fever, vomiting, diarrhea, or
								contagious conditions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
