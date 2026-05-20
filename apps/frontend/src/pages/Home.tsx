export const Home = () => {
    return (
        <main>
            <section>
                {/**    Hero Image */}
                <img style={{
                    position: 'relative',
                    maxHeight: '50vh',
                }} src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Insurance Consultation" className="w-full  shadow-lg mb-12 w-full h-full object-cover" />
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '40px',
                    borderRadius: '20px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                <h1 className="text-6xl font-bold text-green-900 mb-6">Benefit Resolutions</h1>
                <p className="text-2xl text-green-800 mb-12">Your trusted partner for Medicare and Life Insurance solutions</p>
                <a href="/schedule" className="px-8 py-4 bg-green-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                    Schedule a Meeting
                </a>
                </div>
            </section>
            <section className="max-w-4xl mx-auto my-16 px-6 py-12 bg-white rounded-3xl shadow-xl">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Benefit Resolutions?</h2>
                <p className="text-xl text-gray-700 mb-8">
                    At Benefit Resolutions, we understand that navigating the world of Medicare and Life Insurance can be overwhelming. That's why we're here to help you every step of the way. Our team of experienced agents is dedicated to providing personalized service and expert guidance to ensure you find the best coverage for your needs.
                </p>
                <ul className="list-disc list-inside text-xl text-gray-700 space-y-4">
                    <li><strong>Personalized Consultations:</strong> We take the time to understand your unique situation and goals to recommend the best insurance solutions.</li>
                    <li><strong>Expert Guidance:</strong> Our agents are knowledgeable about the latest Medicare and Life Insurance options, ensuring you get the coverage you deserve.</li>
                </ul>
            </section>

        </main>
    );
}