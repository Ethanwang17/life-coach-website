import {Link} from "react-router-dom";

export default function Behavior() {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 pt-16 pb-20">
				<div className="container-custom">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Behavior Coaching
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Expert support for educators and administrators
							dealing with challenging behaviors in early
							childhood settings.
						</p>
					</div>
				</div>
			</div>

			{/* About Coach Section */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								About Our Coaching
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								With over 30 years of experience working in the
								field of early childhood education, our team has
								developed effective strategies to support
								educators facing challenging behaviors in the
								classroom.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								We provide individualized coaching for
								classrooms or entire schools dealing with
								challenging behaviors such as hitting, biting,
								not listening, and other concerning actions. We
								also support stressed or overwhelmed teachers
								who want to improve their teaching methods.
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
								Why Choose Our Coaching?
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
										100% success rate with teachers
										reporting helpful, practical strategies
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
										Reduces teacher stress and creates
										joyful learning environments
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
										Up to 80% implementation rate (vs. 25%
										for typical PD sessions)
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
										Improves staff engagement, motivation,
										and retention
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
						Our Coaching Services
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								In-Person Coaching
							</h3>
							<p className="text-gray-700 mb-6">
								Our in-person coaching includes a one-day visit
								per month. During each visit, we:
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
									<span>Observe classrooms in action</span>
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
										Provide detailed debriefing for teachers
										and administrators
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
										Recommend specific strategies to
										implement before the next visit
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
										Follow up to ensure strategies are
										working
									</span>
								</li>
							</ul>
							<Link
								to="/contact"
								className="btn btn-primary inline-block"
							>
								Enquire Now
							</Link>
						</div>
						<div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-secondary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Online Coaching
							</h3>
							<p className="text-gray-700 mb-6">
								Our online coaching offers flexible support
								through:
							</p>
							<ul className="space-y-2 mb-6">
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-secondary mt-0.5 mr-2"
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
										Weekly coaching office hours in small
										groups
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-secondary mt-0.5 mr-2"
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
										Teachers share specific challenges
										they're facing
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-secondary mt-0.5 mr-2"
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
										Customized advice and strategies to try
										for the coming week
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-secondary mt-0.5 mr-2"
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
										Recordings shared if you can't join live
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-secondary mt-0.5 mr-2"
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
										Powerful peer learning environment
									</span>
								</li>
							</ul>
							<Link
								to="/contact"
								className="btn btn-secondary inline-block"
							>
								Enquire Now
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						What Educators Say
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
									<h4 className="font-bold">Alyssa Wood</h4>
									<p className="text-sm text-gray-600">
										Director at Kids Planet, CA
									</p>
								</div>
							</div>
							<p className="italic text-gray-700">
								"Working with Light-U_Life has been a game
								changer for us. They've been helpful in asking
								good questions to get a different perspective on
								challenges faced with certain students. This has
								shifted our mindset and helped us find the root
								of behavioral issues to improve success for the
								child."
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
										Courtney Ramsett
									</h4>
									<p className="text-sm text-gray-600">
										Teacher, Wishing Well Preschool
									</p>
								</div>
							</div>
							<p className="italic text-gray-700">
								"These coaching sessions are very helpful and
								have changed our classroom behavior
								significantly. It is a great feeling to have
								strategies that work with the kiddos that make
								you want to pull your hair out. After just two
								meetings, my classroom environment changed
								greatly. I'm entirely grateful for that."
							</p>
						</div>

						<div className="bg-gray-50 rounded-lg p-6 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
									<span className="text-primary font-bold text-xl">
										S
									</span>
								</div>
								<div>
									<h4 className="font-bold">
										Sheila M. Smozynski
									</h4>
									<p className="text-sm text-gray-600">
										Administrator
									</p>
								</div>
							</div>
							<p className="italic text-gray-700">
								"The changes in the classroom have been
								transformational for both the teachers and the
								children. Their knowledge of children's brain
								development and how it transitions into
								behaviors is exceptional. They explain concepts
								in a manner which is easily comprehended by
								teachers and parents."
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-gradient-to-r from-primary to-secondary py-12">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold text-white mb-6">
						Ready to Transform Your Classroom?
					</h2>
					<p className="text-white text-lg mb-8 max-w-2xl mx-auto">
						Contact us today to learn how our behavior coaching can
						help create a more positive, effective learning
						environment for your students and teachers.
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
