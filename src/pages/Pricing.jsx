import React from "react";
import {Link} from "react-router-dom";

export default function Pricing() {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 pt-16 pb-20">
				<div className="container-custom">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Pricing & Packages
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Empowering Families from Birth to College
						</p>
					</div>
				</div>
			</div>

			{/* Program Service Packages Section */}
			<div className="py-16 bg-white">
				<div className="container-custom">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						Program Service Packages
					</h2>
					<div className="overflow-x-auto">
						<table className="w-full text-left border-collapse">
							<thead>
								<tr className="bg-gray-100">
									<th className="p-4 border-b-2 border-gray-200 font-semibold text-gray-700">
										Package
									</th>
									<th className="p-4 border-b-2 border-gray-200 font-semibold text-gray-700">
										Services Included
									</th>
									<th className="p-4 border-b-2 border-gray-200 font-semibold text-gray-700">
										Duration
									</th>
									<th className="p-4 border-b-2 border-gray-200 font-semibold text-gray-700">
										Price
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="hover:bg-gray-50">
									<td className="p-4 border-b border-gray-200">
										Starter
									</td>
									<td className="p-4 border-b border-gray-200">
										1 Assessment + 2 Consultations
									</td>
									<td className="p-4 border-b border-gray-200">
										One-time
									</td>
									<td className="p-4 border-b border-gray-200">
										$1,000
									</td>
								</tr>
								<tr className="hover:bg-gray-50">
									<td className="p-4 border-b border-gray-200">
										Growth
									</td>
									<td className="p-4 border-b border-gray-200">
										Assessment + 3-Month Coaching + IEP +
										Progress Tracking
									</td>
									<td className="p-4 border-b border-gray-200">
										3 Months
									</td>
									<td className="p-4 border-b border-gray-200">
										$2,800
									</td>
								</tr>
								<tr className="hover:bg-gray-50">
									<td className="p-4 border-b border-gray-200">
										Transformation
									</td>
									<td className="p-4 border-b border-gray-200">
										6-Month Support + Monthly Activity Kits
										+ Emotional/Spiritual Coaching
									</td>
									<td className="p-4 border-b border-gray-200">
										6 Months
									</td>
									<td className="p-4 border-b border-gray-200">
										$5,200
									</td>
								</tr>
								<tr className="hover:bg-gray-50">
									<td className="p-4 border-b border-gray-200">
										Premium Year
									</td>
									<td className="p-4 border-b border-gray-200">
										12-Month Services + Regular Reports +
										Dedicated Family Coach
									</td>
									<td className="p-4 border-b border-gray-200">
										12 Months
									</td>
									<td className="p-4 border-b border-gray-200">
										$9,200
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="mt-8 text-center text-gray-700">
						<p className="font-semibold">Add-ons:</p>
						<p>
							Parent-child emotional education course / Parenting
							class – $350
						</p>
					</div>
				</div>
			</div>

			{/* Full Program Overview by Age Section */}
			<div className="py-16 bg-gray-50">
				<div className="container-custom">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						Full Program Overview by Age
					</h2>
					<p className="text-lg text-center text-gray-700 mb-10 max-w-4xl mx-auto">
						Each program includes customized developmental
						assessments, family coaching, educational planning, and
						bilingual services. Service level and intensity can be
						selected based on the family's needs using the packages
						above (Starter, Growth, Transformation, Premium Year).
					</p>

					<div className="space-y-12">
						{/* Ages 0-3 */}
						<div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Ages 0–3 | Good-Start Program
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								<li>
									Whole-child developmental assessment
									(language, motor, emotional, cognitive)
								</li>
								<li>
									In-home observation and caregiver-child
									interaction analysis
								</li>
								<li>
									Play-based learning activities and parent
									guidance
								</li>
								<li>
									Individualized family coaching and
									faith-integrated support
								</li>
							</ul>
						</div>

						{/* Ages 3-6 */}
						<div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-secondary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Ages 3–6 | School-Readiness Program
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								<li>
									School readiness skills: literacy, numeracy,
									attention, and self-regulation
								</li>
								<li>
									Social-emotional development and peer
									interaction
								</li>
								<li>
									Family involvement strategies and STREAMS
									curriculum design
								</li>
								<li>
									Support for preschool-to-elementary
									transition
								</li>
							</ul>
						</div>

						{/* Ages 6-8 */}
						<div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Ages 6–8 | Whole-Child Support
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								<li>
									Learning style identification and academic
									habit building
								</li>
								<li>
									SEL (Social Emotional Learning) and emotion
									management
								</li>
								<li>
									Motivation coaching and independence skills
								</li>
								<li>Communication between home and school</li>
							</ul>
						</div>

						{/* Ages 8-13 */}
						<div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-secondary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Ages 8–13 | Youth Guidance
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								<li>
									Time management, executive functioning, and
									emotional control
								</li>
								<li>
									Academic performance support and enrichment
									planning
								</li>
								<li>
									Peer relationships and puberty transition
									coaching
								</li>
								<li>
									Character formation: integrity,
									responsibility, empathy
								</li>
							</ul>
						</div>

						{/* Ages 13-18 */}
						<div className="p-8 bg-white rounded-lg shadow-md border-l-4 border-primary">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Ages 13–18 | College & Career Preparation
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								<li>
									Academic planning (course selection, AP/IB,
									GPA goals)
								</li>
								<li>
									College application essays and
									recommendations
								</li>
								<li>
									Mental health and stress management tools
								</li>
								<li>
									Career exploration, goal setting, and
									interview training
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action Section */}
			<div className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
				<div className="container-custom text-center">
					<h2 className="text-3xl font-bold mb-6">
						Ready to Empower Your Family?
					</h2>
					<p className="text-xl mb-8">
						Contact us today for a consultation to discuss your
						needs and find the right package for you.
					</p>
					<Link to="/contact" className="btn btn-light inline-block">
						Book A Consultation
					</Link>
				</div>
			</div>
		</div>
	);
}
