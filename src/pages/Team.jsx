import {Link} from "react-router-dom";

export default function Team() {
	return (
		<div className="bg-neutral-100">
			{/* Hero section */}
			<div className="bg-neutral-200 py-24 sm:py-32">
				<div className="container-custom">
					<div className="max-w-2xl">
						<h2 className="text-4xl font-bold tracking-tight text-dark sm:text-6xl">
							Our Team
						</h2>
						<p className="mt-6 text-lg leading-8 text-neutral-600">
							Meet the passionate educators and experts behind New
							Horizons Life.
						</p>
					</div>
				</div>
			</div>

			{/* Team section */}
			<div className="py-16 sm:py-24">
				<div className="container-custom">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
							Leadership Team
						</h2>
						<p className="mt-4 text-lg leading-8 text-neutral-600">
							Dedicated experts committed to empowering families
							and educators.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
						<div className="flex flex-col items-center">
							<img
								className="aspect-[3/2] w-52 h-52 rounded-full object-cover"
								src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
								alt="Team member"
							/>
							<h3 className="mt-4 text-lg font-semibold leading-8 text-dark">
								Dr. Kelly Hantak
							</h3>
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
							<p className="mt-4 text-base leading-7 text-neutral-600 text-center max-w-xs">
								Renowned child psychiatrist and global public
								health advocate
							</p>
						</div>
						<div className="flex flex-col items-center">
							<img
								className="aspect-[3/2] w-52 h-52 rounded-full object-cover"
								src="./images/Kevin-nugent-headshot.jpg"
								alt="Team member"
							/>
							<h3 className="mt-4 text-lg font-semibold leading-8 text-dark">
								Dr. Kevin Nugent
							</h3>
							<p className="mt-4 text-base leading-7 text-neutral-600 text-center max-w-xs">
								Leading developmental psychologist and founder
								of the Brazelton Institute.
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
							Connect with our experts to enhance your parenting
							journey and support your family's growth.
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
